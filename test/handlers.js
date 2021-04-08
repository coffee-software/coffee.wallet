"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
var AllCoinHandlers_1 = require("../src/AllCoinHandlers");
var _data_1 = require("./_data");
var Keychain_1 = require("../src/Keychain");
var HandlerEth_1 = require("../src/Handlers/HandlerEth");
var HandlerBtc_1 = require("../src/Handlers/HandlerBtc");
var HandlerDoge_1 = require("../src/Handlers/HandlerDoge");
var HandlerLtc_1 = require("../src/Handlers/HandlerLtc");
describe('Handlers Tests', function () {
    describe('All Coin Handlers', function () {
        it('has not empty core values', function () {
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
        it('should generate specific address for mnemonic', function () {
            var keychain1 = new Keychain_1.Keychain(_data_1.mnemonic1);
            var keychain2 = new Keychain_1.Keychain(_data_1.mnemonic2);
            assert_1.strictEqual(new HandlerEth_1.HandlerEth().getReceiveAddr(keychain1), "0x56a591691fC2be24d397b397E42827abaf4F3dC8");
            assert_1.strictEqual(new HandlerEth_1.HandlerEth().getPrivateKeyAsHex(keychain1), "0xc9ce376c232218f85d4ff9076bcf7d9cd82fb498da197ba3b2ab5069c0d77470");
            assert_1.strictEqual(new HandlerEth_1.HandlerEth().getReceiveAddr(keychain2), "0x51deed8F3bFA0073cAA93dE0024dDcF5dB81d764");
            assert_1.strictEqual(new HandlerEth_1.HandlerEth().getPrivateKeyAsHex(keychain2), "0xd49b10a178d974ab1e7cb47bed912697a96ad8ee6c89e1b38130512dc7353ca6");
            assert_1.strictEqual(new HandlerBtc_1.HandlerBtc().getReceiveAddr(keychain1), "1F6ShUUd63cainj6DgZfBk7kChiNB4YEwR");
            assert_1.strictEqual(new HandlerBtc_1.HandlerBtc().getPrivateKey(keychain1).toWIF(), "KyRCDYv8s77DnERaPB7itom4BxjgrexTwekDtfPdkgSq2vu985f4");
            assert_1.strictEqual(new HandlerBtc_1.HandlerBtc().getReceiveAddr(keychain2), "16AMAxJSEg6Yku6VbYbvnKMFZBJjg8o9P6");
            assert_1.strictEqual(new HandlerBtc_1.HandlerBtc().getPrivateKey(keychain2).toWIF(), "L5Xzv1TZPiyBbhhpWhZe8Vurctm4hPB9tBBDm6L9cazWYF4zFwYi");
            assert_1.strictEqual(new HandlerDoge_1.HandlerDoge().getReceiveAddr(keychain1), "DRaf1GhBpPhdd6AsjzvEGUCGM5zWoWnXUY");
            assert_1.strictEqual(new HandlerDoge_1.HandlerDoge().getPrivateKey(keychain1).toWIF(), "QQ9gZs2WA8eGKcQXWdSSey3ePuGvvwhYuoFwDqMqqKT1H7roKTi4");
            assert_1.strictEqual(new HandlerDoge_1.HandlerDoge().getReceiveAddr(keychain2), "D8zwUFcTWEDgn98Zbqa4x62DUWimFDnZS8");
            assert_1.strictEqual(new HandlerDoge_1.HandlerDoge().getPrivateKey(keychain2).toWIF(), "QQHHbWbzSPQgpKWcFhyZmLwH9hsjnvQyRkvyyCJkY9ocZmjq9Kmq");
            assert_1.strictEqual(new HandlerLtc_1.HandlerLtc().getReceiveAddr(keychain1), "LgEzcUX2oEXscjLQyZS11Yy4xhLsvV2zNr");
            assert_1.strictEqual(new HandlerLtc_1.HandlerLtc().getPrivateKey(keychain1).toWIF(), "T5Vq287xCvA6a8e6tqDizRtRMPFw6aNPMgNuvrLzAaRfzh3rdbqK");
            assert_1.strictEqual(new HandlerLtc_1.HandlerLtc().getReceiveAddr(keychain2), "LeDrRQ8EeJ789pT16xg6JzQgQU1FKJEmnN");
            assert_1.strictEqual(new HandlerLtc_1.HandlerLtc().getPrivateKey(keychain2).toWIF(), "T7fP1ZJMMMtMjRh1FjULkiiXzYPC6LDHb8uhqKeSs1tVJPhkazXS");
        });
    });
});
//# sourceMappingURL=handlers.js.map