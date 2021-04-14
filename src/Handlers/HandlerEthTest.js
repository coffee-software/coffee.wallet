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
var HandlerEthTest = (function (_super) {
    __extends(HandlerEthTest, _super);
    function HandlerEthTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.testCoin = true;
        _this.ticker = "ETH.TST";
        _this.name = "Test Ethereum";
        _this.icon = "eth.test";
        _this.description = "Robsten is an ethereum testing network.";
        _this.links = {
            "Request Test Eth": "http://faucet.ropsten.be:3001/"
        };
        _this.networkName = 'ropsten';
        return _this;
    }
    HandlerEthTest.prototype.explorerLinkAddr = function (address) {
        return 'https://ropsten.etherscan.io/address/' + address;
    };
    HandlerEthTest.prototype.explorerLinkTx = function (txid) {
        return 'https://ropsten.etherscan.io/tx/' + txid;
    };
    return HandlerEthTest;
}(BaseEthersHanlder_1.BaseEthersHanlder));
exports.HandlerEthTest = HandlerEthTest;
var ERC20TestHandler = (function (_super) {
    __extends(ERC20TestHandler, _super);
    function ERC20TestHandler(log, cache, ticker, name, icon, ethContractAddr, decimals) {
        var _this = _super.call(this, log, cache) || this;
        _this.testCoin = true;
        _this.onlineCoin = false;
        _this.networkName = 'ropsten';
        _this.ticker = ticker;
        _this.name = name;
        _this.icon = icon;
        _this.description = _this.name + " is a ERC20 test token with no real value";
        _this.ethContractAddr = ethContractAddr;
        _this.decimals = decimals;
        _this.links = {
            "etherscan.io": "https://etherscan.io/token/" + _this.ethContractAddr
        };
        return _this;
    }
    return ERC20TestHandler;
}(BaseEthersHanlder_1.BaseERC20Handler));
exports.ERC20TestHandler = ERC20TestHandler;
//# sourceMappingURL=HandlerEthTest.js.map