'use strict'

var exchangeChangelly = ExtendObject(exchange, {

  key: "changelly",

  name: "Changelly",

  url: "changelly.com",

  _callApi : function(message, callback) {
    var post = JSON.stringify(message);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.changelly.com', true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("api-key", config.changelly.apiKey);
    xhr.setRequestHeader("sign", btcjs.hmacSha512Sign(post, config.changelly.apiSecret));
    xhr.responseType = 'json';
    xhr.onload = function() {
      if (xhr.status === 200 && !('error' in xhr.response)) {
        callback(xhr.response.result);
      } else {
        app.alertError('error' in xhr.response ? xhr.response.error.message : 'unknown error', null, xhr.response);
      }
    };
    xhr.send(post);
  },

  getCurrencies : function(callback) {
    this._callApi({
      "jsonrpc": "2.0",
      "method": "getCurrencies",
      "params": {},
      "id": 1
    }, callback);
  },

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


});
