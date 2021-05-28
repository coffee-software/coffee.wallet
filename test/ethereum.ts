import { strictEqual, notStrictEqual } from "assert";
import {Keychain} from "../src/Keychain";
import {HandlerEth} from "../src/Handlers/HandlerEth";
import {mnemonic1, mnemonic2} from "./_data";
import {CacheMock, CacheWrapperMock, LogMock, StorageMock} from "./_mocks";
import {Engine} from "../src/Engine";

describe('Ethereum Test', function() {
    /* describe('randomizer', function () {
        let engine = new Engine(
            new StorageMock(),
            new LogMock(),
            new CacheMock()
        );
        let maxMatching = 0;
        for (let k = 0; k< 1000; k++) {
            console.log(k);
            for (let i = 0; i < 500; i++) {
                let mnemo = Keychain.newMnemonic();
                let keychain = new Keychain(mnemo);
                let addr = new HandlerEth(engine).getReceiveAddr(keychain);
                let matching = 0;
                for (let j = 2; j < addr.length; j++) {
                    //console.log(addr.charAt(j), matching.toString());
                    if (addr.charAt(j) != (matching+1).toString()) {
                        break;
                    }
                    matching++;
                    if (matching > maxMatching) {
                        maxMatching = matching;
                        console.log('new best');
                        console.log(mnemo);
                        console.log(addr);
                    } else if (matching == maxMatching) {
                        console.log('remis');
                        console.log(mnemo);
                        console.log(addr);
                    }
                }
            }
        }
    }) */
    describe('mnemonics', function () {
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
