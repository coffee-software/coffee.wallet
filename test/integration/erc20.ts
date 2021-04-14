import { strictEqual, notStrictEqual } from "assert";
import {Keychain} from "../../src/Keychain";
import {BigNum} from "../../src/BigNum";
import {ERC20TestHandler, HandlerEthTest} from "../../src/Handlers/HandlerEthTest";
import {CacheMock, CacheWrapperMock, LogMock} from "../_mocks";
import {createAllCoinHandlers} from "../../src/AllCoinHandlers";
var config = require('../../config');

describe('ERC20 Integration Test', function() {
    describe('integration', function () {
        it('sending transaction', async function () {
            let allCoinHandlers = createAllCoinHandlers(new LogMock(), new CacheWrapperMock());

            let handler = <ERC20TestHandler>allCoinHandlers['ERC20.TST'];
            let integration1Keychain = new Keychain(config.integrationMnemonic1);
            let integration2Keychain = new Keychain(config.integrationMnemonic2);

            var balance1 = await handler.getOwnBalance(integration1Keychain);
            var balance2 = await handler.getOwnBalance(integration2Keychain);
            var fees = await handler.getFeeOptions();
            notStrictEqual(
                balance1.amount.toString(),
                "0"
            );
            notStrictEqual(
                balance2.amount.toString(),
                "0"
            );
            var tx;
            if (balance1.amount.cmp(balance2.amount) === 1) {
                tx = await handler.prepareTransaction(
                    integration1Keychain,
                    handler.getReceiveAddr(integration2Keychain),
                    balance1.amount.div(new BigNum("2")),
                    fees[0]
                );
            } else {
                tx = await handler.prepareTransaction(
                    integration2Keychain,
                    handler.getReceiveAddr(integration1Keychain),
                    balance2.amount.div(new BigNum("2")),
                    fees[0]
                );
            }
            var txid : string = await tx.send();
            strictEqual(
                txid.startsWith("0x"),
                true
            )
        });

    });
});