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
    coinGeckoId: string;
    coinMarketCapId: string;
    coinPaprikaId: string;

    constructor(
        code: string,
        ticker: string,
        name: string,
        icon: string,
        website: string = "",
        coinPaprikaId: string = "",
        coinGeckoId: string = "",
        coinMarketCapId: string = ""
    ) {
        this.ticker = ticker;
        this.code = ticker;
        this.name = name;
        this.icon = icon;
        this.description = this.name + ' [' + this.ticker + ']';
        this.coinPaprikaId = coinPaprikaId;
        this.coinGeckoId = coinGeckoId;
        this.coinMarketCapId = coinMarketCapId;
        this.links = {}
        if (website.length) {
            this.links[(new URL(website)).host] = website
        }
    }

}
