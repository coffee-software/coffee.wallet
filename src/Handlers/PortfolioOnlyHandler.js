"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PortfolioOnlyHandler = (function () {
    function PortfolioOnlyHandler(ticker, name, longName, icon, description) {
        this.ticker = ticker;
        this.name = name;
        this.icon = icon;
        this.description = description;
    }
    PortfolioOnlyHandler.prototype.getDescription = function () {
        return this.description;
    };
    PortfolioOnlyHandler.prototype.getIcon = function () {
        return this.icon;
    };
    PortfolioOnlyHandler.prototype.getLinks = function () {
        return {
            "CoinGecko": "https://www.coingecko.com/en/coins/" + this.name,
            "CoinMarketCap": "https://coinmarketcap.com/currencies/" + this.name + "/"
        };
    };
    PortfolioOnlyHandler.prototype.getName = function () {
        return this.name;
    };
    PortfolioOnlyHandler.prototype.getTicker = function () {
        return this.ticker;
    };
    return PortfolioOnlyHandler;
}());
exports.PortfolioOnlyHandler = PortfolioOnlyHandler;
//# sourceMappingURL=PortfolioOnlyHandler.js.map