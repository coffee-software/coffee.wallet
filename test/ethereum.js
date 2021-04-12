"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
var Keychain_1 = require("../src/Keychain");
var HandlerEth_1 = require("../src/Handlers/HandlerEth");
var _data_1 = require("./_data");
var _mocks_1 = require("./_mocks");
describe('Ethereum Test', function () {
    describe('mnemonics', function () {
        var keychain1 = new Keychain_1.Keychain(_data_1.mnemonic1);
        var keychain2 = new Keychain_1.Keychain(_data_1.mnemonic2);
        var handler = new HandlerEth_1.HandlerEth(new _mocks_1.LogMock(), new _mocks_1.CacheWrapperMock());
        it('should validate addresses', function () {
            assert_1.strictEqual(handler.validateAddress("0x56a591691fC2be24d397b397E42827abaf4F3dC8"), true);
            assert_1.strictEqual(handler.validateAddress("0x75e89d5979E4f6Fba9F97c104c2F0AFB3F1dcB88"), true);
            assert_1.strictEqual(handler.validateAddress("abcd"), false);
            assert_1.strictEqual(handler.validateAddress("0x56a591691fC2be24d397b397E42827abaf4F3dC7"), false);
        });
    });
});
//# sourceMappingURL=ethereum.js.map