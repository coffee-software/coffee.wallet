import {generateMnemonic, mnemonicToSeedSync, validateMnemonic} from "bip39";
import * as bip32 from "bip32";
import {Network} from "bitcoinjs-lib";

export class Keychain {
    mnemonic: string;
    seed: Buffer;

    constructor(mnemonic: string) {
        this.mnemonic = mnemonic;
    }

    getSeed() : Buffer {
        if (this.seed) {
            return this.seed;
        } else {
            return this.seed = mnemonicToSeedSync(this.mnemonic);
        }
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

    derivePath(path:string, network?:Network) : bip32.BIP32Interface {
        return bip32.fromSeed(this.getSeed(), network).derivePath(path);
    }

}