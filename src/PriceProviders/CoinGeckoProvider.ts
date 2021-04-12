import { BaseCoinHandler } from "../Handlers/BaseCoinHandler";
import {BasePriceProvider} from "./BasePriceProvider";
import {Https} from "../Https";

export class CoinGeckoProvider extends BasePriceProvider {

    name = "coingecko.com"

    //simple/supported_vs_currencies
    availableUnits = [
        "BTC", "ETH", "LTC", "BCH", "BNB", "EOS", "XRP", "XLM", "LINK", "DOT", "YFI", "USD", "AED", "ARS", "AUD", "BDT",
        "BHD", "BMD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR",
        "JPY", "KRW", "KWD", "LKR", "MMK", "MXN", "MYR", "NGN", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SAR", "SEK",
        "SGD", "THB", "TRY", "TWD", "UAH", "VEF", "VND", "ZAR", "XDR", "XAG", "XAU", "BITS", "SATS"
    ]

    defaultUnit = "USD"

    async fetchPrices(handlers: { [code: string] : BaseCoinHandler }): Promise<void> {
        let names = Object.keys(handlers).map(function(key){ return handlers[key].name; });
        let path = encodeURI('/api/v3/simple/price?ids=' + names.join(',') + '&vs_currencies=' + this.unit);
        let response : { [code: string] : { [unit: string] : number } } = await Https.makeJsonRequest('api.coingecko.com', path);
        for (var key in handlers) {
            if (handlers[key].name.toLowerCase() in response) {
                this.prices[key] = response[handlers[key].name.toLowerCase()][this.unit.toLowerCase()];
            }
        }
    }
}
