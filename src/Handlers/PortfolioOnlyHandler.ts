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
        code: string,
        ticker: string,
        name: string,
        icon: string,
        coinPaprikaId: string = "",
        coinGeckoId: string = "",
        coinMarketCapId: string = ""
    ) {
        this.ticker = ticker;
        this.code = ticker;
        this.name = name;
        this.icon = icon;
        this.description = this.name + ' [' + this.ticker + ']';

        this.links = {}
        if (coinPaprikaId.length) {
            this.links["CoinPaprika"] = "https://coinpaprika.com/coin/" + coinPaprikaId + "/"
        }
        if (coinGeckoId.length) {
            this.links["CoinGecko"] = "https://www.coingecko.com/en/coins/" + coinGeckoId
        }
        if (coinMarketCapId.length) {
            this.links["CoinMarketCap"] = "https://coinmarketcap.com/currencies/" + Strings.slugify(this.name) + "/"
        }
    }
}
