import * as BN from "bn.js";

/**
 * Wrapper for BN to easily replace implementation
 */
export class BigNum {

    positive: boolean = true;
    words: number[];
    decimals: number = 0;
    _bn: BN;

    constructor(value: string | number, base: number = 10, decimals: number = 0) {
        this._bn = new BN(value, base);
    }

    add(other : BigNum) : BigNum {
        var ret = new BigNum("0");
        ret._bn = this._bn.add(other._bn);
        return ret;
    }
    
    mul(other : BigNum) : BigNum {
        var ret = new BigNum("0");
        ret._bn = this._bn.mul(other._bn);
        return ret;
    }

    div(other : BigNum) : BigNum {
        var ret = new BigNum("0");
        ret._bn = this._bn.div(other._bn);
        return ret;
    }

    cmp(other : BigNum) : -1 | 0 | 1 {
        return this._bn.cmp(other._bn);
    }

    toString(base : number = 10) : string {
        return this._bn.toString(base);
    }
}