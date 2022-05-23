import { BaseCoinHandler } from "../Handlers/BaseCoinHandler";
import { BasePriceProvider } from "./BasePriceProvider";
import { Https } from "../Core/Https";
import {CacheWrapper} from "../Engine";

export class CoffeeWalletProvider extends BasePriceProvider {

    name = "wallet.coffee"

    availableUnits : string[] = []

    defaultUnit = "USD"

    constructor(allHandlers: { [code: string] : BaseCoinHandler }, cache: CacheWrapper, unit: string = null) {
        super(cache, unit);
        this.availableUnits = Object.keys(allHandlers).sort();
    }

    async fetchPrices(handlers: { [code: string] : BaseCoinHandler }): Promise<void> {
        let codes = Object.keys(handlers).join(',') + ',' + this.unit;
        let path = encodeURI('/ticker.json?codes=' + codes);
        let tickerData : { [unit: string] : number } = (await Https.makeJsonRequest('api.wallet.coffee', path))['ticker'];

        let base = tickerData[this.unit];
        for (let key in tickerData) {
            this.prices[key] = tickerData[key] / base;
        }
    }
}
