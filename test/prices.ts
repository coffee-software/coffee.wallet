import { strictEqual, notStrictEqual } from "assert";
import {CacheMock, CacheWrapperMock, LogMock} from "./_mocks";
import {CoinGeckoProvider} from "../src/PriceProviders/CoinGeckoProvider";
import {createAllCoinHandlers} from "../src/AllCoinHandlers";
import {CoinPaprikaProvider} from "../src/PriceProviders/CoinPaprikaProvider";
import {BasePriceProvider} from "../src/PriceProviders/BasePriceProvider";

function testProvider(provider: BasePriceProvider) {
    it('fetches core prices', async function () {
        await provider.updatePrices(createAllCoinHandlers(new LogMock(), new CacheWrapperMock()));
        strictEqual(
            provider.getPrice('DOGE') > 0,
            true
        )
        strictEqual(
            provider.getPrice('BTC') > 0,
            true
        )
        strictEqual(
            provider.getPrice('ETH') > 0,
            true
        )
    });
    it('fetches cached prices', async function () {
        strictEqual(
            provider.getPrice('DOGE') > 0,
            true
        )
    });
}

describe('Price Providers', function() {
    describe('CoinGecko', function () {
        testProvider(new CoinGeckoProvider(new CacheWrapperMock(), 'PLN'));
    });
    describe('CoinPaprika', function () {
        testProvider(new CoinPaprikaProvider(new CacheWrapperMock(), 'PLN'));
    });
});
