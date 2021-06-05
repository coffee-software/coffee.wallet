"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = exports.PublicKey = exports.PrivateKey = exports.decrypt = exports.encrypt = void 0;
var keys_1 = require("./keys");
var utils_1 = require("./utils");
var UNCOMPRESSED_PUBLIC_KEY_SIZE = 65;
function encrypt(receiverRawPub, msg) {
    var ephemeralKey = new keys_1.PrivateKey();
    var receiverPubkey = receiverRawPub instanceof Buffer ?
        new keys_1.PublicKey(receiverRawPub) : keys_1.PublicKey.fromHex(receiverRawPub);
    var aesKey = ephemeralKey.encapsulate(receiverPubkey);
    var encrypted = utils_1.aesEncrypt(aesKey, msg);
    return Buffer.concat([ephemeralKey.publicKey.uncompressed, encrypted]);
}
exports.encrypt = encrypt;
function decrypt(receiverRawPrv, msg) {
    var receiverPrvkey = receiverRawPrv instanceof Buffer ?
        new keys_1.PrivateKey(receiverRawPrv) : keys_1.PrivateKey.fromHex(receiverRawPrv);
    var senderPubkey = new keys_1.PublicKey(msg.slice(0, UNCOMPRESSED_PUBLIC_KEY_SIZE));
    var encrypted = msg.slice(UNCOMPRESSED_PUBLIC_KEY_SIZE);
    var aesKey = senderPubkey.decapsulate(receiverPrvkey);
    return utils_1.aesDecrypt(aesKey, encrypted);
}
exports.decrypt = decrypt;
var keys_2 = require("./keys");
Object.defineProperty(exports, "PrivateKey", { enumerable: true, get: function () { return keys_2.PrivateKey; } });
Object.defineProperty(exports, "PublicKey", { enumerable: true, get: function () { return keys_2.PublicKey; } });
exports.utils = {
    aesDecrypt: utils_1.aesDecrypt, aesEncrypt: utils_1.aesEncrypt, decodeHex: utils_1.decodeHex, getValidSecret: utils_1.getValidSecret, remove0x: utils_1.remove0x,
};
