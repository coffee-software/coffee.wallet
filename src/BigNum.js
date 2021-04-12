"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BN = require("bn.js");
var BigNum = (function () {
    function BigNum(value, base, decimals) {
        if (base === void 0) { base = 10; }
        if (decimals === void 0) { decimals = 0; }
        this.positive = true;
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
    BigNum.fromFloat = function (value, decimals) {
        var s = value.toString();
        var i = s.indexOf('.');
        if (i > -1) {
            decimals = decimals - (s.length - i - 1);
            s = s.slice(0, i) + s.slice(i + 1);
        }
        if (decimals >= 0) {
            s = s + "0".repeat(decimals);
        }
        else {
            s = s.substr(0, s.length + decimals);
        }
        return new BigNum(s);
    };
    BigNum.prototype.toFloat = function (decimals) {
        var s = this._bn.toString();
        while (s.length <= decimals) {
            s = "0" + s;
        }
        return parseFloat(s.slice(0, s.length - decimals) + "." + s.slice(s.length - decimals));
    };
    BigNum.prototype.toString = function (base) {
        if (base === void 0) { base = 10; }
        return this._bn.toString(base);
    };
    return BigNum;
}());
exports.BigNum = BigNum;
//# sourceMappingURL=BigNum.js.map