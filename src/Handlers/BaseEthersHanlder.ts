import { ethers } from "ethers"
import {Balance, NewTransaction, OnlineCoinHandler} from "./BaseCoinHandler";
import {BigNum} from "../BigNum";
import {Keychain} from "../Keychain";
import {JsonRpcProvider} from "@ethersproject/providers/src.ts/json-rpc-provider";
import {TransactionRequest} from "@ethersproject/abstract-provider/src.ts";
import {Wallet} from "@ethersproject/wallet/src.ts";
import * as bip32 from "bip32";
import {CacheWrapper, LogInterface} from "../Engine";
var config = require('../../config');

class EthTransaction implements NewTransaction {
    data : TransactionRequest
    handler: BaseEthersHanlder
    signed: string

    constructor(handler: BaseEthersHanlder, data : TransactionRequest, signed: string) {
        this.data = data
        this.handler = handler
        this.signed = signed
    }

    getBalanceAfter(): string {
        return "";
    }

    getFeeDisplay(): string {
        return "TODO";
    }

    getFeeETA(): string {
        return "TODO";
    }

    getSummaryTable(): string {
        return "TODO";
    }

    async send(): Promise<string> {
        var response = await this.handler.getProvider().sendTransaction(this.signed);
        return response.hash;
    }
}

export abstract class BaseEthersHanlder implements OnlineCoinHandler {

    onlineCoin = true;
    abstract testCoin: boolean;
    abstract ticker: string;
    abstract name: string;
    abstract icon: string;
    abstract description: string;
    abstract links: { [p: string]: string };
    abstract explorerLinkAddr(address: string): string;
    abstract explorerLinkTx(txid: string): string;

    log: LogInterface
    cache: CacheWrapper

    constructor(log: LogInterface, cache: CacheWrapper) {
        this.log = log
        this.cache = cache
    }

    abstract networkName: string;

    getProvider(): JsonRpcProvider {
        return new ethers.providers.InfuraProvider(this.networkName, config.infuraKey);
    }

    async getBalance(addr: string): Promise<Balance> {
        var ret = await this.getProvider().getBalance(addr);
        return new Balance(this, new BigNum(ret.toString()), new BigNum("0"));
    }

    async getOwnBalance(keychain: Keychain): Promise<Balance> {
        return await this.getBalance(this.getReceiveAddr(keychain));
    }

    decimals = 18

    getDescription(): string {
        return "";
    }

    async getFeeOptions(): Promise<number[]> {
        let gasPrice = await this.getProvider().getGasPrice();
        return [
            gasPrice.toNumber()
        ];
    }

    getIcon(): string {
        return "";
    }

    getIdenticonSeed(addr: string): number {
        return 0;
    }

    getLinks(): { [p: string]: string } {
        return {};
    }

    getName(): string {
        return "";
    }

    /* network = {
        bech32: 'eth',
        messagePrefix: '\x19Ethereum Signed Message:\n',
        bip32: {
            public: 0xffffffff,
            private: 0xffffffff
        },
        pubKeyHash: 0xff,
        scriptHash: 0xff,
        wif: 0xff
    } */

    getWallet(keychain: Keychain): Wallet {
        return new ethers.Wallet(this.getPrivateKeyAsHex(keychain));
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

    async prepareTransaction(keychain: Keychain, receiverAddr: string, amount: BigNum, fee: number): Promise<NewTransaction> {
        var from = this.getReceiveAddr(keychain);
        var tx : TransactionRequest = {
            to: receiverAddr,
            value: "0x" + amount.toString(16),
            gasPrice: fee,
            gasLimit: 21000,
            nonce: "0"
        };
        tx.nonce = "0x" + (await this.getProvider().getTransactionCount(from)).toString(16);

        var signed = await this.getWallet(keychain).signTransaction(tx);

        return new EthTransaction(this, tx, signed);
    }

    validateAddress(addr: string): boolean {
        return ethers.utils.isAddress(addr);
    }

}
