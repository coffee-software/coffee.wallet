'use strict'

var BasePriceProvider = {
  unit: null,
  prices: {},

  setUnit: function(unit) {
    this.unit = unit;
    this.prices = JSON.parse(Settings.get('cache_' + this.name + '_prices_' + this.unit, "{}"));
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
    if (code in this.prices) {
      return formatMoney(amount * this.getPrice(code), this.getUnit());
    } else {
      return '? ' + this.getUnit();
    }
  }

}

var CoinMarketCapProvider = ExtendObject(BasePriceProvider, {

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

  updatePrices: function(callback) {
    var xhr = new XMLHttpRequest();
    var that = this;
    xhr.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?convert=' + this.unit + '&limit=1500');
    xhr.onreadystatechange = function() {
  	    if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var list = JSON.parse(this.responseText);
            for (var i in list) {
              that.prices[list[i]['symbol']]=parseFloat(list[i]['price_' + that.unit.toLowerCase()]);
            }
            Settings.set('cache_' + that.name + '_prices_' + that.unit, JSON.stringify(that.prices));
            callback();
          } else {
            app.alertError('failed to update prices');
            app.setNoNetError();
            callback();
          }
        }
    };
    xhr.send();

  }
});

var CoinPaprikaProvider = ExtendObject(BasePriceProvider, {

    name: "coinpaprika.com",

    availableUnits: [
      "USD", "BTC"
    ],
    defaultUnit: "USD",

    updatePrices: function(callback) {
      var xhr = new XMLHttpRequest();
      var that = this;
      xhr.open('GET', 'https://api.coinpaprika.com/v1/ticker');
      xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              var list = JSON.parse(this.responseText);
              for (var i in list) {
                that.prices[list[i]['symbol']]=parseFloat(list[i]['price_' + that.unit.toLowerCase()]);
              }
              Settings.set('cache_' + that.name + '_prices_' + that.unit, JSON.stringify(that.prices));
              callback();
            } else {
              app.alertError('failed to update prices');
              app.setNoNetError();
              callback();
            }
          }
      };
      xhr.send();
    }
});


var allPriceProviders = [CoinMarketCapProvider, CoinPaprikaProvider];
