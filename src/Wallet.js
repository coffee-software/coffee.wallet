"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BN = require("bn.js");
var Wallet = (function () {
    function Wallet(handler, keychain) {
        this.handler = handler;
        this.keychain = keychain;
    }
    Wallet.prototype.getBalance = function () {
        return new BN(0);
    };
    return Wallet;
}());
//# sourceMappingURL=Wallet.js.map