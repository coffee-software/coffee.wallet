import { ethers } from "ethers"
import {Balance, BaseCoinHandler, NewTransaction, OnlineCoinHandler} from "./BaseCoinHandler";
import {BigNum} from "../Core/BigNum";
import {Keychain} from "../Keychain";
import {BaseProvider} from "@ethersproject/providers/src.ts/base-provider";
import {TransactionRequest} from "@ethersproject/abstract-provider/src.ts";
import {Wallet} from "@ethersproject/wallet/src.ts";
import * as bip32 from "bip32";
import {Engine} from "../Engine";
import {Config} from "../../src/Config";
import {CoinAddressIcon} from "../Widgets/CoinAddressIcon";
import {Strings} from "../Tools/Strings";
import {TransactionReceipt} from "@ethersproject/abstract-provider";
import {BigNumber} from "@ethersproject/bignumber";

export class EthTransaction implements NewTransaction {
    handler: BaseEthersHanlder
    data : TransactionRequest
    signed: string
    displayAmount: BigNum
    totalAmount: BigNum
    displayReceiver: string
    static fakeReceiver = '0x0000000000000000000000000000000000000000'

    constructor(handler: BaseEthersHanlder, data : TransactionRequest, signed: string, totalAmount: BigNum, displayAmount: BigNum, displayReceiver: string) {
        this.data = data
        this.handler = handler
        this.signed = signed
        this.displayAmount = displayAmount
        this.totalAmount = totalAmount
        this.displayReceiver = displayReceiver
    }

    isValid(): boolean {
        return this.displayReceiver != EthTransaction.fakeReceiver;
    }

    getAmountDisplay() : string {
        return this.displayAmount.toFloat(this.handler.decimals).toFixed(10) + ' ' + this.handler.ticker;
    }

    getRecipientDisplay() : string {
        return this.data.to;
    }

    getBalanceAfter(): Balance {
        let after : BigNum
        if (this.handler.getFeeHandler() == this.handler) {
            after = this.totalAmount.sub(this.getMaxGas()).sub(this.displayAmount);
        } else {
            after = this.totalAmount.sub(this.displayAmount);
        }
        return new Balance(this.handler, after)
    }

    getMaxGas(): BigNum {
        let ret = new BigNum(this.data.gasLimit.toString())
        ret = ret.mul(new BigNum(this.data.gasPrice.toString()))
        return ret;
    }

    getFeeTotal(): Balance {
        return new Balance(this.handler.getFeeHandler(), this.getMaxGas())
    }

    getFeeInfo(): string {
        return "gas price: " + ((this.data.gasPrice as number) / 1000000000).toFixed(2) + "GWEI";
    }

    getFeeETA(): string {
        return "~ 1min";
    }

    getSummary(): { [code: string] : string|Balance } {
        let ret : { [code: string] : string|Balance } = {};
        ret['recipient'] = this.displayReceiver;
        if (!this.displayAmount.isZero()) {
            ret['amount'] = new Balance(this.handler, this.displayAmount)
        }
        ret["max fee"] = this.getFeeTotal();
        ret["fee rate"] = this.getFeeInfo();
        ret["balance after"] = this.getBalanceAfter();
        //ret["ETA"] = this.getFeeETA()
        return ret;

    }

    async send(): Promise<string> {
        var response = await this.handler.getProvider().sendTransaction(this.signed);
        BaseEthersHanlder.nonceCache[this.data.from] ++;

        this.handler.getProvider().waitForTransaction(response.hash).then(function(receipt: TransactionReceipt){
            this.handler.engine.log.success(
                'Transaction <u>' + receipt.transactionHash + '</u> is confirmed in block ' + receipt.blockNumber,
                this.handler.code
            )
        }.bind(this)).catch(function(e){
            console.log(e);
        });

        return response.hash;
    }

    getLeftIcon(): string {
        return '<img class="coinIcon" src="coins/' + this.handler.icon + '.svg"/>';
    }

    getLeftLabel(): string {
        //return this.engine.shortAmount(displayAmount, coin, 13)
        return this.getAmountDisplay();
    }

    getRightIcon(): string {
        return (new CoinAddressIcon(this.handler, this.getRecipientDisplay())).element.outerHTML;
    }

    getRightLabel(): string {
        return Strings.shortAddr(this.getRecipientDisplay(), 13);
    }

    getDescriptionHtml(): string {
        return "";
    }
}

export abstract class BaseEthersHanlder implements OnlineCoinHandler {

    onlineCoin = true;
    abstract testCoin: boolean;
    abstract ticker: string;
    abstract name: string;
    abstract code: string;
    abstract icon: string;
    abstract description: string;
    abstract links: { [p: string]: string };
    abstract coinGeckoId: string;
    abstract coinMarketCapId: string;
    abstract coinPaprikaId: string;
    abstract explorerLinkAddr(address: string): string;
    abstract explorerLinkTx(txid: string): string;

    engine: Engine

    constructor(engine: Engine) {
        this.engine = engine
    }

    abstract networkName: string;

    getProvider(): BaseProvider {
        //return new ethers.providers.EtherscanProvider(this.networkName)
        return new ethers.providers.InfuraProvider(this.networkName, Config.infuraKey);
    }

    getFeeHandler(): OnlineCoinHandler {
        return this;
    }

    async getCachedBalance(addr: string): Promise<Balance> {
        let cacheKey = this.code + '_balance_' + addr;
        let cached = this.engine.cache.get(cacheKey, null);
        if (cached) {
            return new Balance(this, new BigNum(cached))
        }
        return await this.getBalance(addr);
    }

    async getBalance(addr: string): Promise<Balance> {
        let cacheKey = this.code + '_balance_' + addr;
        let ret = await this.getProvider().getBalance(addr);
        this.engine.cache.set(cacheKey, ret.toString());
        return new Balance(this, new BigNum(ret.toString()));
    }

    async getOwnBalance(keychain: Keychain): Promise<Balance> {
        return await this.getBalance(this.getReceiveAddr(keychain));
    }

    decimals = 18

    getDescription(): string {
        return "";
    }

    async getDefaultFee(): Promise<number> {
        let gasPrice = await this.getProvider().getGasPrice();
        return gasPrice.toNumber();
    }

    async getFeeOptions(): Promise<number[]> {
        let price = await this.getDefaultFee();
        return [
            Math.round(price * 0.7),
            Math.round(price * 0.85),
            price,
            Math.round(price * 1.15),
            Math.round(price * 1.3)
        ];
    }

    getIcon(): string {
        return "";
    }

    getIdenticonSeed(addr: string): number {
        return parseInt(addr.slice(2, 10), 16);
    }

    getLinks(): { [p: string]: string } {
        return {};
    }

    getName(): string {
        return "";
    }

    getWallet(keychain: Keychain|string): Wallet {

        return new ethers.Wallet((typeof keychain == "string") ? keychain : this.getPrivateKeyAsHex(keychain), this.getProvider());
    }

    getPrivateKeyAsHex(keychain: Keychain) : string {
        var bip32 = this.getPrivateKey(keychain);
        var ret = bip32.privateKey.toString('hex');
        while (ret.length < 64) ret = "0" + ret;
        return "0x" + ret;
    }

    getPrivateKey(keychain: Keychain): bip32.BIP32Interface {
        return keychain.derivePath("m/44'/60'/0'/0/0");
    }

    getReceiveAddr(keychain: Keychain): string {
        return this.getWallet(keychain).address;
    }

    getTicker(): string {
        return "";
    }

    protected async getTransactionRequest(wallet: Wallet, receiverAddr: string, amount: BigNum): Promise<TransactionRequest> {
        return {
            to: receiverAddr,
            value: "0x" + amount.toString(16),
            gasLimit: 21000,
            from: wallet.address
        };
    }

    static nonceCache : {[key: string] : number} = {}

    async getNonce(address: string): Promise<number> {
        if (!(address in BaseEthersHanlder.nonceCache)) {
            BaseEthersHanlder.nonceCache[address] = await this.getProvider().getTransactionCount(address);
        }
        return BaseEthersHanlder.nonceCache[address];
    }

    protected async getRealAmount(wallet: Wallet, amount: BigNum|"MAX", feeRate: number) : Promise<BigNum> {
        if (amount === "MAX") {
            let fee = (new BigNum("21000")).mul(new BigNum(feeRate))
            let total = (await this.getCachedBalance(wallet.address)).total()
            return total.sub(fee)
        } else {
            return amount
        }
    }

    async prepareTransaction(keychain: Keychain|string, receiverAddr: string, amount: BigNum|"MAX", fee?: number): Promise<NewTransaction> {

        if (!this.validateAddress(receiverAddr)) {
            receiverAddr = EthTransaction.fakeReceiver
        }
        let wallet = this.getWallet(keychain)
        if (!fee) {
            fee = await this.getDefaultFee();
        }
        let realAmount = await this.getRealAmount(wallet, amount, fee);
        let tx : TransactionRequest = await this.getTransactionRequest(wallet, receiverAddr, realAmount)
        return await this.prepareCustomTransaction(wallet, tx, realAmount, receiverAddr, fee);

    }

    async prepareCustomTransaction(wallet: Wallet, tx : TransactionRequest, displayAmount: BigNum, displayRecipient: string, fee?: number): Promise<EthTransaction> {
        if (!fee) {
            fee = await this.getDefaultFee();
        }
        tx.gasPrice = fee
        tx.nonce = "0x" + (await this.getNonce(wallet.address)).toString(16);
        if (!tx.from) {
            //this is important for nonce inc
            tx.from = wallet.address
        }
        if (('data' in tx)) {
            let estimateGasCacheKey = this.code + '_estimate_gas_' + tx.nonce + tx.from + tx.data;
            let provider = this.getProvider()
            let getter = async function (provider: BaseProvider, tx: TransactionRequest) : Promise<number> {
                return (await provider.estimateGas(tx)).toNumber()
            }
            tx.gasLimit = await this.engine.cache.getCached(estimateGasCacheKey, 60, getter.bind(this, provider, tx))
            //tx.gasLimit = await this.getProvider().estimateGas(tx);
            //tolerate 5% slip
            tx.gasLimit = Math.ceil((tx.gasLimit as number) * 1.05);
        }
        let signed = await wallet.signTransaction(tx);
        let total = (await this.getCachedBalance(wallet.address)).total()
        return new EthTransaction(this, tx, signed, total, displayAmount, displayRecipient);
    }

    validateAddress(addr: string): boolean {
        return ethers.utils.isAddress(addr);
    }

    canSendViaMessage(): boolean {
        return true;
    }

    newRandomPrivateKey() : string {
        let wallet = ethers.Wallet.createRandom();
        return wallet.privateKey;
    }

    addressFromPrivateKey(pk: string) : string {
        return (new ethers.Wallet(pk)).address;
    }

    exportPrivateKey(keychain: Keychain): string {
        return this.getPrivateKeyAsHex(keychain);
    }
}

export abstract class BaseERC20Handler extends BaseEthersHanlder {
    isERC20Handler: boolean = true
    onlineCoin = true
    abstract ethContractAddr: string
    abstract feeHandlerCode: string

    ethAbi: ethers.ContractInterface = [
        {"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},
        {"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
        {"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
        {"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
        {"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},
        {"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
        {"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},
        {"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
        {"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
        {"payable":true,"stateMutability":"payable","type":"fallback"},
        {"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},
        {"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}
    ]

    getFeeHandler(): OnlineCoinHandler {
        return this.engine.allCoinHandlers[this.feeHandlerCode] as OnlineCoinHandler;
    }

    public getContract(wallet: Wallet = null) : ethers.Contract {
        return new ethers.Contract(this.ethContractAddr, this.ethAbi, wallet ? wallet : this.getProvider());
    }

    async getBalance(addr: string): Promise<Balance> {
        try {
            let cacheKey = this.code + '_balance_' + addr;
            let contract = this.getContract();
            //let xxx = await contract.populateTransaction.balanceOf(addr)
            //xxx.from = "0x0000000000000000000000000000000000000000";
            //let yyy = await contract.provider.call(xxx);
            let ret = await contract.balanceOf(addr);
            this.engine.cache.set(cacheKey, ret.toString());
            return new Balance(this, new BigNum(ret.toString()));
        } catch (e) {
            this.engine.log.error(e.toString())
            return new Balance(
                this,
                new BigNum("0")
            );
        }
    }

    private async _getContractDecimals() {
        var contract = this.getContract();
        await contract.decimals();
    }


    protected async getRealAmount(wallet: Wallet, amount: BigNum|"MAX", fee: number) : Promise<BigNum> {
        if (amount === "MAX") {
            return (await this.getBalance(wallet.address)).total()
        } else {
            return amount
        }
    }

    protected async getTransactionRequest(wallet: Wallet, receiverAddr: string, amount: BigNum): Promise<TransactionRequest> {
        var contract = this.getContract(wallet);
        return await contract.populateTransaction.transfer(receiverAddr, "0x" + amount.toString(16));
    }

    explorerLinkAddr(address : string) {
        if (this.networkName == 'ropsten') {
            return 'https://ropsten.etherscan.io/token/' + this.ethContractAddr + '?a=' + address;
        } else if (this.networkName == 'homestead') {
            return 'https://etherscan.io/token/' + this.ethContractAddr + '?a=' + address;
        }
    }
    explorerLinkTx(tx: string) {
        if (this.networkName == 'ropsten') {
            return 'https://ropsten.etherscan.io/tx/' + tx;
        } else if (this.networkName == 'homestead') {
            return 'https://etherscan.io/tx/' + tx;
        }
    }

    canSendViaMessage(): boolean {
        return false;
    }
}

export function isBaseERC20Handler(toBeDetermined: BaseCoinHandler): toBeDetermined is BaseERC20Handler {
    return (('isERC20Handler' in toBeDetermined) && (toBeDetermined as BaseERC20Handler).isERC20Handler);
}
