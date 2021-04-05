"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HandlerBtc_1 = require("../src/Handlers/HandlerBtc");
var assert_1 = require("assert");
var Keychain_1 = require("../src/Keychain");
var _data_1 = require("./_data");
describe('Bitcoin Test', function () {
    describe('mnemonics', function () {
        var keychain1 = new Keychain_1.Keychain(_data_1.mnemonic1);
        var keychain2 = new Keychain_1.Keychain(_data_1.mnemonic2);
        var handler = new HandlerBtc_1.HandlerBtc();
        it('should generate specific address for mnemonic', function () {
            assert_1.strictEqual(handler.getReceiveAddr(keychain1), "1F6ShUUd63cainj6DgZfBk7kChiNB4YEwR");
            assert_1.strictEqual(handler.getReceiveAddr(keychain2), "16AMAxJSEg6Yku6VbYbvnKMFZBJjg8o9P6");
        });
        it('should validate addresses', function () {
            assert_1.strictEqual(handler.validateAddress("1F6ShUUd63cainj6DgZfBk7kChiNB4YEwR"), true);
            assert_1.strictEqual(handler.validateAddress("35bSzXvRKLpHsHMrzb82f617cV4Srnt7hS"), true);
            assert_1.strictEqual(handler.validateAddress("abcd"), false);
            assert_1.strictEqual(handler.validateAddress("0x56a591691fC2be24d397b397E42827abaf4F3dC7"), false);
        });
    });
});
//# sourceMappingURL=bitcoin.js.map