import { strictEqual, notStrictEqual } from "assert";
import {BigNum} from "../src/BigNum";

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
    });
});
