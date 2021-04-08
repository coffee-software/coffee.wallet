import { strictEqual, notStrictEqual } from "assert";
import {allCoinHandlers, isOnlineCoinHanlder} from "../src/AllCoinHandlers";
import {mnemonic1, mnemonic2} from "./_data";
import {Keychain} from "../src/Keychain";
import {HandlerEth} from "../src/Handlers/HandlerEth";
import {HandlerBtc} from "../src/Handlers/HandlerBtc";
import {HandlerDoge} from "../src/Handlers/HandlerDoge";
import {HandlerLtc} from "../src/Handlers/HandlerLtc";

describe('Handlers Tests', function() {
    describe('All Coin Handlers', function () {
        it('has not empty core values', function () {
            let keychain1 = new Keychain(mnemonic1)
            let keychain2 = new Keychain(mnemonic2)
            for (let key in allCoinHandlers) {
                let handler = allCoinHandlers[key]
                notStrictEqual(handler.ticker.length, 0)
                notStrictEqual(handler.name.length, 0)
                notStrictEqual(handler.icon.length, 0)
                notStrictEqual(handler.links.length, 0)
                notStrictEqual(handler.description.length, 0)
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
                new HandlerEth().getReceiveAddr(keychain1),
                "0x56a591691fC2be24d397b397E42827abaf4F3dC8"
            );
            strictEqual(
                new HandlerEth().getPrivateKeyAsHex(keychain1),
                "0xc9ce376c232218f85d4ff9076bcf7d9cd82fb498da197ba3b2ab5069c0d77470"
            );
            strictEqual(
                new HandlerEth().getReceiveAddr(keychain2),
                "0x51deed8F3bFA0073cAA93dE0024dDcF5dB81d764"
            );
            strictEqual(
                new HandlerEth().getPrivateKeyAsHex(keychain2),
                "0xd49b10a178d974ab1e7cb47bed912697a96ad8ee6c89e1b38130512dc7353ca6"
            );
            strictEqual(
                new HandlerBtc().getReceiveAddr(keychain1),
                "1F6ShUUd63cainj6DgZfBk7kChiNB4YEwR"
            );
            strictEqual(
                new HandlerBtc().getPrivateKey(keychain1).toWIF(),
                "KyRCDYv8s77DnERaPB7itom4BxjgrexTwekDtfPdkgSq2vu985f4"
            );
            strictEqual(
                new HandlerBtc().getReceiveAddr(keychain2),
                "16AMAxJSEg6Yku6VbYbvnKMFZBJjg8o9P6"
            );
            strictEqual(
                new HandlerBtc().getPrivateKey(keychain2).toWIF(),
                "L5Xzv1TZPiyBbhhpWhZe8Vurctm4hPB9tBBDm6L9cazWYF4zFwYi"
            );
            strictEqual(
                new HandlerDoge().getReceiveAddr(keychain1),
                "DRaf1GhBpPhdd6AsjzvEGUCGM5zWoWnXUY"
            );
            strictEqual(
                new HandlerDoge().getPrivateKey(keychain1).toWIF(),
                "QQ9gZs2WA8eGKcQXWdSSey3ePuGvvwhYuoFwDqMqqKT1H7roKTi4"
            );
            strictEqual(
                new HandlerDoge().getReceiveAddr(keychain2),
                "D8zwUFcTWEDgn98Zbqa4x62DUWimFDnZS8"
            );
            strictEqual(
                new HandlerDoge().getPrivateKey(keychain2).toWIF(),
                "QQHHbWbzSPQgpKWcFhyZmLwH9hsjnvQyRkvyyCJkY9ocZmjq9Kmq"
            );
            strictEqual(
                new HandlerLtc().getReceiveAddr(keychain1),
                "LgEzcUX2oEXscjLQyZS11Yy4xhLsvV2zNr"
            );
            strictEqual(
                new HandlerLtc().getPrivateKey(keychain1).toWIF(),
                "T5Vq287xCvA6a8e6tqDizRtRMPFw6aNPMgNuvrLzAaRfzh3rdbqK"
            );
            strictEqual(
                new HandlerLtc().getReceiveAddr(keychain2),
                "LeDrRQ8EeJ789pT16xg6JzQgQU1FKJEmnN"
            );
            strictEqual(
                new HandlerLtc().getPrivateKey(keychain2).toWIF(),
                "T7fP1ZJMMMtMjRh1FjULkiiXzYPC6LDHb8uhqKeSs1tVJPhkazXS"
            );
        });
    });
});
