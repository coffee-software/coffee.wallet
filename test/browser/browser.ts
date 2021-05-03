import { strictEqual, notStrictEqual } from "assert";
import {AmountInputWidget} from "../../src/Widgets/AmountInputWidget";
import {CoinGeckoProvider} from "../../src/PriceProviders/CoinGeckoProvider";
import {CacheMock, CacheWrapperMock, LogMock, StorageMock} from "../_mocks";
import {HandlerBtc} from "../../src/Handlers/HandlerBtc";
import {Engine} from "../../src/Engine";
import {WalletWidget} from "../../src/Widgets/WalletWidget";
import {Wallet} from "../../src/Wallet";
import {Keychain} from "../../src/Keychain";
import {Config} from "../../src/Config";
import {HandlerBtcTest} from "../../src/Handlers/HandlerBtcTest";
import {PortfolioAddress, PortfolioBalance, PortfolioItem} from "../../src/PortfolioItem";
import {PortfolioItemWidget} from "../../src/Widgets/PortfolioItemWidget";
import {SelectWidget} from "../../src/Widgets/SelectWidget";


describe('UX Test', function() {
    describe('AmountInputWidget', function () {
        it('create', async function () {
            let provider = new CoinGeckoProvider(new CacheWrapperMock(), 'PLN')
            let engine = new Engine(
                new StorageMock(),
                new LogMock(),
                new CacheMock()
            );
            let handler = new HandlerBtc(engine)
            await provider.updatePrices({'BTC': handler} );

            let w  = new AmountInputWidget(handler,provider);
            document.body.append(w.element);

        });
    });
    describe('SelectWidget', function () {
        it('create', async function () {
            let w  = new SelectWidget(function(value){
                alert(value);
            });
            w.setOptions(['a', 'b', 'c'], 'b');
            document.body.append(w.element);

        });
    });
    describe('WalletWidget', function () {
        it('create', async function () {
            let engine = new Engine(
                new StorageMock(),
                new LogMock(),
                new CacheMock()
            );
            let handler = new HandlerBtcTest(engine)
            let wallet = new Wallet(
                engine,
                'BTC.TST',
                handler,
                new Keychain(Config.integrationMnemonic1)
            );
            let widget  = new WalletWidget(engine, wallet);
            document.body.append(widget.element);

        });
    });
    describe('PortfolioItemWidget', function () {
        it('create', async function () {
            let engine = new Engine(
                new StorageMock(),
                new LogMock(),
                new CacheMock()
            );
            let handler = new HandlerBtcTest(engine)
            let wallet = new Wallet(
                engine,
                'BTC.TST',
                handler,
                new Keychain(Config.integrationMnemonic1)
            );
            wallet.portfolio.push(
                new PortfolioBalance('test1', 123)
            );
            wallet.portfolio.push(
                new PortfolioAddress('test2', 'mno1RNYbzYg59XdjQv61S2NRREDLnAr7DB')
            )
            let widget1 = new PortfolioItemWidget(engine, wallet, 0);
            document.body.append(widget1.element);
            let widget2 = new PortfolioItemWidget(engine, wallet, 1);
            document.body.append(widget2.element);

        });
    });

});
