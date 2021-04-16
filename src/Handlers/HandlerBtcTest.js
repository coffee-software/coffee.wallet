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
var HandlerBtcTest = (function (_super) {
    __extends(HandlerBtcTest, _super);
    function HandlerBtcTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.testCoin = true;
        _this.ticker = "BTC.TST";
        _this.name = "Test Bitcoin";
        _this.icon = "btc.test";
        _this.description = "via Bitcoin Wiki: The testnet is an alternative Bitcoin block chain, to be used for testing. " +
            "Testnet coins are separate and distinct from actual bitcoins, and are never supposed to have any value. " +
            "This allows application developers or bitcoin testers to experiment, without having to use real bitcoins or worrying about breaking the main bitcoin chain.";
        _this.links = {
            "Bitcoin Wiki": "https://en.bitcoin.it/wiki/Testnet",
            "Request TestNet coins": "https://testnet.manu.backend.hamburg/faucet"
        };
        _this.webapiHost = 'api.blockcypher.com';
        _this.webapiPath = '/v1/btc/test3';
        _this.network = coininfo.bitcoin.test.toBitcoinJS();
        _this.keyPath = "m/44'/1'/0'/0/0";
        _this.segwitSupport = true;
        return _this;
    }
    HandlerBtcTest.prototype.explorerLinkAddr = function (address) {
        return 'https://www.blockchain.com/btc-testnet/address/' + address;
    };
    HandlerBtcTest.prototype.explorerLinkTx = function (txid) {
        return 'https://www.blockchain.com/btc-testnet/tx/' + txid;
    };
    return HandlerBtcTest;
}(BaseBitcoinjsHanlder_1.BaseBitcoinjsHanlder));
exports.HandlerBtcTest = HandlerBtcTest;
//# sourceMappingURL=HandlerBtcTest.js.map