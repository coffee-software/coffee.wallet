import {decrypt, encrypt} from "eciesjs";
import {ECPair} from "bitcoinjs-lib";
import {Keychain} from "../Engine";
const createHash = require('create-hash')

export interface EncryptedData {
    key: string,
    data: string,
    sign: string
}

export class Encryptor {

    keyPath = "m/10'/0'/0'/0/0";

    encryptData(keychain: Keychain, data: any): EncryptedData {
        let encryptionKey = keychain.derivePath(this.keyPath);
        let string = JSON.stringify(data);
        let buf = Buffer.from(string)
        let encrypted = encrypt(encryptionKey.publicKey.toString('hex'), buf);
        let hash = createHash('sha256').update(encrypted).digest()
        hash = createHash('sha256').update(hash.toString('hex')).digest();
        let ec = ECPair.fromPrivateKey(encryptionKey.privateKey);
        let signature = ec.sign(hash)
        return {
            key: encryptionKey.publicKey.toString('hex'),
            data: encrypted.toString('hex'),
            sign: signature.toString('hex')
        };
    }

    decryptData(keychain: Keychain, encrypted: EncryptedData): any {
        let data = Buffer.from(encrypted.data, 'hex');
        let key = Buffer.from(encrypted.key, 'hex');
        let sign = Buffer.from(encrypted.sign, 'hex');
        let encryptionKey = keychain.derivePath(this.keyPath);
        if (key.toString('hex') != encryptionKey.publicKey.toString('hex')) {
            throw new Error('invalid data key');
        }
        let ec = ECPair.fromPrivateKey(encryptionKey.privateKey);
        let hash = createHash('sha256').update(data).digest()
        hash = createHash('sha256').update(hash.toString('hex')).digest()
        if (!ec.verify(hash, sign)) {
            throw new Error('invalid data signature');
        }
        let decrypted = decrypt(encryptionKey.privateKey.toString('hex'), data).toString();
        return JSON.parse(decrypted);
    }
}