import { BasePriceProvider } from "./BasePriceProvider";
import { Https } from "../Core/Https";
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
        for (let key in handlers) {
            if (handlers[key].coinPaprikaId) {
                let path = '/v1/tickers/' + handlers[key].coinPaprikaId + '?quotes=' + this.unit;
                let data : {
                    id: string,
                    name: string,
                    symbol: string,
                    quotes: {
                        [unit: string] : {
                            price: number
                        }
                    }
                } = await Https.makeJsonRequest('api.coinpaprika.com', path);
                this.prices[handlers[key].code] = data.quotes[this.unit].price;
                await new Promise(r => setTimeout(r, 200));
            }
        }
        /*
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
            for (let key in handlers) {
                if (handlers[key].coinPaprikaId == list[i].id) {
                    this.prices[handlers[key].code] = list[i].quotes[this.unit].price;
                }
            }
        }*/
    }
}

