import {OnlineCoinHandler, NewTransaction} from "./BaseCoinHandler";
import {Keychain} from "../Keychain";
import {ECPair} from "bitcoinjs-lib";
import * as bitcoin from "bitcoinjs-lib";
import {BigNum} from "../BigNum";

var coininfo = require('coininfo');

export class HandlerBtc implements OnlineCoinHandler {

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

    prepareTransaction(keychain: Keychain, receiverAddr: string, amount: BigNum, fee: number): Promise<NewTransaction> {
        return undefined;
    }

    async getFeeOptions(): Promise<[number]> {
        return [0];
    }

    validateAddr(addr: string): boolean {
        return false;
    }

    async getBalance(addr: string): Promise<BigNum> {
        return new BigNum("0");
    }

    getIdenticonSeed(addr: string): number {
        return 0;
    }
}
