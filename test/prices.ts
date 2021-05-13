import { strictEqual, notStrictEqual } from "assert";
import {CacheMock, CacheWrapperMock, LogMock, StorageMock} from "./_mocks";
import {CoinGeckoProvider} from "../src/PriceProviders/CoinGeckoProvider";
import {createAllCoinHandlers} from "../src/AllCoinHandlers";
import {CoinPaprikaProvider} from "../src/PriceProviders/CoinPaprikaProvider";
import {BasePriceProvider} from "../src/PriceProviders/BasePriceProvider";
import {HandlerDoge} from "../src/Handlers/HandlerDoge";
import {Engine} from "../src/Engine";

function testProvider(provider: BasePriceProvider) {
    it('fetches core prices', async function () {
        let engine = new Engine(
            new StorageMock(),
            new LogMock(),
            new CacheMock()
        );
        await provider.updatePrices({
            'DOGE' : engine.allCoinHandlers['DOGE'],
            'BTC' : engine.allCoinHandlers['BTC'],
            'ETH' : engine.allCoinHandlers['ETH']
        });
        strictEqual(
            provider.getPrice(engine.allCoinHandlers['DOGE']) > 0,
            true
        )
        strictEqual(
            provider.getPrice(engine.allCoinHandlers['BTC']) > 0,
            true
        )
        strictEqual(
            provider.getPrice(engine.allCoinHandlers['ETH']) > 0,
            true
        )
    });
    it('fetches cached prices', async function () {
        let engine = new Engine(
            new StorageMock(),
            new LogMock(),
            new CacheMock()
        );
        strictEqual(
            provider.getPrice(new HandlerDoge(engine)) > 0,
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
