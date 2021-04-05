"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BN = require("bn.js");
var BigNum = (function () {
    function BigNum(value, base, decimals) {
        if (base === void 0) { base = 10; }
        if (decimals === void 0) { decimals = 0; }
        this.positive = true;
        this.decimals = 0;
        this._bn = new BN(value, base);
    }
    BigNum.prototype.add = function (other) {
        var ret = new BigNum("0");
        ret._bn = this._bn.add(other._bn);
        return ret;
    };
    BigNum.prototype.mul = function (other) {
        var ret = new BigNum("0");
        ret._bn = this._bn.mul(other._bn);
        return ret;
    };
    BigNum.prototype.div = function (other) {
        var ret = new BigNum("0");
        ret._bn = this._bn.div(other._bn);
        return ret;
    };
    BigNum.prototype.cmp = function (other) {
        return this._bn.cmp(other._bn);
    };
    BigNum.prototype.toString = function (base) {
        if (base === void 0) { base = 10; }
        return this._bn.toString(base);
    };
    return BigNum;
}());
exports.BigNum = BigNum;
//# sourceMappingURL=BigNum.js.map