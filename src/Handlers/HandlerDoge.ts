import {BaseBitcoinjsHanlder} from "./BaseBitcoinjsHanlder";
import {ECPair, Psbt} from "bitcoinjs-lib";
import * as bitcoin from "bitcoinjs-lib";
var coininfo = require('coininfo');

export class HandlerDoge extends BaseBitcoinjsHanlder {

    testCoin = false
    ticker = "DOGE";
    code = "DOGE";
    name = "Dogecoin";
    icon = "doge";
    description = "Dogecoin is a decentralized, peer-to-peer digital currency that enables you to easily send money online. " +
        "Think of it as \"the internet currency.\"";
    links = {
        'dogecoin.com' : 'https://cogecoin.com/'
    }
    coinGeckoId = 'dogecoin';
    coinMarketCapId = 'dogecoin';
    coinPaprikaId = 'doge-dogecoin';

    webapiHost = 'api.blockcypher.com'
    webapiPath = '/v1/doge/main'
    network = coininfo.dogecoin.main.toBitcoinJS()
    keyPath = "m/44'/3'/0'/0/0"
    segwitSupport = false

    explorerLinkAddr(address : string) {
        return 'https://dogechain.info/address/' + address;
    }

    explorerLinkTx(txid : string) {
        return 'https://dogechain.info/tx/' + txid;
    }

    afterTxCreated(tx: bitcoin.Psbt): void {
        super.afterTxCreated(tx);
        tx.setMaximumFeeRate(4000000);
    }

    calculateFeeForInputs(tx : bitcoin.Psbt, signer: ECPair.ECPairInterface, outs: string[], feeRate: number): number {
        let ret = super.calculateFeeForInputs(tx, signer, outs, feeRate);
        //set minimum fee to 1 DOGE
        if (ret < 100000000) ret = 100000000;
        return ret;
    }

}
