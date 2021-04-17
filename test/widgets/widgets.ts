import { strictEqual, notStrictEqual } from "assert";
import {BigNum} from "../../src/Core/BigNum";
import {AmountInputWidget} from "../../src/Widgets/AmountInputWidget";
import {CoinGeckoProvider} from "../../src/PriceProviders/CoinGeckoProvider";
import {CacheWrapperMock, LogMock} from "../_mocks";
import {HandlerBtc} from "../../src/Handlers/HandlerBtc";

describe('UX Test', function() {
    describe('BigNum', function () {
        it('additions', async function () {
            let provider = new CoinGeckoProvider(new CacheWrapperMock(), 'PLN')
            let handler = new HandlerBtc(new LogMock(), new CacheWrapperMock())
            await provider.updatePrices({'BTC': handler} );

            let w  = new AmountInputWidget(handler,provider);
            document.body.append(w.element);

        });
    });
});
