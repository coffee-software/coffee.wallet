import {strictEqual} from "assert";
import {PaymentURI} from "../src/Tools/PaymentURI";

describe('Payment URIs', function() {
    describe('Parsing', async function () {
        it('parses BIP21 transaction', async function () {
            let req = await PaymentURI.fromString('bitcoin:1234?amount=0.1');
            strictEqual(req.address,'1234')
            strictEqual(req.args.coin, 'bitcoin')
            strictEqual(req.args.amount, 0.1)
        });

        it('parses BIP72 transaction', async function () {
            //TODO
            //let req = await PaymentURI.fromString('bitcoin:muyVr1fw9q7EPUVNnbmgA4XpnZCEQYYVYg?amount=0.000185&r=https%3A%2F%2Ftest.bitpay.com%2Fi%2FVUT1RDtXMX3r4jBAYRQ3iU');
        });
    });
});
