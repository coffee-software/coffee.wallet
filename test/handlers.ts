import { strictEqual, notStrictEqual } from "assert";
import {createAllCoinHandlers, isOnlineCoinHanlder} from "../src/AllCoinHandlers";
import {mnemonic1, mnemonic2} from "./_data";
import {Keychain} from "../src/Keychain";
import {HandlerEth} from "../src/Handlers/HandlerEth";
import {HandlerBtc} from "../src/Handlers/HandlerBtc";
import {HandlerDoge} from "../src/Handlers/HandlerDoge";
import {HandlerLtc} from "../src/Handlers/HandlerLtc";
import {CacheMock, CacheWrapperMock, LogMock, StorageMock} from "./_mocks";
import {Engine} from "../src/Engine";

describe('Handlers Tests', function() {
    describe('All Coin Handlers', function () {

        let engine = new Engine(
            new StorageMock(),
            new LogMock(),
            new CacheMock()
        );
        it('legacy test', function () {
            let allCoinHandlers = engine.allCoinHandlers;
            strictEqual(
                'bip39' in allCoinHandlers,
                false
            )
        });
        it('has not empty core values', function () {
            let keychain1 = new Keychain(mnemonic1)
            let keychain2 = new Keychain(mnemonic2)
            let allCoinHandlers = engine.allCoinHandlers;
            for (let key in allCoinHandlers) {
                let handler = allCoinHandlers[key]
                notStrictEqual(handler.ticker.length, 0)
                notStrictEqual(handler.name.length, 0)
                notStrictEqual(handler.icon.length, 0)
                notStrictEqual(handler.links.length, 0)
                notStrictEqual(handler.description.length, 0)
            }
        });
        it('codes match', function () {
            let allCoinHandlers = engine.allCoinHandlers;
            for (let key in allCoinHandlers) {
                strictEqual(key, allCoinHandlers[key].code)
            }
        });
        it('has not empty online values', function () {
            let keychain1 = new Keychain(mnemonic1)
            let keychain2 = new Keychain(mnemonic2)
            let allCoinHandlers = engine.allCoinHandlers;
            for (let key in allCoinHandlers) {
                let handler = allCoinHandlers[key]
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

        it('should generate specific address for mnemonic', function () {
            let keychain1 = new Keychain(mnemonic1)
            let keychain2 = new Keychain(mnemonic2)
            strictEqual(
                new HandlerEth(engine).getReceiveAddr(keychain1),
                "0x56a591691fC2be24d397b397E42827abaf4F3dC8"
            );
            strictEqual(
                new HandlerEth(engine).exportPrivateKey(keychain1),
                "0xc9ce376c232218f85d4ff9076bcf7d9cd82fb498da197ba3b2ab5069c0d77470"
            );
            strictEqual(
                new HandlerEth(engine).getReceiveAddr(keychain2),
                "0x51deed8F3bFA0073cAA93dE0024dDcF5dB81d764"
            );
            strictEqual(
                new HandlerEth(engine).exportPrivateKey(keychain2),
                "0xd49b10a178d974ab1e7cb47bed912697a96ad8ee6c89e1b38130512dc7353ca6"
            );
            strictEqual(
                new HandlerBtc(engine).getReceiveAddr(keychain1),
                "bc1qn2v545yzwk03dmwzpw85qprmsh2q8tw7l5ml66"
                //TODO no segwit: "1F6ShUUd63cainj6DgZfBk7kChiNB4YEwR"
            );
            strictEqual(
                new HandlerBtc(engine).exportPrivateKey(keychain1),
                "KyRCDYv8s77DnERaPB7itom4BxjgrexTwekDtfPdkgSq2vu985f4"
            );
            strictEqual(
                new HandlerBtc(engine).getReceiveAddr(keychain2),
                "bc1q8zwnvq6jxvjx7u6a7yagd58pv4rgmrtvxfjr5n"
                //TODO no segwit: "16AMAxJSEg6Yku6VbYbvnKMFZBJjg8o9P6"
            );
            strictEqual(
                new HandlerBtc(engine).exportPrivateKey(keychain2),
                "L5Xzv1TZPiyBbhhpWhZe8Vurctm4hPB9tBBDm6L9cazWYF4zFwYi"
            );
            strictEqual(
                new HandlerDoge(engine).getReceiveAddr(keychain1),
                "DRaf1GhBpPhdd6AsjzvEGUCGM5zWoWnXUY"
            );
            strictEqual(
                new HandlerDoge(engine).exportPrivateKey(keychain1),
                "QQ9gZs2WA8eGKcQXWdSSey3ePuGvvwhYuoFwDqMqqKT1H7roKTi4"
            );
            strictEqual(
                new HandlerDoge(engine).getReceiveAddr(keychain2),
                "D8zwUFcTWEDgn98Zbqa4x62DUWimFDnZS8"
            );
            strictEqual(
                new HandlerDoge(engine).exportPrivateKey(keychain2),
                "QQHHbWbzSPQgpKWcFhyZmLwH9hsjnvQyRkvyyCJkY9ocZmjq9Kmq"
            );
            strictEqual(
                new HandlerLtc(engine).getReceiveAddr(keychain1),
                "ltc1qu6xsfszgy3n37fsvw32f67e8y7u728dfx9p7ye"
                //TODO non segwit: "LgEzcUX2oEXscjLQyZS11Yy4xhLsvV2zNr"
            );
            strictEqual(
                new HandlerLtc(engine).exportPrivateKey(keychain1),
                "T5Vq287xCvA6a8e6tqDizRtRMPFw6aNPMgNuvrLzAaRfzh3rdbqK"
            );
            strictEqual(
                new HandlerLtc(engine).getReceiveAddr(keychain2),
                "ltc1q6pjcx799n788u969rzqx4v83msau4pnczcjylj"
                //TODO non segwit: "LeDrRQ8EeJ789pT16xg6JzQgQU1FKJEmnN"
            );
            strictEqual(
                new HandlerLtc(engine).exportPrivateKey(keychain2),
                "T7fP1ZJMMMtMjRh1FjULkiiXzYPC6LDHb8uhqKeSs1tVJPhkazXS"
            );
        });
    });
});
