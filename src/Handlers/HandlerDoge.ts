import {BaseBitcoinjsHanlder} from "./BaseBitcoinjsHanlder";
var coininfo = require('coininfo');

export class HandlerDoge extends BaseBitcoinjsHanlder {

    testCoin = false
    ticker = "DOGE";
    name = "Dogecoin";
    icon = "doge";
    description = "Dogecoin is a decentralized, peer-to-peer digital currency that enables you to easily send money online. " +
        "Think of it as \"the internet currency.\"";
    links = {
        'dogecoin.com' : 'https://cogecoin.com/',
        "CoinMarketCap" : "https://coinmarketcap.com/currencies/dogecoin/"
    }

    webapiHost = 'api.blockcypher.com'
    webapiPath = '/v1/doge/main'
    network = coininfo.dogecoin.main.toBitcoinJS()
    keyPath = "m/44'/3'/0'/0/0"

    explorerLinkAddr(address : string) {
        return 'https://dogechain.info/address/' + address;
    }

    explorerLinkTx(txid : string) {
        return 'https://dogechain.info/tx/' + txid;
    }
}
