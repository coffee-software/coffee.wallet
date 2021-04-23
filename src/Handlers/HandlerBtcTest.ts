import {BaseBitcoinjsHanlder} from "./BaseBitcoinjsHanlder";

var coininfo = require('coininfo');

export class HandlerBtcTest extends BaseBitcoinjsHanlder {

    testCoin = true
    ticker = "BTC.TST";
    code = "BTC.TST";
    name = "Test Bitcoin";
    icon = "btc.test";
    description = "via Bitcoin Wiki: The testnet is an alternative Bitcoin block chain, to be used for testing. " +
        "Testnet coins are separate and distinct from actual bitcoins, and are never supposed to have any value. " +
        "This allows application developers or bitcoin testers to experiment, without having to use real bitcoins or worrying about breaking the main bitcoin chain.";
    links = {
        "Bitcoin Wiki" : "https://en.bitcoin.it/wiki/Testnet",
        "Request TestNet coins" : "https://testnet.manu.backend.hamburg/faucet"
    };

    webapiHost = 'api.blockcypher.com'
    webapiPath = '/v1/btc/test3'
    network = coininfo.bitcoin.test.toBitcoinJS()
    keyPath = "m/44'/1'/0'/0/0"
    segwitSupport = true

    explorerLinkAddr(address: string): string {
        return 'https://www.blockchain.com/btc-testnet/address/' + address;
    }
    explorerLinkTx(txid: string): string {
        return 'https://www.blockchain.com/btc-testnet/tx/' + txid;
    }

}
