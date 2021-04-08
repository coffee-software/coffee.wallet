import { strictEqual, notStrictEqual } from "assert";
import {allCoinHandlers, isOnlineCoinHanlder} from "../src/AllCoinHandlers";
import {mnemonic1, mnemonic2} from "./_data";
import {Keychain} from "../src/Keychain";

describe('Handlers Tests', function() {
    describe('All Coin Handlers', function () {
        it('not empty core values', function () {
            let keychain1 = new Keychain(mnemonic1)
            let keychain2 = new Keychain(mnemonic2)
            for (let key in allCoinHandlers) {
                let handler = allCoinHandlers[key]
                notStrictEqual(handler.ticker.length, 0)
                notStrictEqual(handler.name.length, 0)
                notStrictEqual(handler.icon.length, 0)
                notStrictEqual(handler.links.length, 0)
                notStrictEqual(handler.description.length, 0)
                if (isOnlineCoinHanlder(handler)) {
                    notStrictEqual(handler.explorerLinkAddr('TEST').length, 0)
                    notStrictEqual(handler.explorerLinkTx('TEST').length, 0)
                    notStrictEqual(
                        handler.getReceiveAddr(keychain1),
                        handler.getReceiveAddr(keychain2)
                    )
                }
            }
        });
    });
});
