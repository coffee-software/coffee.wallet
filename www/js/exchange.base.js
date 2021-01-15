'use strict'

var exchange = {

  key: null,

  name: null,

  url: null,

  testNet: false,

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
