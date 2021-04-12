"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
var BigNum_1 = require("../src/BigNum");
describe('Core Test', function () {
    describe('BigNum', function () {
        it('additions', function () {
            var big = new BigNum_1.BigNum("123456789123456789");
            big = big.add(new BigNum_1.BigNum("1"));
            assert_1.strictEqual(big.toString(), "123456789123456790");
            big = big.add(new BigNum_1.BigNum("1234567890123"));
            assert_1.strictEqual(big.toString(), "123458023691346913");
        });
        it('multiplications', function () {
            var big = new BigNum_1.BigNum("123458023691346913");
            big = big.mul(new BigNum_1.BigNum("123"));
            assert_1.strictEqual(big.toString(), "15185336914035670299");
            big = big.mul(new BigNum_1.BigNum("456782342426542456"));
            assert_1.strictEqual(big.toString(), "6936393766129457053217295938941714344");
        });
        it('float conversion', function () {
            var big = new BigNum_1.BigNum("1234580236913469131234");
            var float = big.toFloat(18);
            assert_1.strictEqual(float > 1234.58023691346, true);
            assert_1.strictEqual(float < 1234.58023691347, true);
            var big2 = BigNum_1.BigNum.fromFloat(float, 18);
            assert_1.strictEqual(big2.toString().substr(0, 15), "123458023691346");
            assert_1.strictEqual(BigNum_1.BigNum.fromFloat(1, 10).toString(), "10000000000");
            assert_1.strictEqual(BigNum_1.BigNum.fromFloat(1 / 3, 10).toString(), "3333333333");
        });
    });
});
//# sourceMappingURL=core.js.map