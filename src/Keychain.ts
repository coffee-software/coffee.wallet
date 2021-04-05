import {generateMnemonic, mnemonicToSeedSync, validateMnemonic} from "bip39";
import * as bip32 from "bip32";
import {Network} from "bitcoinjs-lib";

export class Keychain {
    mnemonic: string;

    constructor(mnemonic: string) {
        this.mnemonic = mnemonic;
    }

    getSeedHex() :string {
        return mnemonicToSeedSync(this.mnemonic).toString('hex');
    }

    static newMnemonic() :string {
        return generateMnemonic();
    }

    static validateMnemonic(mnemonic:string) : boolean {
        if (mnemonic.split(' ').length != 12) {
            return false;
        }
        return validateMnemonic(mnemonic)
    }

    derivePath(path:string, network?:Network) : string {
        return bip32.fromSeed(Buffer.from(this.getSeedHex(), 'hex'), network).derivePath(path).toWIF();
    }

}