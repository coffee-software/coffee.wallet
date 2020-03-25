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

var CoinGeckoProvider = ExtendObject(BasePriceProvider, {

  name: "coingecko.com",

  //simple/supported_vs_currencies
  availableUnits: [
    "BTC", "ETH", "LTC", "BCH", "BNB", "EOS", "XRP",
    "XLM", "USD", "AED", "ARS", "AUD", "BDT", "BHD",
    "BMD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK",
    "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS",
    "INR", "JPY", "KRW", "KWD", "LKR", "MMK", "MXN",
    "MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB",
    "SAR", "SEK", "SGD", "THB", "TRY", "TWD", "UAH",
    "VEF", "VND", "ZAR", "XDR", "XAG", "XAU"
  ],
  defaultUnit: "USD",

  updatePrices: function(callback) {
    var xhr = new XMLHttpRequest();
    var that = this;
    var ids = Object.keys(app.wallets).map(function(key){ return app.wallets[key].handler.name; });

    xhr.open('GET', 'https://api.coingecko.com/api/v3/simple/price?ids=' + ids.join(',') + '&vs_currencies=' + this.unit);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var list = JSON.parse(this.responseText);
          for (var key in app.wallets) {
            if (app.wallets[key].handler.name in list) {
              that.prices[app.wallets[key].handler.code]=parseFloat(list[app.wallets[key].handler.name][that.unit.toLowerCase()]);
            }
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


var allPriceProviders = [CoinGeckoProvider, CoinPaprikaProvider, CoinMarketCapProvider];
