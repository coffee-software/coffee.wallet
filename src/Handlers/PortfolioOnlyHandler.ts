import {BaseCoinHandler} from "./BaseCoinHandler";

export class PortfolioOnlyHandler implements BaseCoinHandler {

    ticker: string
    name: string
    icon: string
    description: string

    constructor(
        ticker: string,
        name: string,
        longName: string,
        icon: string,
        description: string
    ) {
        this.ticker = ticker;
        this.name = name;
        this.icon = icon;
        this.description = description;
    }

    getDescription(): string {
        return this.description;
    }

    getIcon(): string {
        return this.icon;
    }

    getLinks(): { [p: string]: string } {
        //var slug = //TODO
        return {
            "CoinGecko" : "https://www.coingecko.com/en/coins/" + this.name,
            "CoinMarketCap" : "https://coinmarketcap.com/currencies/" + this.name + "/"
        }
    }

    getName(): string {
        return this.name;
    }

    getTicker(): string {
        return this.ticker;
    }
}
