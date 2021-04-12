"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bip39_1 = require("bip39");
var bip32 = require("bip32");
var Keychain = (function () {
    function Keychain(mnemonic) {
        this.mnemonic = mnemonic;
    }
    Keychain.prototype.getSeed = function () {
        if (this.seed) {
            return this.seed;
        }
        else {
            return this.seed = bip39_1.mnemonicToSeedSync(this.mnemonic);
        }
    };
    Keychain.newMnemonic = function () {
        return bip39_1.generateMnemonic();
    };
    Keychain.validateMnemonic = function (mnemonic) {
        if (mnemonic.split(' ').length != 12) {
            return false;
        }
        return bip39_1.validateMnemonic(mnemonic);
    };
    Keychain.prototype.derivePath = function (path, network) {
        return bip32.fromSeed(this.getSeed(), network).derivePath(path);
    };
    return Keychain;
}());
exports.Keychain = Keychain;
//# sourceMappingURL=Keychain.js.map