import {Keychain} from "./Keychain";
import {Strings} from "./Tools/Strings";
import {Balance, BaseCoinHandler, OnlineCoinHandler} from "./Handlers/BaseCoinHandler";
import {createAllCoinHandlers, isOnlineCoinHanlder} from "./AllCoinHandlers";
import {Wallet} from "./Wallet";
import {
    isPortfolioItemData, isPortfolioLegacyItemData,
    PortfolioAddress,
    PortfolioBalance,
    PortfolioItem,
    PortfolioItemData,
    PortfolioLegacyItemData
} from "./PortfolioItem";
import {CoinGeckoProvider} from "./PriceProviders/CoinGeckoProvider";
import {BasePriceProvider} from "./PriceProviders/BasePriceProvider";
import {CoinPaprikaProvider} from "./PriceProviders/CoinPaprikaProvider";
import {CoinMarketCapProvider} from "./PriceProviders/CoinMarketCapProvider";
import {BaseExchangeProvider} from "./ExchangeProviders/BaseExchangeProvider";
import {UniswapProdProvider, UniswapTestProvider} from "./ExchangeProviders/UniswapProvider";
import {ChangellyProvider} from "./ExchangeProviders/ChangellyProvider";
import {ChangeNowProvider} from "./ExchangeProviders/ChangeNowProvider";
import {Version} from "./Tools/Changelog";
import {Https} from "./Core/Https";
import {Encryptor} from "./Core/Encryptor";

export {Keychain}
export {Strings}

export interface StorageInterface {
    setItem(
        name: string,
        value: any,
        success: () => void,
        error : (error: any) => void
    ) : void
    getItem(
        name: string,
        success: (value: any) => void,
        error: (value: any) => void
    ) : void
}

export interface LogInterface {
    error(html : string, coinCode? : string, debug? : any): void
    info(html : string, coinCode? : string, debug? : any): void
    success(html : string, coinCode? : string, debug? : any): void
}

export interface CacheInterface {
    setItem(key: string, value: any): void
    getItem(key: string): any
}

export class CacheWrapper {
    cache : CacheInterface;

    constructor(cache: CacheInterface) {
        this.cache = cache;
    }

    set(key : string, value: any) {
        this.cache.setItem('c_' + key, JSON.stringify(value))
    }

    get(key : string, defaultValue: any) : any {
        var ret = this.cache.getItem('c_' + key);
        return ret == null ? defaultValue : JSON.parse(ret);
    }

    async getCached(
        key : string,
        lifetime : number,
        resolver : () => Promise<any>
    ) : Promise<any> {
        var ret = this.cache.getItem('c_' + key);
        var now = (+new Date()) / 1000;
        var updated = this.cache.getItem('c_' + key + '_lastUpdate');
        if ((ret == null) || (updated == null) || (now - updated > lifetime)) {
            let ret = await resolver();
            this.cache.setItem('c_' + key + '_lastUpdate', now);
            this.cache.setItem('c_' + key, JSON.stringify(ret));
            return ret;
        } else {
            return JSON.parse(ret);
        }
    }
}

export class Settings {

    storage : CacheInterface

    constructor(storage: CacheInterface) {
        this.storage = storage;
    }

    get(key: string, dafaultValue: any) : any {
        let ret = this.storage.getItem('s_' + key);
        return ret == null ? dafaultValue : JSON.parse(ret);
    }

    set(key: string, value: any) : any {
        this.storage.setItem('s_' + key, JSON.stringify(value))
    }

    testCoinsEnabled() : boolean {
        return this.get('enableTestCoins', false)
    }

    setTestCoinsEnabled(value : boolean) : void {
        this.set('enableTestCoins', value);
    }
}

export class Engine {

    wallets: { [code: string] : Wallet } = {}
    keychain: Keychain
    storage: StorageInterface
    log: LogInterface
    cache: CacheWrapper
    settings: Settings
    encryptor: Encryptor
    allCoinHandlers: { [code: string] : BaseCoinHandler }
    allPriceProviders: { [code: string] : BasePriceProvider } = {}
    allExchangeProviders: { [code: string] : BaseExchangeProvider } = {}
    priceProvider: BasePriceProvider

    constructor(storage: StorageInterface, log: LogInterface, cache: CacheInterface) {
        this.storage = storage
        this.log = log
        this.cache = new CacheWrapper(cache);
        this.settings = new Settings(cache);
        this.encryptor = new Encryptor();

        let priceProviders = [
            new CoinPaprikaProvider(this.cache),
            new CoinGeckoProvider(this.cache),
            new CoinMarketCapProvider(this.cache)
        ]
        for (let i =0; i<priceProviders.length; i++) {
            this.allPriceProviders[priceProviders[i].name] = priceProviders[i];
        }
        let pp : string = this.cache.get('priceProvider', 'coinpaprika.com');
        if (!(pp in this.allPriceProviders)) { pp = 'coinpaprika.com'}
        this.priceProvider = this.allPriceProviders[pp];
        this.priceProvider.unit = this.cache.get(this.priceProvider.name + '_priceUnit', this.priceProvider.defaultUnit)
        this.allCoinHandlers = createAllCoinHandlers(this);

        let exchangeProviders = [
            new UniswapProdProvider(this),
            new UniswapTestProvider(this),
            new ChangellyProvider(this),
            new ChangeNowProvider(this)
        ]
        for (let i =0; i<exchangeProviders.length; i++) {
            this.allExchangeProviders[exchangeProviders[i].key] = exchangeProviders[i];
        }
    }

    async init(): Promise<any> {
        console.log("INITIALISING");

        let wallets = await this.storageGet('wallets');
        if (wallets && 'bip39' in wallets) {
            console.log('migrating legacy data...');
            this.keychain = new Keychain(wallets.bip39.mnemonic);
            for (let code in wallets) {
                if (wallets.hasOwnProperty(code) && code != 'bip39') {
                    if (wallets[code].enabled) {
                        this.addWallet(code, wallets[code].offlineWallets)
                    }
                }
            }
            console.log('saving...');
            await this.saveData();
        } else {
            let mnemonic : string = await this.storageGet('mnemonic');
            if (mnemonic) {
                this.keychain = new Keychain(mnemonic);
                for (let code in wallets) {
                    if (wallets.hasOwnProperty(code)) {
                        this.addWallet(code, wallets[code].portfolio)
                    }
                }
            }
        }
    }

    getFiatValue(balance : Balance) : number {
        return balance.totalFloat() * this.priceProvider.getPrice(
            balance.handler
        );
    }

    getFiatValueString(balance : Balance) : string {
        return this.priceProvider.convert(
            balance.totalFloat(),
            balance.handler
        )
    }

    getValueString(balance : Balance) : string {
        return balance.totalFloat() + ' ' + balance.handler.ticker;
    }

    getCache(key: string, dafaultValue: any) : any {
        return this.cache.get(key, dafaultValue)
    }

    setCache(key: string, value: any) : any {
        return this.cache.set(key, value);
    }

    setPriceProvider(index: string, unit: string) {
        this.priceProvider = this.allPriceProviders[index]
        this.cache.set('priceProvider', index)
        this.priceProvider.unit = unit
        this.cache.set(this.priceProvider.name + '_priceUnit', unit)
    }

    addWallet(code: string, portfolio: PortfolioLegacyItemData[]|PortfolioItemData[]): void {
        //TODO feeCoin warning
        if (!(code in this.allCoinHandlers)) {
            this.log.error('coin ' + code + ' is no longer supported. It will be disabled.');
        } else {
            let wallet = new Wallet(this, code, this.allCoinHandlers[code], this.keychain)
            wallet.portfolio = this.loadPortfolio(wallet.handler, portfolio);
            this.wallets[code] = wallet;
        }
    }

    async saveData(): Promise<any> {
        console.log("SAVING DATA");
        await this.storageSet('mnemonic', this.keychain.mnemonic);
        let wallets :  { [code: string] : { portfolio: PortfolioItemData[]} } = {};
        for (let code in this.wallets) {
            let portfolio = [];
            for (let i = 0; i < this.wallets[code].portfolio.length; i++) {
                portfolio.push(this.wallets[code].portfolio[i].getData())
            }
            wallets[code] = {
                portfolio: portfolio
            }
        }
        await this.storageSet('wallets', wallets);
        let encryptedData = this.encryptor.encryptData(this.keychain, wallets)
        let response = await Https.makeJsonRequest('api.wallet.coffee', '/saveData.json', encryptedData)
        console.log(response)
    }

    loadPortfolio(handler: BaseCoinHandler, data: PortfolioLegacyItemData[]|PortfolioItemData[]): PortfolioItem[] {
        let portfolio : PortfolioItem[] = [];
        for (let i = 0; i < data.length; i++) {
            let row = data[i];
            let item: PortfolioItem;
            if (isPortfolioLegacyItemData(row)) {
                if (row.addr) {
                    item = new PortfolioAddress(row.comment, row.addr);
                } else {
                    item = new PortfolioBalance(row.comment, row.balance);
                }
            } else if (isPortfolioItemData(row)) {
                if (row.address) {
                    item = new PortfolioAddress(row.label, row.address);
                } else {
                    item = new PortfolioBalance(row.label, row.balance);
                }
            }
            portfolio.push(item)
        }
        return portfolio;
    }

    validateMnemonic(mnemonic: string) {
        return Keychain.validateMnemonic(mnemonic);
    }

    recoverKeychain(mnemonic: string) {
        this.keychain = new Keychain(mnemonic);
    }

    createNewKeychain() {
        this.keychain = new Keychain(Keychain.newMnemonic());
    }

    keychainCreated(): boolean {
        return (this.keychain != null);
    }

    storageGet(key: string): Promise<any> {
        let engine = this;
        return new Promise(function (resolve, reject) {
            engine.storage.getItem(
                key,
                resolve,
                function(error){
                    if (typeof error.code == "object" && 'code' in error.code){
                        //this fixes weird bug in secure storege plugin
                        error = error.code;
                    }
                    if (error.code == 2) {
                        resolve(null);
                    } else {
                        reject(error)
                    }
                }
            );

        });
    }

    storageSet(key: string, value: any): Promise<void> {
        let engine = this;
        return new Promise(function (resolve, reject) {
            engine.storage.setItem(key, value, resolve, reject);
        });
    }

    shortAmount(floatValue : number, unit : string, maxchars : number) : string {
        maxchars = maxchars - unit.length - 1;
        return floatValue.toString().substring(0, maxchars - 2) + '..&nbsp;' + unit;
    }

    shortAddr(address: string, maxchars: number) : string {
        if (address.length > maxchars) {
            var half = (maxchars - 3) / 2;
            return address.substring(0, half) + '...' + address.substring(address.length - half, address.length);
        } else {
            return address;
        }
    }

    isOnline(handler : BaseCoinHandler) : handler is OnlineCoinHandler {
        return isOnlineCoinHanlder(handler);
    }

    getPaperWalletData(handler : OnlineCoinHandler) :
        { title:string, publicText:string, privateText:string, address:string, footer:string } {
        let coinCode = handler.ticker;
        let coinName = Strings.slugify(handler.name);
        let randomPriv = handler.newRandomPrivateKey();
        let randomAddr = handler.addressFromPrivateKey(randomPriv);
        let randomAddrStr = coinName + ':' + randomAddr;

        return {
            title: coinCode + ' paper wallet',
            publicText: randomAddrStr,
            privateText: randomPriv,
            address: randomAddr,
            footer: 'Generated by Coffee Wallet ' + Version.version
        }
    }
}
