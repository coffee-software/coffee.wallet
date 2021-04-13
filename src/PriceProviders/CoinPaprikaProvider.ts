import { BasePriceProvider } from "./BasePriceProvider";
import { Https } from "../Https";
import { BaseCoinHandler } from "../Handlers/BaseCoinHandler";

export class CoinPaprikaProvider extends BasePriceProvider {

    name = "coinpaprika.com"

    availableUnits = [
        "BTC", "ETH", "USD", "EUR", "PLN", "KRW", "GBP", "CAD", "JPY", "RUB", "TRY", "NZD", "AUD", "CHF", "UAH", "HKD",
        "SGD", "NGN", "PHP", "MXN", "BRL", "THB", "CLP", "CNY", "CZK", "DKK", "HUF", "IDR", "ILS", "INR", "MYR", "NOK",
        "PKR", "SEK", "TWD", "ZAR", "VND", "BOB", "COP", "PEN", "ARS", "ISK"
    ]

    defaultUnit = "USD"

    async fetchPrices(handlers: { [code: string]: BaseCoinHandler }): Promise<void> {
        let path = encodeURI('/v1/tickers?quotes=' + this.unit);
        let list : {
            id: string,
            name: string,
            symbol: string,
            quotes: {
                [unit: string] : {
                    price: number
                }
            }
        }[] = await Https.makeJsonRequest('api.coinpaprika.com', path);

        for (let i in list) {
            this.prices[list[i]['symbol']] = list[i].quotes[this.unit].price;
        }
    }
}

