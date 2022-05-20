import {BaseCoinHandler} from "./BaseCoinHandler";

export class FiatHandler implements BaseCoinHandler {

    decimals = 10;
    onlineCoin = false;
    testCoin = false;
    ticker: string
    name: string
    code: string
    icon: string
    description: string
    links: { [key: string]: string; };
    coinGeckoId: string = '';
    coinMarketCapId: string = '';
    coinPaprikaId: string = '';

    constructor(
        ticker: string,
        name: string,
        icon: string = "fiat"
    ) {
        this.ticker = ticker;
        this.code = ticker;
        this.name = name;
        this.icon = icon;
        this.description = this.name + ' [' + this.ticker + ']' + ' is a fiat currency. You can track its value and add balances to your portfolio.';
        this.links = {}
    }

}
