import {BaseExchangeProvider} from "./BaseExchangeProvider";
import {Balance, NewTransaction, NewTransactionWrapper, OnlineCoinHandler} from "../Handlers/BaseCoinHandler";
import {Config} from "../Config";
import {Https} from "../Core/Https";
import {isOnlineCoinHanlder} from "../AllCoinHandlers";
import {BigNum} from "../Core/BigNum";

class ChangeNowTransactionWrapper extends NewTransactionWrapper {

    changeNowTx : ChangeNowTransactionResponse
    changeNowEstimateResponse : ChangeNowEstimateResponse

    constructor(tx: NewTransaction, changeNowEstimateResponse : ChangeNowEstimateResponse, changeNowTx : ChangeNowTransactionResponse) {
        super(tx);
        this.changeNowEstimateResponse = changeNowEstimateResponse
        this.changeNowTx = changeNowTx
    }

    getRightIcon(): string {
        return '<img class="coinIcon" src="img/exchanges/now.png"/>';
    }

    getSummary(): { [p: string]: string|Balance } {
        let ret = super.getSummary();

        ret['changenow id'] = this.changeNowTx.id
        ret['estimated return'] = this.changeNowEstimateResponse.estimatedAmount.toString()
        ret['estimated speed'] = this.changeNowEstimateResponse.transactionSpeedForecast
        ret['warning'] = this.changeNowEstimateResponse.warningMessage

        return ret;
    }
}

type ChangeNowTransactionResponse = {
    id: string
    payinAddress: string
    payoutAddress: string
    fromCurrency: string
    toCurrency: string
    amount: number
    refundAddress: string
    refundExtraId: string
}
type ChangeNowEstimateResponse = {
    estimatedAmount: number
    transactionSpeedForecast: string
    warningMessage: string
}

export class ChangeNowProvider extends BaseExchangeProvider {

    key = "now"
    name = "ChangeNow"
    url = "changenow.io"

    private async callApi(method: string, params: any = undefined, body: any = undefined): Promise<any> {
        let ret = await Https.makeJsonRequest(
            'changenow.io',
            '/api/v1/' + method + (params ? '?' + Https.encodeQueryData(params) : ''),
            body
        );
        if (("error" in ret)) {
            throw new Error('API error:' + ret.message);
        }
        return ret;
    }

    async createTransaction(from: string, to: string, amount: number, returnTo: string): Promise<NewTransaction> {
        let response = await this.callApi(
            "transactions" + "/" + Config.now.apiKey,
            undefined,
            {
                from: from.toLowerCase(),
                to: to.toLowerCase(),
                address: returnTo,
                amount: amount,
                refundAddress: (this.engine.wallets[from].handler as OnlineCoinHandler).getReceiveAddr(this.engine.keychain),
            }
        );
        let estimate = await this.getEstimate(from, to, amount);
        console.log(response);
        console.log('creating TX');
        let transaction = await (this.engine.allCoinHandlers[from] as OnlineCoinHandler).prepareTransaction(
            this.engine.keychain,
            response.payinAddress,
            BigNum.fromFloat(response.amount, this.engine.allCoinHandlers[from].decimals)
        );
        console.log(transaction);
        return new ChangeNowTransactionWrapper(transaction, estimate, response);
    }

    private async getEstimate(from: string, to: string, amount: number): Promise<ChangeNowEstimateResponse> {
        return await this.callApi(
            "exchange-amount" + "/" + amount + "/" + from.toLowerCase() + "_" + to.toLowerCase(),
            {
                api_key: Config.now.apiKey,
            });
    }

    async estimateExchangeAmount(from: string, to: string, amount: number): Promise<number> {
        let response = await this.getEstimate(from, to, amount)
        return response.estimatedAmount;
    }

    async getCurrencies(): Promise<string[]> {
        let data = await this.callApi('currencies', {
            active: true,
            fixedRate: true,
        });
        let ret : string[] = [];
        for (let i in data) {
            let code = data[i].ticker.toUpperCase();
            if (code in this.engine.wallets) {
                if (isOnlineCoinHanlder(this.engine.allCoinHandlers[code])) {
                    ret.push(code)
                }
            }
        }
        return ret;
    }

    async getMinAmount(from: string, to: string): Promise<number> {
        let response = await this.callApi( "min-amount" + "/" + from.toLowerCase() + "_" + to.toLowerCase());
        return response.minAmount;
    }

}
