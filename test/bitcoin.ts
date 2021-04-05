import { HandlerBtc } from "../src/Handlers/HandlerBtc";
import { strictEqual, notStrictEqual } from "assert";
import {Keychain} from "../src/Keychain";
import {mnemonic1, mnemonic2} from "./_data";

describe('Bitcoin Test', function() {
    describe('mnemonics', function () {
        let keychain1 = new Keychain(mnemonic1);
        let keychain2 = new Keychain(mnemonic2);
        let handler = new HandlerBtc();
        it('should generate specific address for mnemonic', function () {
            strictEqual(
                handler.getReceiveAddr(keychain1),
                "1F6ShUUd63cainj6DgZfBk7kChiNB4YEwR"
            );
            strictEqual(
                handler.getReceiveAddr(keychain2),
                "16AMAxJSEg6Yku6VbYbvnKMFZBJjg8o9P6"
            );
        });
    });
});
