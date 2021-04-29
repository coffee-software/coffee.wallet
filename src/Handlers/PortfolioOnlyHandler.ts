import {BaseCoinHandler} from "./BaseCoinHandler";
import {Strings} from "../Tools/Strings";

export class PortfolioOnlyHandler implements BaseCoinHandler {

    decimals = 10;
    onlineCoin = false;
    testCoin = false;
    ticker: string
    name: string
    code: string
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
        this.code = ticker;
        this.name = name;
        this.icon = icon;
        this.description = description;
        this.links = {
            "CoinGecko" : "https://www.coingecko.com/en/coins/" + Strings.slugify(this.name),
            "CoinMarketCap" : "https://coinmarketcap.com/currencies/" + Strings.slugify(this.name) + "/",
            "CoinPaprika" : "https://coinpaprika.com/coin/" + Strings.slugify(this.ticker) + "-" + Strings.slugify(this.name) + "/"
        }
    }
}
