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
var HandlerDoge = (function (_super) {
    __extends(HandlerDoge, _super);
    function HandlerDoge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.testCoin = false;
        _this.ticker = "DOGE";
        _this.name = "Dogecoin";
        _this.icon = "doge";
        _this.description = "Dogecoin is a decentralized, peer-to-peer digital currency that enables you to easily send money online. " +
            "Think of it as \"the internet currency.\"";
        _this.links = {
            'dogecoin.com': 'https://cogecoin.com/',
            "CoinMarketCap": "https://coinmarketcap.com/currencies/dogecoin/"
        };
        _this.webapiHost = 'api.blockcypher.com';
        _this.webapiPath = '/v1/doge/main';
        _this.network = coininfo.dogecoin.main.toBitcoinJS();
        _this.keyPath = "m/44'/3'/0'/0/0";
        return _this;
    }
    HandlerDoge.prototype.explorerLinkAddr = function (address) {
        return 'https://dogechain.info/address/' + address;
    };
    HandlerDoge.prototype.explorerLinkTx = function (txid) {
        return 'https://dogechain.info/tx/' + txid;
    };
    return HandlerDoge;
}(BaseBitcoinjsHanlder_1.BaseBitcoinjsHanlder));
exports.HandlerDoge = HandlerDoge;
//# sourceMappingURL=HandlerDoge.js.map