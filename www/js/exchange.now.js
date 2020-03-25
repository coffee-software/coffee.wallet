"use strict"
function _formatParams(params) {
 return (
   "?" +
   Object.keys(params)
     .map(function(key) {
       return key + "=" + encodeURIComponent(params[key])
     })
     .join("&")
 )
}

var exchangeNow = ExtendObject(exchange, {
  key: "now",

  name: "ChangeNow",

  description: "...",

  url: "changenow.io",

  logo: null,

  _callPostApi: function(message, callback) {
   var post = JSON.stringify(message.params)
   var xhr = new XMLHttpRequest()
   xhr.open("POST", "https://changenow.io/api/v1/" + message.method, true)
   xhr.setRequestHeader("Content-Type", "application/json")
   xhr.responseType = "json"
   xhr.onload = function() {
     if (xhr.status === 200 && !("error" in xhr.response)) {
       callback(xhr.response)
     } else {
       app.alertError(
         "error" in xhr.response
           ? xhr.response.error.message
           : "unknown error",
         null,
         xhr.response
       )
     }
   }
   xhr.send(post)
  },

  _callGetApi: function(message, callback) {
   var xhr = new XMLHttpRequest()
   xhr.open(
     "GET",
     "https://changenow.io/api/v1/" +
       message.method +
       _formatParams(message.params),
     true
   )
   xhr.setRequestHeader("Content-Type", "application/json")
   xhr.responseType = "json"
   xhr.onload = function() {
     if (xhr.status === 200 && !("error" in xhr.response)) {
       callback(xhr.response)
     } else {
       app.alertError(
         "error" in xhr.response
           ? xhr.response.error.message
           : "unknown error",
         null,
         xhr.response
       )
     }
   }
   xhr.send()
  },

  getCurrencies: function(callback) {
   this._callGetApi(
     {
       method: "currencies",
       params: {
         active: true,
         fixedRate: true,
       },
     },
     function(data) {
       callback(data.map(elem => elem.ticker))
     }
   )
  },

  getMinAmount: function(from, to, callback) {
   this._callGetApi(
     {
       method:
         "min-amount" +
         "/" +
         from.toLowerCase() +
         "_" +
         to.toLowerCase(),
       params: {},
     },
     function(data) {
       callback(data.minAmount)
     }
   )
  },

  estimateExchangeAmount: function(from, to, amount, callback) {
   this._callGetApi(
     {
       method:
         "exchange-amount" +
         "/" +
         amount +
         "/" +
         from.toLowerCase() +
         "_" +
         to.toLowerCase(),
       params: {
         api_key: config.now.apiKey,
       },
     },
     function(data) {
       callback(data.estimatedAmount)
     }
   )
  },

  createTransaction: function(from, to, amount, returnTo, callback) {
   this._callPostApi(
     {
       method: "transactions" + "/" + config.now.apiKey,
       params: {
         from: from.toLowerCase(),
         to: to.toLowerCase(),
         address: returnTo,
         amount: amount,
       },
     },
     callback
   )
  },
})
