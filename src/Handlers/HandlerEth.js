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
var BaseEthersHanlder_1 = require("./BaseEthersHanlder");
var HandlerEth = (function (_super) {
    __extends(HandlerEth, _super);
    function HandlerEth() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.testCoin = false;
        _this.ticker = "ETH";
        _this.name = "Ether";
        _this.icon = "eth";
        _this.description = "via Wikipedia: Ethereum is an open-source, public, blockchain-based distributed computing platform and operating system featuring smart contract (scripting) functionality. " +
            "Along with Bitcoin, Ethereum is considered to be one of the pioneer platforms in distributed ledger and blockchain technology.";
        _this.links = {
            "ethereum.org": "https://ethereum.org/",
            "Wikpedia": "https://en.wikipedia.org/wiki/Ethereum"
        };
        _this.networkName = 'homestead';
        return _this;
    }
    HandlerEth.prototype.explorerLinkAddr = function (address) {
        return 'https://etherscan.io/address/' + address;
    };
    HandlerEth.prototype.explorerLinkTx = function (txid) {
        return 'https://etherscan.io/tx/' + txid;
    };
    return HandlerEth;
}(BaseEthersHanlder_1.BaseEthersHanlder));
exports.HandlerEth = HandlerEth;
//# sourceMappingURL=HandlerEth.js.map