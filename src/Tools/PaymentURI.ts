import {Https} from "../Core/Https";

type PaymentURIArguments = {
    coin?: string, //'bitcoin'
    coinCode?: string, //'BTC'
    escrowPrivateKey?: string
    amount?: number
    amountExact?: number
    label?: string
    message?: string
    callback?: string
}

export class PaymentURI {

    address : string
    args: PaymentURIArguments

    constructor(address: string, args: PaymentURIArguments) {
        this.address = address
        this.args = args
    }

    static async fromString(text: string) : Promise<PaymentURI> {

        if (text.startsWith('coffee:')) {
            var parts = text.split('/');

            if (parts.length == 4 && parts[1] == '' && parts[0] == 'coffee:' && !parts[3].startsWith('?')) {
                return new PaymentURI(null, {
                    coinCode : parts[2],
                    escrowPrivateKey : parts[3]
                });
            } else if (parts.length == 4 && parts[1] == '' && parts[0] == 'coffee:') {
                text = parts[2] + parts[3];
            } else if (parts.length == 3 && parts[1] == '' && parts[0] == 'coffee:') {
                text = parts[2];
            } else {
                throw 'unknown url format: ' + text;
            }
        }

        //check if text is a plain address or transaction info:
        //https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki#Simpler syntax
        var a = text.split('?', 2);
        var argsStr = (a.length > 1) ? a[1] : '';
        var addr = a[0];

        var args : PaymentURIArguments = {};

        var b = addr.split(':', 2);
        if (b.length >1) {
            args.coin = b[0];
            addr = b[1];
        }
        let bip72url : string = null;
        argsStr.split('&').forEach(function(e){
            var kp = e.split('=', 2);
            if (kp.length>1) {
                switch (kp[0]) {
                    case 'amount': args.amount = parseFloat(decodeURIComponent(kp[1])); break;
                    case 'label': args.label = decodeURIComponent(kp[1]); break;
                    case 'message': args.message = decodeURIComponent(kp[1]); break;
                    case 'callback': args.callback = decodeURIComponent(kp[1]); break; //coinrequest callback
                    case 'r': bip72url = decodeURIComponent(kp[1]); break;
                }
            }
        });
        if (bip72url) {
            //app.alertInfo('BIP72 address found. quering for payment details...');
            let url = new URL(bip72url)
            if (url.protocol != 'https:') {
                throw 'BIP72 payment should use https'
            }
            let paymentRequest = await Https.makeJsonRequest(url.host, url.pathname, undefined, {
                'Accept': 'application/payment-request'
                //'Accept': 'application/bitcoin-paymentrequest'
            });

            //console.log(paymentRequest);
            var coin = 'unknown';
            if (paymentRequest.currency == 'BTC' && paymentRequest.network == 'main') coin = 'bitcoin';
            if (paymentRequest.currency == 'BTC' && paymentRequest.network == 'test') coin = 'test-bitcoin';
            if (paymentRequest.currency == 'BCH' && paymentRequest.network == 'main') coin = 'bitcoin-cash';
            if (paymentRequest.currency == 'BCH' && paymentRequest.network == 'test') coin = 'test-bitcoin-cash';

            if (paymentRequest.outputs.length != 1) {
                throw new Error('payment requests with multiple outputs are not supported. sorry.');
            }
            return new PaymentURI(
                paymentRequest.outputs[0].address,
                {
                    'coin': coin,
                    'amountExact': paymentRequest.outputs[0].amount,
                    'amount': paymentRequest.outputs[0].amount / 100000000
                }
            );
        } else {
            return new PaymentURI(addr, args);
        }
    }

}