"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PortfolioOnlyHandler = (function () {
    function PortfolioOnlyHandler(ticker, name, icon, description) {
        this.decimals = 10;
        this.onlineCoin = false;
        this.testCoin = false;
        this.ticker = ticker;
        this.name = name;
        this.icon = icon;
        this.description = description;
        this.links = {
            "CoinGecko": "https://www.coingecko.com/en/coins/" + this.name,
            "CoinMarketCap": "https://coinmarketcap.com/currencies/" + this.name + "/",
            "CoinPaprika": "https://coinpaprika.com/coin/" + this.ticker + "-" + this.name + "/"
        };
    }
    return PortfolioOnlyHandler;
}());
exports.PortfolioOnlyHandler = PortfolioOnlyHandler;
//# sourceMappingURL=PortfolioOnlyHandler.js.map