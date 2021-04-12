import {BaseCoinHandler} from "./BaseCoinHandler";

export class PortfolioOnlyHandler implements BaseCoinHandler {

    onlineCoin = false;
    testCoin = false;
    ticker: string
    name: string
    icon: string
    description: string
    links: { [key: string]: string; };

    constructor(
        ticker: string,
        name: string,
        icon: string,
        description: string
    ) {
        this.ticker = ticker;
        this.name = name;
        this.icon = icon;
        this.description = description;
        //TODO slug
        this.links = {
            "CoinGecko" : "https://www.coingecko.com/en/coins/" + this.name,
            "CoinMarketCap" : "https://coinmarketcap.com/currencies/" + this.name + "/",
            "CoinPaprika" : "https://coinpaprika.com/coin/" + this.ticker + "-" + this.name + "/"
        }
    }
}
