import {BaseBitcoinjsHanlder} from "./BaseBitcoinjsHanlder";
var coininfo = require('coininfo');

export class HandlerDash extends BaseBitcoinjsHanlder {

    testCoin = false
    ticker = "DASH";
    code = "DASH";
    name = "Dash";
    icon = "dash";
    description = "Dash is an open-source blockchain and cryptocurrency focused on offering a fast, cheap global payments network that is decentralized in nature. " +
        "According to the project's white paper, Dash seeks to improve upon Bitcoin (BTC) by providing stronger privacy and faster transactions.";
    links = {
        'dash.org' : 'https://www.dash.org/',
        "CoinMarketCap" : "https://coinmarketcap.com/currencies/dash/"
    }

    webapiHost = 'api.blockcypher.com'
    webapiPath = '/v1/dash/main'
    network = coininfo.dash.main.toBitcoinJS()
    //https://github.com/satoshilabs/slips/blob/master/slip-0044.md
    keyPath = "m/44'/5'/0'/0/0"
    segwitSupport = false

    explorerLinkAddr(address : string) {
        return 'https://explorer.dash.org/insight/address/' + address;
    }

    explorerLinkTx(txid : string) {
        return 'https://explorer.dash.org/insight/tx/' + txid;
    }
}
