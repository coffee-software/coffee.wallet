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
function isPortfolioLegacyItemData(toBeDetermined) {
    return ('comment' in toBeDetermined);
}
exports.isPortfolioLegacyItemData = isPortfolioLegacyItemData;
function isPortfolioItemData(toBeDetermined) {
    return ('label' in toBeDetermined);
}
exports.isPortfolioItemData = isPortfolioItemData;
var PortfolioItem = (function () {
    function PortfolioItem(label) {
        this.label = label;
    }
    return PortfolioItem;
}());
exports.PortfolioItem = PortfolioItem;
var PortfolioBalance = (function (_super) {
    __extends(PortfolioBalance, _super);
    function PortfolioBalance(label, balance) {
        var _this = _super.call(this, label) || this;
        _this.balance = balance;
        return _this;
    }
    PortfolioBalance.prototype.getData = function () {
        return { label: this.label, balance: this.balance };
    };
    return PortfolioBalance;
}(PortfolioItem));
exports.PortfolioBalance = PortfolioBalance;
var PortfolioAddress = (function (_super) {
    __extends(PortfolioAddress, _super);
    function PortfolioAddress(label, address) {
        var _this = _super.call(this, label) || this;
        _this.address = address;
        return _this;
    }
    PortfolioAddress.prototype.getData = function () {
        return { label: this.label, address: this.address };
    };
    return PortfolioAddress;
}(PortfolioItem));
exports.PortfolioAddress = PortfolioAddress;
//# sourceMappingURL=PortfolioItem.js.map