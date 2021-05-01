import {BaseExchangeProvider} from "./BaseExchangeProvider";
import {Https} from "../Core/Https";
var createHmac = require('create-hmac');
import {Config} from "../Config";
import {isOnlineCoinHanlder} from "../AllCoinHandlers";
import {NewTransaction, NewTransactionWrapper, OnlineCoinHandler} from "../Handlers/BaseCoinHandler";
import {BigNum} from "../Core/BigNum";

class ChangellyTransactionWrapper extends NewTransactionWrapper {
    changellyTx : ChangellyTransactionResponse
    constructor(tx: NewTransaction, changellyTx : ChangellyTransactionResponse) {
        super(tx);
        this.changellyTx = changellyTx
    }

    getRightIcon(): string {
        return '<img class="coinIcon" src="img/exchanges/changelly.png"/>';
    }

    getSummary(): { [p: string]: string } {
        let ret = super.getSummary();

        ret['changelly id'] = this.changellyTx.id
        ret['kyc required'] = this.changellyTx.kycRequired ? "YES": "NO"
        //https://changelly.com/aml-kyc
        return ret;
    }
}

type ChangellyTransactionResponse = {
    id: string
    amountExpectedFrom: number
    amountExpectedTo: number
    amountTo: number
    status: string
    currencyFrom: string
    currencyTo: string
    payinAddress: string
    payoutAddress: string
    createdAt: string
    kycRequired: boolean
}

export class ChangellyProvider extends BaseExchangeProvider {

    key = "changelly"
    name = "Changelly"
    url = "changelly.com"
    shortDescription = "Exchange service provided by Changelly. Your transaction may trigger AML/KYC verification according to Changelly AML/KYC."

    private async callApi(method: string, params: any): Promise<any> {
        let fields = {
            "jsonrpc": "2.0",
            "method": method,
            "params": params,
            "id": 1
        }
        var post = JSON.stringify(fields);
        var sign = createHmac('sha512', Config.changelly.apiSecret).update(post).digest('hex');
        let extraHeaders= {
            "api-key": Config.changelly.apiKey,
            "sign": sign
        }
        let response = await Https.makeJsonRequest('api.changelly.com', '', post, extraHeaders)
        if ('error' in response) {
            throw "error " + response.error.code + ": " +response.error.message;
        }
        return response.result;
    }

    async getCurrencies() : Promise<string[]> {
        let list = await this.callApi("getCurrencies",{});
        let ret : string[] = [];
        for (let i=0; i<list.length; i++) {
            let code = list[i].toUpperCase();
            if (code in this.engine.wallets) {
                if (isOnlineCoinHanlder(this.engine.allCoinHandlers[code])) {
                    ret.push(code)
                }
            }
        }
        return ret;
    }

    async getMinAmount(from: string, to: string) : Promise<number> {
        return parseFloat(await this.callApi(
            "getMinAmount",
            {
                "from": from.toLowerCase(),
                "to": to.toLowerCase()
            }
        ));
    }

    async estimateExchangeAmount(from: string, to: string, amount: number) : Promise<number> {
        return parseFloat(await this.callApi(
            "getExchangeAmount",
            {
                "from": from.toLowerCase(),
                "to": to.toLowerCase(),
                "amount": amount
            }
        ));
    }

    async createTransaction(from: string, to: string, amount: number, returnTo: string) : Promise<NewTransaction> {

        let response = <ChangellyTransactionResponse>await this.callApi(
            "createTransaction",
            {
                "from": from.toLowerCase(),
                "to": to.toLowerCase(),
                "address": returnTo,
                "refundAddress": (this.engine.wallets[from].handler as OnlineCoinHandler).getReceiveAddr(this.engine.keychain),
                "extraId": null,
                "amount": amount
            }
        );

        let transaction = await (this.engine.allCoinHandlers[from] as OnlineCoinHandler).prepareTransaction(
            this.engine.keychain,
            response.payinAddress,
            BigNum.fromFloat(response.amountExpectedFrom, this.engine.allCoinHandlers[from].decimals)
        );

        return new ChangellyTransactionWrapper(transaction, response);
    }

    async getTransactions(from: string, returnTo: string) : Promise<any> {
        return await this.callApi(
            "getTransactions",
            {
                        "currency": from.toLowerCase(),
                        "address": returnTo,
                        //"extraId": null,
                        //"limit": 100,
                        //"offset" : 0
                      });
    }

    async getStatus(transactionId : string) : Promise<any> {
        return await this.callApi("getStatus",
            {
            "id": transactionId
        });
    }

}
