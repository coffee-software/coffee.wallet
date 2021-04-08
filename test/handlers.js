"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
var AllCoinHandlers_1 = require("../src/AllCoinHandlers");
var _data_1 = require("./_data");
var Keychain_1 = require("../src/Keychain");
describe('Handlers Tests', function () {
    describe('All Coin Handlers', function () {
        it('not empty core values', function () {
            var keychain1 = new Keychain_1.Keychain(_data_1.mnemonic1);
            var keychain2 = new Keychain_1.Keychain(_data_1.mnemonic2);
            for (var key in AllCoinHandlers_1.allCoinHandlers) {
                var handler = AllCoinHandlers_1.allCoinHandlers[key];
                assert_1.notStrictEqual(handler.ticker.length, 0);
                assert_1.notStrictEqual(handler.name.length, 0);
                assert_1.notStrictEqual(handler.icon.length, 0);
                assert_1.notStrictEqual(handler.links.length, 0);
                assert_1.notStrictEqual(handler.description.length, 0);
                if (AllCoinHandlers_1.isOnlineCoinHanlder(handler)) {
                    assert_1.notStrictEqual(handler.explorerLinkAddr('TEST').length, 0);
                    assert_1.notStrictEqual(handler.explorerLinkTx('TEST').length, 0);
                    assert_1.notStrictEqual(handler.getReceiveAddr(keychain1), handler.getReceiveAddr(keychain2));
                }
            }
        });
    });
});
//# sourceMappingURL=handlers.js.map