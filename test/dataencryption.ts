import {strictEqual, notStrictEqual, deepStrictEqual} from "assert";
import {Engine, Keychain} from "../src/Engine";
import {CacheMock, LogMock, StorageMock} from "./_mocks";
import {mnemonic1} from "./_data";

describe('Engine Data Encryption Test', function() {
    describe('Data Encryption', function () {
        it('core', function () {
            let engine = new Engine(
                new StorageMock(),
                new LogMock(),
                new CacheMock()
            );
            engine.keychain = new Keychain(mnemonic1);
            let data = {
                'test' : 'test',
                'test2': 12345
            };

            let encrypted = engine.encryptData(data);
            strictEqual(typeof encrypted, 'string');
            let decrypted = engine.decryptData(encrypted);
            deepStrictEqual(data, decrypted);
        });
    });
});
