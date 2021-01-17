'use strict'

var exchange = {

  key: null,

  name: null,

  url: null,

  testNet: false,

  shortDescription: "<strong>warning:</strong> this is handled by external provider. You will send your coins to a third party trusting you will get exchanged coins back after few minutes. Please refer to provider website for more details:",

  getCurrencies : function(callback) {
    callback({});
  },

  getMinAmount : function(from, to, callback) {
    callback(0);
  },

  estimateExchangeAmount : function(from, to, amount, callback) {
    callback(0);
  },

  createTransaction : function(from, to, amount, returnTo, callback) {
    callback({});
  }

}
