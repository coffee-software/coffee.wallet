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
var HandlerLtc = (function (_super) {
    __extends(HandlerLtc, _super);
    function HandlerLtc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.testCoin = false;
        _this.ticker = "LTC";
        _this.name = "Litecoin";
        _this.icon = "ltc";
        _this.description = "via litecoin.org: Litecoin is a peer-to-peer Internet currency that enables instant, near-zero cost payments to anyone in the world. " +
            "Litecoin is an open source, global payment network that is fully decentralized without any central authorities. " +
            "Mathematics secures the network and empowers individuals to control their own finances. " +
            "Litecoin features faster transaction confirmation times and improved storage efficiency than the leading math-based currency. " +
            "With substantial industry support, trade volume and liquidity, Litecoin is a proven medium of commerce complementary to Bitcoin.";
        _this.links = {
            'litecoin.org': 'https://litecoin.org/'
        };
        _this.webapiHost = 'api.blockcypher.com';
        _this.webapiPath = '/v1/ltc/main';
        _this.network = coininfo.litecoin.main.toBitcoinJS();
        _this.keyPath = "m/44'/2'/0'/0/0";
        return _this;
    }
    HandlerLtc.prototype.explorerLinkAddr = function (address) {
        return 'https://bchain.info/LTC/addr/' + address;
    };
    HandlerLtc.prototype.explorerLinkTx = function (txid) {
        return 'https://bchain.info/LTC/tx/' + txid;
    };
    return HandlerLtc;
}(BaseBitcoinjsHanlder_1.BaseBitcoinjsHanlder));
exports.HandlerLtc = HandlerLtc;
//# sourceMappingURL=HandlerLtc.js.map