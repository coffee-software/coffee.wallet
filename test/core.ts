import { strictEqual, notStrictEqual } from "assert";
import {BigNum} from "../src/Core/BigNum";

describe('Core Test', function() {
    describe('BigNum', function () {
        it('additions', function () {
            let big = new BigNum("123456789123456789");
            big = big.add(new BigNum("1"));
            strictEqual(
                big.toString(),
                "123456789123456790"
            );
            big = big.add(new BigNum("1234567890123"));
            strictEqual(
                big.toString(),
                "123458023691346913"
            );
        });
        it('multiplications', function () {
            let big = new BigNum("123458023691346913");
            big = big.mul(new BigNum("123"));
            strictEqual(
                big.toString(),
                "15185336914035670299"
            );
            big = big.mul(new BigNum("456782342426542456"));
            strictEqual(
                big.toString(),
                "6936393766129457053217295938941714344"
            );
        });
        it('float conversion', function () {
            let big = new BigNum("1234580236913469131234");
            let float = big.toFloat(18);
            strictEqual(
                float > 1234.58023691346,
                true
            );
            strictEqual(
                float < 1234.58023691347,
                true
            );
            let big2 = BigNum.fromFloat(float, 18);
            strictEqual(
                big2.toString().substr(0, 15),
                "123458023691346"
            );
            strictEqual(
                BigNum.fromFloat(1, 10).toString(),
                "10000000000"
            );
            strictEqual(
                BigNum.fromFloat(1/3, 10).toString(),
                "3333333333"
            );
        });

    });
});
