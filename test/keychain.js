"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Keychain_1 = require("../src/Keychain");
var assert_1 = require("assert");
var _data_1 = require("./_data");
describe('Keychain Test', function () {
    describe('mnemonics', function () {
        var keychain1 = new Keychain_1.Keychain(_data_1.mnemonic1);
        var keychain2 = new Keychain_1.Keychain(_data_1.mnemonic2);
        it('should generate specific hex seed', function () {
            assert_1.strictEqual(keychain1.getSeedHex(), "2fc8627a54d5c57de1b05a6763b9773aa2a333900282a64c3736ba195e7f1944c685817023f87fb72fa0b4b65859884de26557c571e453466ed5e4fdf3a2da47");
            assert_1.strictEqual(keychain2.getSeedHex(), "cf98815c8aed7fdc08bd31913772c08d9bfc787f3d133edea8ffdd20d29881a80d5ed12e44822d1888a1280ffd04648540e1470805cbfadb39663986d127ee96");
        });
        it('should generate unique, valid mnemonics', function () {
            var previous = keychain1.getSeedHex();
            for (var i = 0; i < 5; i++) {
                var randomKeychain = new Keychain_1.Keychain(Keychain_1.Keychain.newMnemonic());
                assert_1.notStrictEqual(previous, randomKeychain.getSeedHex());
                assert_1.strictEqual(Keychain_1.Keychain.validateMnemonic(randomKeychain.mnemonic), true);
                previous = randomKeychain.getSeedHex();
            }
        });
        it('should properly validate mnemonics', function () {
            assert_1.strictEqual(Keychain_1.Keychain.validateMnemonic(keychain1.mnemonic), true);
            assert_1.strictEqual(Keychain_1.Keychain.validateMnemonic(keychain2.mnemonic), true);
            assert_1.strictEqual(Keychain_1.Keychain.validateMnemonic("this is not a valid mnemonic"), false);
            assert_1.strictEqual(Keychain_1.Keychain.validateMnemonic("this is not a valid mnemonic even that it has 12 words"), false);
            assert_1.strictEqual(Keychain_1.Keychain.validateMnemonic("hello hello hello hello hello hello hello hello hello hello hello hello"), false);
        });
    });
});
describe('Jazzicon', function () {
    describe('generation', function () {
    });
});
//# sourceMappingURL=keychain.js.map