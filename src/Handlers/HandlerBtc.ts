import {NewTransaction} from "./BaseCoinHandler";
import {Keychain} from "../Keychain";
import {BigNum} from "../BigNum";
import {BaseBitcoinjsHanlder} from "./BaseBitcoinjsHanlder";

var coininfo = require('coininfo');

export class HandlerBtc extends BaseBitcoinjsHanlder {

    getTicker(): string {
        return "BTC";
    }

    getName(): string {
        return "Bitcoin";
    }

    getIcon(): string {
        return "btc";
    }

    getDescription(): string {
        return "via Wikpedia: Bitcoin is a cryptocurrency and worldwide payment system. " +
            "It is the first decentralized digital currency, as the system works without a central bank or single administrator. " +
            "The network is peer-to-peer and transactions take place between users directly, without an intermediary. " +
            "These transactions are verified by network nodes through the use of cryptography and recorded in a public distributed ledger called a blockchain. " +
            "Bitcoin was invented by an unknown person or group of people under the name Satoshi Nakamoto and released as open-source software in 2009. ";
    }

    getLinks(): { [p: string]: string } {
        return {
            'bitcoin.org' : 'https://bitcoin.org/'
        };
    }

    getDecimals(keychain: Keychain): number {
        return 8;
    }

    prepareTransaction(keychain: Keychain, receiverAddr: string, amount: BigNum, fee: number): Promise<NewTransaction> {
        return undefined;
    }

    async getFeeOptions(): Promise<[number]> {
        return [0];
    }

    async getBalance(addr: string): Promise<BigNum> {
        return new BigNum("0");
    }

    getIdenticonSeed(addr: string): number {
        return 0;
    }
}
