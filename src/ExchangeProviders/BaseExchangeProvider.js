"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseExchangeProvider = (function () {
    function BaseExchangeProvider() {
        this.testNet = false;
        this.shortDescription = "<strong>warning:</strong> this is handled by external provider. You will send your coins to a third party trusting you will get exchanged coins back after few minutes. Please refer to provider website for more details:";
    }
    BaseExchangeProvider.prototype.getCurrencies = function (callback) {
        callback([]);
    };
    BaseExchangeProvider.prototype.getMinAmount = function (from, to, callback) {
        callback(0);
    };
    BaseExchangeProvider.prototype.estimateExchangeAmount = function (from, to, amount, callback) {
        callback(0);
    };
    BaseExchangeProvider.prototype.createTransaction = function (from, to, amount, returnTo, callback) {
        callback({});
    };
    BaseExchangeProvider.prototype.getFeeDisplay = function (from, fee) {
        return "TODO";
    };
    BaseExchangeProvider.prototype.getFeeEstimate = function (from, callback) {
        callback(0);
    };
    return BaseExchangeProvider;
}());
exports.BaseExchangeProvider = BaseExchangeProvider;
//# sourceMappingURL=BaseExchangeProvider.js.map