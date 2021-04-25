import {BaseExchangeProvider} from "./BaseExchangeProvider";
import {Https} from "../Core/Https";
var createHmac = require('create-hmac');
import {Config} from "../../src/Config";
import {isOnlineCoinHanlder} from "../AllCoinHandlers";

export class ChangellyProvider extends BaseExchangeProvider {

    key = "changelly"
    name = "Changelly"
    url = "changelly.com"

  /*_callApi : function(message, callback) {
    var post = JSON.stringify(message);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.changelly.com', true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("api-key", config.changelly.apiKey);
    xhr.setRequestHeader("sign", engine.hmacSha512Sign(post, config.changelly.apiSecret));
    xhr.responseType = 'json';
    xhr.onload = function() {
      if (xhr.status === 200 && !('error' in xhr.response)) {
        callback(xhr.response.result);
      } else {
        app.alertError('error' in xhr.response ? xhr.response.error.message : 'unknown error', null, xhr.response);
      }
    };
    xhr.send(post);
  },*/

    private callApi(method: string, params: any, callback: (data: any)=>void) {
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
        Https.makeJsonRequest('api.changelly.com', '', post, extraHeaders).then(function(response){
            callback(response.result);
        });
    }

    getCurrencies(callback : (currencies:string[])=>void) {
        this.callApi(
            "getCurrencies",
            {},
            this.prepareCurrencies.bind(this, callback)
        );
    }

    private prepareCurrencies(callback : (currencies:string[])=>void, list: string[]) {
        let ret : string[] = [];
        for (let i=0; i<list.length; i++) {
            let code = list[i].toUpperCase();
            if (code in this.engine.allCoinHandlers) {
                if (isOnlineCoinHanlder(this.engine.allCoinHandlers[code])) {
                    ret.push(code)
                }
            }
        }
        callback(ret);
    }

  /*

  getMinAmount : function(from, to, callback) {
    this._callApi({
      "jsonrpc": "2.0",
      "method": "getMinAmount",
      "params": {
        "from": from.toLowerCase(),
        "to": to.toLowerCase()
      },
      "id": 1
    }, callback);
  },

  estimateExchangeAmount : function(from, to, amount, callback) {
    this._callApi({
      "jsonrpc": "2.0",
      "method": "getExchangeAmount",
      "params": {
        "from": from.toLowerCase(),
        "to": to.toLowerCase(),
        "amount": amount
      },
      "id": 1
    }, callback);
  },

  createTransaction : function(from, to, amount, returnTo, callback) {
    this._callApi({
      "jsonrpc": "2.0",
      "method": "createTransaction",
      "params": {
        "from": from.toLowerCase(),
        "to": to.toLowerCase(),
        "address": returnTo,
        "extraId": null,
        "amount": amount
      },
      "id": 1
    }, callback);
  }
*/

  /*,
  getTransactions : function(to, returnTo, callback) {
    this._callApi({
      "jsonrpc": "2.0",
      "method": "getTransactions",
      "params": {
        "currency": 'btc',
        "address": '36xdvVWKjpyqYr32ERbbS9fZiapasm29F4',
        //"extraId": null,
        "limit": 100,
        "offset" : 0
      },
      "id": 1
    }, callback);
  },

  getStatus : function(transactionId, callback) {
    this._callApi({
      "jsonrpc": "2.0",
      "method": "getStatus",
      "params": {
        "id": transactionId
      },
      "id": 1
    }, callback);
  } */

}
