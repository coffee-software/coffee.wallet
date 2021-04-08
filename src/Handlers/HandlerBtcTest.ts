import {NewTransaction} from "./BaseCoinHandler";
import {Keychain} from "../Keychain";
import {BigNum} from "../BigNum";
import {BaseBitcoinjsHanlder} from "./BaseBitcoinjsHanlder";

var coininfo = require('coininfo');

export class HandlerBtcTest extends BaseBitcoinjsHanlder {

    webapiHost = 'api.blockcypher.com'
    webapiPath = '/v1/btc/test3'
    network = coininfo.bitcoin.test.toBitcoinJS()
    keyPath = "m/44'/1'/0'/0/0"

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
}
