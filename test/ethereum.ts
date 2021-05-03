import { strictEqual, notStrictEqual } from "assert";
import {Keychain} from "../src/Keychain";
import {HandlerEth} from "../src/Handlers/HandlerEth";
import {mnemonic1, mnemonic2} from "./_data";
import {CacheMock, CacheWrapperMock, LogMock, StorageMock} from "./_mocks";
import {Engine} from "../src/Engine";

describe('Ethereum Test', function() {
    describe('mnemonics', function () {
        let keychain1 = new Keychain(mnemonic1);
        let keychain2 = new Keychain(mnemonic2);
        let engine = new Engine(
            new StorageMock(),
            new LogMock(),
            new CacheMock()
        );
        let handler = new HandlerEth(engine);
        it('should validate addresses', function () {
            strictEqual(
                handler.validateAddress("0x56a591691fC2be24d397b397E42827abaf4F3dC8"),
                true
            );
            strictEqual(
                handler.validateAddress("0x75e89d5979E4f6Fba9F97c104c2F0AFB3F1dcB88"),
                true
            );
            strictEqual(
                handler.validateAddress("abcd"),
                false
            );
            strictEqual(
                handler.validateAddress("0x56a591691fC2be24d397b397E42827abaf4F3dC7"),
                false
            );
        });

    });
});
