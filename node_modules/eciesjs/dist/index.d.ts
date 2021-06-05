/// <reference types="node" />
import { aesDecrypt, aesEncrypt, decodeHex, getValidSecret, remove0x } from "./utils";
export declare function encrypt(receiverRawPub: string | Buffer, msg: Buffer): Buffer;
export declare function decrypt(receiverRawPrv: string | Buffer, msg: Buffer): Buffer;
export { PrivateKey, PublicKey } from "./keys";
export declare const utils: {
    aesDecrypt: typeof aesDecrypt;
    aesEncrypt: typeof aesEncrypt;
    decodeHex: typeof decodeHex;
    getValidSecret: typeof getValidSecret;
    remove0x: typeof remove0x;
};
