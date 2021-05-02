import {BaseBitcoinjsHanlder} from "./BaseBitcoinjsHanlder";
var coininfo = require('coininfo');

export class HandlerLtc extends BaseBitcoinjsHanlder {

    testCoin = false
    ticker = "LTC";
    code = "LTC";
    name = "Litecoin";
    icon = "ltc";
    description = "via litecoin.org: Litecoin is a peer-to-peer Internet currency that enables instant, near-zero cost payments to anyone in the world. " +
        "Litecoin is an open source, global payment network that is fully decentralized without any central authorities. " +
        "Mathematics secures the network and empowers individuals to control their own finances. " +
        "Litecoin features faster transaction confirmation times and improved storage efficiency than the leading math-based currency. " +
        "With substantial industry support, trade volume and liquidity, Litecoin is a proven medium of commerce complementary to Bitcoin.";
    links = {
        'litecoin.org' : 'https://litecoin.org/'
    };

    webapiHost = 'api.blockcypher.com'
    webapiPath = '/v1/ltc/main'
    network = coininfo.litecoin.main.toBitcoinJS()
    keyPath = "m/44'/2'/0'/0/0"
    segwitSupport = false

    explorerLinkAddr(address : string) {
        return 'https://blockchair.com/litecoin/address/' + address;
    }

    explorerLinkTx(txid : string) {
        return 'https://blockchair.com/litecoin/transaction/' + txid;
    }
}
