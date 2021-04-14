
export abstract class BaseExchangeProvider {

  key: string
  name: string
  url: string
  testNet: boolean = false

  shortDescription: string = "<strong>warning:</strong> this is handled by external provider. You will send your coins to a third party trusting you will get exchanged coins back after few minutes. Please refer to provider website for more details:"

  getCurrencies(callback : (currencies:string[])=>void) {
    callback([]);
  }

  getMinAmount(from: string, to: string, callback: (min:number)=>void) {
    callback(0);
  }

  estimateExchangeAmount(from: string, to: string, amount: number, callback: (min:number)=>void) {
    callback(0);
  }

  createTransaction(from: string, to: string, amount: number, returnTo: string, callback: (data:any)=>void) {
    callback({});
  }

  getFeeDisplay(from: string, fee: string) {
    return "TODO" //app.wallets[from].handler.getFeeDisplay(fee);
  }

  getFeeEstimate(from: string, callback: (fee:number)=>void) {
    callback(0);
    /*app.wallets[from].handler.getFees(function(fees){
        callback(fees[Math.floor((fees.length - 1) / 2)]);
    });*/
  }
}
