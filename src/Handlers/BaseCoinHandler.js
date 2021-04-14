"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Balance = (function () {
    function Balance(handler, amount, unconfirmed) {
        this.handler = handler;
        this.amount = amount;
        this.unconfirmed = unconfirmed;
    }
    Balance.prototype.total = function () {
        return this.amount.add(this.unconfirmed);
    };
    Balance.prototype.totalFloat = function () {
        return this.amount.add(this.unconfirmed).toFloat(this.handler.decimals);
    };
    Balance.prototype.equals = function (other) {
        return other.total().toString() === this.total().toString();
    };
    return Balance;
}());
exports.Balance = Balance;
//# sourceMappingURL=BaseCoinHandler.js.map