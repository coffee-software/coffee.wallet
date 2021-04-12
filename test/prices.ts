import { strictEqual, notStrictEqual } from "assert";
import {CacheMock, CacheWrapperMock, LogMock} from "./_mocks";
import {CoinGeckoProvider} from "../src/PriceProviders/CoinGeckoProvider";
import {createAllCoinHandlers} from "../src/AllCoinHandlers";
import {CoinPaprikaProvider} from "../src/PriceProviders/CoinPaprikaProvider";

describe('Price Providers', function() {
    describe('Fetching Prices', function () {
        it('CoinGecko', async function () {
            let provider = new CoinGeckoProvider(new CacheWrapperMock(), 'PLN');
            await provider.updatePrices(createAllCoinHandlers(new LogMock(), new CacheWrapperMock()));
            strictEqual(
                provider.getPrice('DOGE') > 0,
                true
            )
        });
        it('CoinPaprika', async function () {
            let provider = new CoinPaprikaProvider(new CacheWrapperMock(), 'PLN');
            await provider.updatePrices(createAllCoinHandlers(new LogMock(), new CacheWrapperMock()));
            strictEqual(
                provider.getPrice('DOGE') > 0,
                true
            )
        });
    });
});
