import { strictEqual, notStrictEqual } from "assert";
import {CacheMock, CacheWrapperMock, LogMock} from "./_mocks";
import {CoinGeckoProvider} from "../src/PriceProviders/CoinGeckoProvider";
import {createAllCoinHandlers} from "../src/AllCoinHandlers";
import {CoinPaprikaProvider} from "../src/PriceProviders/CoinPaprikaProvider";
import {BasePriceProvider} from "../src/PriceProviders/BasePriceProvider";
import {HandlerDoge} from "../src/Handlers/HandlerDoge";

function testProvider(provider: BasePriceProvider) {
    it('fetches core prices', async function () {
        let handlers = createAllCoinHandlers(new LogMock(), new CacheWrapperMock());
        await provider.updatePrices(handlers);
        strictEqual(
            provider.getPrice(handlers['DOGE']) > 0,
            true
        )
        strictEqual(
            provider.getPrice(handlers['BTC']) > 0,
            true
        )
        strictEqual(
            provider.getPrice(handlers['ETH']) > 0,
            true
        )
    });
    it('fetches cached prices', async function () {
        strictEqual(
            provider.getPrice(new HandlerDoge(new LogMock(), new CacheWrapperMock())) > 0,
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
