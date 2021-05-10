import {BaseBitcoinjsHanlder} from "./BaseBitcoinjsHanlder";

var coininfo = require('coininfo');

export class HandlerBchTest extends BaseBitcoinjsHanlder {

    testCoin = true
    ticker = "BCH.TST";
    code = "BCH.TST";
    name = "Bitcoin Cash TestNet";
    icon = "bch.test";
    description = "via Bitcoin Wiki: The testnet is an alternative Bitcoin block chain, to be used for testing. " +
        "Testnet coins are separate and distinct from actual bitcoins, and are never supposed to have any value. " +
        "This allows application developers or bitcoin testers to experiment, without having to use real bitcoins or worrying about breaking the main bitcoin chain.";
    links = {
        "Bitcoin Wiki" : "https://en.bitcoin.it/wiki/Testnet",
        "Request TestNet coins" : "https://testnet.manu.backend.hamburg/faucet"
    };

    webapiHost = ''
    webapiPath = ''
    network = coininfo.bitcoincash.test.toBitcoinJS()
    keyPath = "m/44'/1'/0'/0/0"
    segwitSupport = false

    coinGeckoId = '';
    coinMarketCapId = '';
    coinPaprikaId = '';

    explorerLinkAddr(address: string): string {
        return 'https://www.blockchain.com/bch-testnet/address/' + address;
    }
    explorerLinkTx(txid: string): string {
        return 'https://www.blockchain.com/bch-testnet/tx/' + txid;
    }

}
