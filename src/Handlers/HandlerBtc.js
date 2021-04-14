"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseBitcoinjsHanlder_1 = require("./BaseBitcoinjsHanlder");
var coininfo = require('coininfo');
var HandlerBtc = (function (_super) {
    __extends(HandlerBtc, _super);
    function HandlerBtc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.testCoin = false;
        _this.ticker = "BTC";
        _this.name = "Bitcoin";
        _this.icon = "btc";
        _this.description = "via Wikpedia: Bitcoin is a cryptocurrency and worldwide payment system. " +
            "It is the first decentralized digital currency, as the system works without a central bank or single administrator. " +
            "The network is peer-to-peer and transactions take place between users directly, without an intermediary. " +
            "These transactions are verified by network nodes through the use of cryptography and recorded in a public distributed ledger called a blockchain. " +
            "Bitcoin was invented by an unknown person or group of people under the name Satoshi Nakamoto and released as open-source software in 2009. ";
        _this.links = {
            'bitcoin.org': 'https://bitcoin.org/'
        };
        _this.webapiHost = 'api.blockcypher.com';
        _this.webapiPath = '/v1/btc/main';
        _this.network = coininfo.bitcoin.main.toBitcoinJS();
        _this.keyPath = "m/44'/0'/0'/0/0";
        _this.segwitSupport = true;
        return _this;
    }
    HandlerBtc.prototype.explorerLinkAddr = function (address) {
        return 'https://www.blockchain.com/btc/address/' + address;
    };
    HandlerBtc.prototype.explorerLinkTx = function (txid) {
        return 'https://www.blockchain.com/btc/tx/' + txid;
    };
    return HandlerBtc;
}(BaseBitcoinjsHanlder_1.BaseBitcoinjsHanlder));
exports.HandlerBtc = HandlerBtc;
//# sourceMappingURL=HandlerBtc.js.map