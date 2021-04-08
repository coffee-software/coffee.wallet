"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Balance = (function () {
    function Balance(amount, unconfirmed) {
        this.amount = amount;
        this.unconfirmed = unconfirmed;
    }
    Balance.prototype.total = function () {
        return this.amount.add(this.unconfirmed);
    };
    return Balance;
}());
exports.Balance = Balance;
//# sourceMappingURL=BaseCoinHandler.js.map