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
var BasePriceProvider_1 = require("./BasePriceProvider");
var CoinMarketCapProvider = (function (_super) {
    __extends(CoinMarketCapProvider, _super);
    function CoinMarketCapProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "coinmarketcap.com";
        _this.availableUnits = [
            "AUD", "BTC", "BRL", "CAD", "CHF", "CLP",
            "CNY", "CZK", "DKK", "EUR", "ETH", "GBP",
            "HKD", "HUF", "IDR", "ILS", "INR", "JPY",
            "KRW", "MXN", "MYR", "NOK", "NZD", "PHP",
            "PKR", "PLN", "RUB", "SEK", "SGD", "THB",
            "TRY", "TWD", "USD", "ZAR"
        ];
        _this.defaultUnit = "USD";
        return _this;
    }
    CoinMarketCapProvider.prototype.fetchPrices = function (handlers) {
        throw new Error("CoinMarketCap not supported.");
    };
    return CoinMarketCapProvider;
}(BasePriceProvider_1.BasePriceProvider));
exports.CoinMarketCapProvider = CoinMarketCapProvider;
//# sourceMappingURL=CoinMarketCapProvider.js.map