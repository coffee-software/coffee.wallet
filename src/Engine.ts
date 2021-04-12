import {Keychain} from "./Keychain";
import {BaseCoinHandler} from "./Handlers/BaseCoinHandler";
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
import {BigNum} from "./BigNum";

let jazzicons = require('@metamask/jazzicon');

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

    get(key : string, defaultValue: any) {
        var ret = this.cache.getItem('c_' + key);
        return ret == null ? defaultValue : JSON.parse(ret);
    }

    async getCached(
        key : string,
        lifetime : number,
        getCallback : (callback:(value: any) => void) => void
    ) : Promise<any> {
        let cache = this.cache;
        return new Promise(function (resolve, reject) {
            var ret = cache.getItem('c_' + key);
            var now = (+new Date()) / 1000;
            var updated = cache.getItem('c_' + key + '_lastUpdate');
            if ((ret == null) || (updated == null) || (now - updated > lifetime)) {
                getCallback(function (value) {
                    cache.setItem('c_' + key + '_lastUpdate', now);
                    cache.setItem('c_' + key, JSON.stringify(value));
                    resolve(value);
                });
            } else {
                resolve(JSON.parse(ret));
            }
        });
    }
}

export class Engine {

    wallets: { [code: string] : Wallet } = {}
    keychain: Keychain
    storage: StorageInterface
    log: LogInterface
    cache: CacheWrapper
    allCoinHandlers: { [code: string] : BaseCoinHandler }

    constructor(storage: StorageInterface, log: LogInterface, cache: CacheInterface) {
        this.storage = storage
        this.log = log
        this.cache = new CacheWrapper(cache);
    }

    init(callback: ()=>void) {
        console.log("INITIALISING");
        this.allCoinHandlers = createAllCoinHandlers(this.log, this.cache);
        this.initAsync().then(callback)
    }

    addWallet(code: string, portfolio: PortfolioLegacyItemData[]|PortfolioItemData[]): void {
        //TODO feeCoin warning
        if (!(code in this.allCoinHandlers)) {
            this.log.error('coin ' + code + ' is no longer supported. It will be disabled.');
        } else {
            let wallet = new Wallet(this.allCoinHandlers[code], this.keychain)
            wallet.portfolio = this.loadPortfolio(wallet.handler, portfolio);
            this.wallets[code] = wallet;
        }
    }

    async initAsync(): Promise<any> {
        let wallets = await this.storageGet('wallets');
        if ('bip39' in wallets) {
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
        console.log(this.keychain)
        console.log(this.wallets)
    }

    async saveData(): Promise<any> {
        console.log("SAVING DATA");
        await this.storageSet('mnemonic', this.keychain.mnemonic);
        let wallets :  { [code: string] : { portfolio: PortfolioItemData[]} } = {};
        for (let code in this.wallets) {
            console.log(code);
            let portfolio = [];
            for (let i = 0; i < this.wallets[code].portfolio.length; i++) {
                portfolio.push(this.wallets[code].portfolio[i].getData())
            }
            wallets[code] = {
                portfolio: portfolio
            }
        }
        await this.storageSet('wallets', wallets);
        //TODO save online
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

    createNewKeychain() {
        this.keychain = new Keychain(Keychain.newMnemonic());
    }

    keychainCreated(): boolean {
        return (this.keychain != null);
    }

    storageGet(key: string): Promise<any> {
        let engine = this;
        return new Promise(function (resolve, reject) {
            engine.storage.getItem(key, resolve, reject);
        });
    }

    storageSet(key: string, value: any): Promise<void> {
        let engine = this;
        return new Promise(function (resolve, reject) {
            engine.storage.setItem(key, value, resolve, reject);
        });
    }

}

export { jazzicons }
