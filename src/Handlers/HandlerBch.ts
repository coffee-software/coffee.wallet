import {BaseBitcoinjsHanlder} from "./BaseBitcoinjsHanlder";
var coininfo = require('coininfo');

export class HandlerBch extends BaseBitcoinjsHanlder {

    testCoin = false
    ticker = "BCH";
    code = "BCH";
    name = "Bitcoin Cash";
    icon = "bch";
    description = "via bitcoin.com: Bitcoin Cash (BCH) is a peer-to-peer electronic cash system. " +
        "It is a consensus network that enables a new type of payment method and a completely digital form of money. " +
        "It is a decentralized peer-to-peer payment network that is powered by its users with no central authority or middlemen.";
    links = {
        'bitcoin.com' : 'https://bitcoin.com/'
    };

    webapiHost = ''
    webapiPath = ''
    network = coininfo.bitcoincash.main.toBitcoinJS()
    keyPath = "m/44'/145'/0'/0/0"
    segwitSupport = false

    coinGeckoId = 'bitcoin-cash';
    coinMarketCapId = 'bitcoin-cash';
    coinPaprikaId = 'bch-bitcoin-cash';

    explorerLinkAddr(address : string) {
        return 'https://www.blockchain.com/bch/address/' + address;
    }

    explorerLinkTx(txid : string) {
        return 'https://www.blockchain.com/bch/tx/' + txid;
    }
}
