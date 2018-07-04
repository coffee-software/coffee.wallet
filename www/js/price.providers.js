'use strict'

var CoinMarketCapProvider = {

  name: "coinmarketcap.com",

  availableUnits: [
    "AUD", "BTC", "BRL", "CAD", "CHF", "CLP",
    "CNY", "CZK", "DKK", "EUR", "ETH", "GBP",
    "HKD", "HUF", "IDR", "ILS", "INR", "JPY",
    "KRW", "MXN", "MYR", "NOK", "NZD", "PHP",
    "PKR", "PLN", "RUB", "SEK", "SGD", "THB",
    "TRY", "TWD", "USD", "ZAR"
  ],
  defaultUnit: "USD",
  unit: null,
  prices: {},

  setUnit: function(unit) {
    this.prices = {};
    this.unit = unit;
  },

  getUnit: function() {
    return this.unit;
  },

  getPrice: function(unit) {
    if (unit in this.prices) {
      return this.prices[unit];
    }
    return 0;
  },

  convert: function(amount, code) {
    return formatMoney(amount * this.getPrice(code), this.getUnit());
  },

  updatePrices: function(callback) {
    var xhr = new XMLHttpRequest();
    var that = this;
    xhr.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?convert=' + this.unit + '&limit=1500');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var list = JSON.parse(this.responseText);
            for (var i in list) {
              that.prices[list[i]['symbol']]=parseFloat(list[i]['price_' + that.unit.toLowerCase()]);
            }
            callback();
        }
    };
    xhr.send();

  }
}

var CoinPaprikaProvider = {

    name: "coinpaprika.com",

    availableUnits: [
      "USD", "BTC"
    ],
    defaultUnit: "USD",
    unit: null,
    prices: {},

    setUnit: function(unit) {
      this.prices = {};
      this.unit = unit;
    },

    getUnit: function() {
      return this.unit;
    },

    getPrice: function(unit) {
      if (unit in this.prices) {
        return this.prices[unit];
      }
      return 0;
    },

    convert: function(amount, code) {
      return formatMoney(amount * this.getPrice(code), this.getUnit());
    },

    updatePrices: function(callback) {
      var xhr = new XMLHttpRequest();
      var that = this;
      xhr.open('GET', 'https://api.coinpaprika.com/v1/ticker');
      xhr.onload = function() {
          if (xhr.status === 200) {
              var list = JSON.parse(this.responseText);
              for (var i in list) {
                that.prices[list[i]['symbol']]=parseFloat(list[i]['price_' + that.unit.toLowerCase()]);
              }
              callback();
          }
      };
      xhr.send();

    }
}


var allPriceProviders = [CoinMarketCapProvider, CoinPaprikaProvider];
