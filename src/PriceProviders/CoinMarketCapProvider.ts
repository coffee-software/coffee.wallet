import { BaseCoinHandler } from "../Handlers/BaseCoinHandler";
import {BasePriceProvider} from "./BasePriceProvider";

class CoinMarketCapProvider extends BasePriceProvider {
    name = "coinmarketcap.com"

    availableUnits = [
        "AUD", "BTC", "BRL", "CAD", "CHF", "CLP",
        "CNY", "CZK", "DKK", "EUR", "ETH", "GBP",
        "HKD", "HUF", "IDR", "ILS", "INR", "JPY",
        "KRW", "MXN", "MYR", "NOK", "NZD", "PHP",
        "PKR", "PLN", "RUB", "SEK", "SGD", "THB",
        "TRY", "TWD", "USD", "ZAR"
    ]
    defaultUnit = "USD"

    fetchPrices(handlers: { [code: string]: BaseCoinHandler; }): Promise<void> {
        throw new Error("CoinMarketCap not supported.");
        //'https://api.coinmarketcap.com/v1/ticker/?convert=' + this.unit + '&limit=1500'
        /*for (var i in list) {
            that.prices[list[i]['symbol']]=parseFloat(list[i]['price_' + that.unit.toLowerCase()]);
        }*/
    }
}

