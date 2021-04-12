"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BN = require("bn.js");
var Wallet = (function () {
    function Wallet(handler, keychain) {
        this.portfolio = [];
        this.handler = handler;
        this.keychain = keychain;
    }
    Wallet.prototype.getBalance = function () {
        return new BN(0);
    };
    return Wallet;
}());
exports.Wallet = Wallet;
//# sourceMappingURL=Wallet.js.map