import { strictEqual, notStrictEqual } from "assert";
import {Keychain} from "../../src/Keychain";
import {BigNum} from "../../src/Core/BigNum";
import {HandlerBtcTest} from "../../src/Handlers/HandlerBtcTest";
import {CacheMock, CacheWrapperMock, LogMock} from "../_mocks";
import {Config} from "../../src/Config";

describe('Bitcoin Integration Test', function() {
    describe('integration', function () {
        it('sending transaction', async function () {
            let handler = new HandlerBtcTest(new LogMock(), new CacheWrapperMock());

            let integration1Keychain = new Keychain(Config.integrationMnemonic1);
            let integration2Keychain = new Keychain(Config.integrationMnemonic2);
            console.log(await handler.getReceiveAddr(integration1Keychain));
            console.log(await handler.getReceiveAddr(integration2Keychain));
            let balance1 = await handler.getOwnBalance(integration1Keychain);
            let balance2 = await handler.getOwnBalance(integration2Keychain);
            let fees = await handler.getFeeOptions();
            notStrictEqual(
                balance1.total().toString(),
                "0"
            );
            notStrictEqual(
                balance2.total().toString(),
                "0"
            );
            console.log(balance1.total().toString());
            console.log(balance2.total().toString());
            let tx;
            if (balance1.total().cmp(balance2.total()) === 1) {
                tx = await handler.prepareTransaction(
                    integration1Keychain,
                    handler.getReceiveAddr(integration2Keychain),
                    balance1.total().div(new BigNum("2")),
                    fees[Math.min(2, fees.length - 1)]
                );
            } else {
                tx = await handler.prepareTransaction(
                    integration2Keychain,
                    handler.getReceiveAddr(integration1Keychain),
                    balance2.total().div(new BigNum("2")),
                    fees[Math.min(2, fees.length - 1)]
                );
            }
            let txid : string = await tx.send();
            console.log(txid);
            strictEqual(
                txid.length,
                64
            )
        });

    });
});
