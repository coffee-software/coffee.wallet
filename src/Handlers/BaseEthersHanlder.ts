import { ethers } from "ethers"
import {NewTransaction, OnlineCoinHandler} from "./BaseCoinHandler";
import {BigNum} from "../BigNum";
import {Keychain} from "../Keychain";
import {JsonRpcProvider} from "@ethersproject/providers/src.ts/json-rpc-provider";
import {TransactionRequest} from "@ethersproject/abstract-provider/src.ts";
import {Wallet} from "@ethersproject/wallet/src.ts";
import {ECPair} from "bitcoinjs-lib";
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

    networkName = 'ropsten' //'homestead'

    getProvider(): JsonRpcProvider {
        //ropsten
        return new ethers.providers.InfuraProvider(this.networkName, config.infuraKey);
    }

    async getBalance(addr: string): Promise<BigNum> {
        var ret = await this.getProvider().getBalance(addr);
        return new BigNum(ret.toString());
    }

    getDecimals(keychain: Keychain): number {
        return 0;
    }

    getDescription(): string {
        return "";
    }

    async getFeeOptions(): Promise<[number]> {
        var gasPrice = await this.getProvider().getGasPrice();
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
        var wif = keychain.derivePath("m/44'/60'/0'/0/0");
        var keyPair = ECPair.fromWIF(wif);
        //var keyPair = engine.bitcoin.derivePathFromSeedHash(this.network, app.data.wallets.bip39.seedHex, );
        //var ret = keyPair.d.toString(16);
        var ret = keyPair.privateKey.toString('hex');
        while (ret.length < 64) ret = "0" + ret;
        var priv = "0x" + ret;
        return new ethers.Wallet(priv);
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
