import {NewTransaction, OnlineCoinHandler} from "./BaseCoinHandler";
import {BigNum} from "../BigNum";
import {Keychain} from "../Keychain";
import {ECPair} from "bitcoinjs-lib";
import * as bitcoin from "bitcoinjs-lib";
var coininfo = require('coininfo');
var config = require('../../config');

class BtcTransaction implements NewTransaction {
    handler: BaseBitcoinjsHanlder

    constructor(handler: BaseBitcoinjsHanlder) {
        this.handler = handler
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
        return "TODO";
    }
}

export abstract class BaseBitcoinjsHanlder implements OnlineCoinHandler {

    async getBalance(addr: string): Promise<BigNum> {
        return new BigNum("0");
    }

    getDecimals(keychain: Keychain): number {
        return 0;
    }

    getDescription(): string {
        return "";
    }

    async getFeeOptions(): Promise<[number]> {
        return [
            22
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

    getReceiveAddr(keychain: Keychain): string {
        var network = coininfo.bitcoin.main.toBitcoinJS()
        var wif = keychain.derivePath("m/44'/0'/0'/0/0", network);
        var key = ECPair.fromWIF(wif, network);
        /* console.log(bitcoin.payments.p2wpkh({
                        pubkey: key.publicKey,
                        network: network.network
                }).address); */
        return bitcoin.payments.p2pkh({
            pubkey: key.publicKey,
            network: network
        }).address;
    }

    getTicker(): string {
        return "";
    }

    async prepareTransaction(keychain: Keychain, receiverAddr: string, amount: BigNum, fee: number): Promise<NewTransaction> {
        return null;
    }

    validateAddress(addr: string): boolean {
        try {
            bitcoin.address.toOutputScript(addr, coininfo.bitcoin.main.toBitcoinJS());
            return true;
        } catch (e) {
            return false;
        }
    }

}
