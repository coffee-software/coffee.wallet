import { strictEqual, notStrictEqual } from "assert";
import {Keychain} from "../../src/Keychain";
import {HandlerEth} from "../../src/Handlers/HandlerEth";
import {BigNum} from "../../src/BigNum";
var config = require('../../config');

describe('Ethereum Integration Test', function() {
    describe('integration', function () {
        it('sending transaction', async function () {
            let handler = new HandlerEth();
            let integration1Keychain = new Keychain(config.integrationMnemonic1);
            let integration2Keychain = new Keychain(config.integrationMnemonic2);

            var balance1 = await handler.getBalance(handler.getReceiveAddr(integration1Keychain));
            var balance2 = await handler.getBalance(handler.getReceiveAddr(integration2Keychain));
            var fees = await handler.getFeeOptions();
            notStrictEqual(
                balance1.toString(),
                "0"
            );
            notStrictEqual(
                balance2.toString(),
                "0"
            );
            var tx;
            if (balance1.cmp(balance2) === 1) {
                tx = await handler.prepareTransaction(
                    integration1Keychain,
                    handler.getReceiveAddr(integration2Keychain),
                    balance1.div(new BigNum("2")),
                    fees[0]
                );
            } else {
                tx = await handler.prepareTransaction(
                    integration2Keychain,
                    handler.getReceiveAddr(integration1Keychain),
                    balance2.div(new BigNum("2")),
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
