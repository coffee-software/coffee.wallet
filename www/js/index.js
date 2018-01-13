

function formatMoney(value, unit){
  return value.toFixed(2).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) ? '&nbsp;' + c : c;
  }) + '&nbsp;' + unit;
};


var activeWallet = null;

function createButton(icon, callback) {
  var button = document.createElement("a");
  var img = document.createElement("img");
  img.setAttribute('src', 'icons/if_' + icon + '.png');
  button.appendChild(img);
  button.onclick = callback;
  button.classList.add('button');
  return button;
}

function Wallet(handler, offlineWallets) {


  this.row = document.createElement("tr");
  var that = this;
  this.row.onclick = function() {
    if (activeWallet) {
      activeWallet.row.classList.remove('active');
    }
    that.row.classList.add('active');
    activeWallet = that;
  }

  var unitCell = document.createElement("td");
  unitCell.innerHTML = '<img src="coins/' + handler.name + '.png" alt="' + handler.code + '"/>';

  var onlineCell = document.createElement("td");
  onlineCell.classList.add('online');
  this.onlineAmount = document.createElement("div");
  this.onlineValue = document.createElement("div");

  onlineCell.appendChild(this.onlineValue).classList.add('value');
  onlineCell.appendChild(this.onlineAmount).classList.add('amount');

  if ('getLocalAddr' in handler) {
    onlineCell.appendChild(createButton('arrow_up', function(){}));
    onlineCell.appendChild(createButton('arrow_down', function(){}));
    onlineCell.appendChild(createButton('history', function(){}));
  } else {
    onlineCell.classList.add('disabled');
  }



  var offlineCell = document.createElement("td");
  offlineCell.classList.add('offline');
  this.offlineAmount = document.createElement("div");
  this.offlineValue = document.createElement("div");
  offlineCell.appendChild(this.offlineValue).classList.add('value');
  offlineCell.appendChild(this.offlineAmount).classList.add('amount');

  offlineCell.appendChild(createButton('pencil', function(){}));

  this.row.appendChild(unitCell);
  this.row.appendChild(onlineCell);
  this.row.appendChild(offlineCell);

  this.offlineWallets = offlineWallets;

  this.updateOfflineValue = function() {
    var value = 0;
    if (handler.code in app.prices ) {
      value = this.totalOffline * app.prices[handler.code];
    }
    this.offlineValue.innerHTML = formatMoney(value, 'PLN');
    return value;
  }

  this.updateOnlineValue = function() {
    var value = 0;
    console.log(handler.code);
    if (handler.code in app.prices ) {
      console.log(this.totalOnline);
      value = this.totalOnline * app.prices[handler.code];
    }
    this.onlineValue.innerHTML = formatMoney(value, 'PLN');
    return value;
  }


  this.refreshOffline = function() {
      this.totalOffline = 0;
      this.offlineAmount.innerHTML = formatMoney(this.totalOffline, handler.code);
      this.updateOfflineValue();

      for (var idx in this.offlineWallets) {
        handler.getBalance(this.offlineWallets[idx], function(val){
          console.log(val);
          that.totalOffline += val;
          that.offlineAmount.innerHTML = formatMoney(that.totalOffline, handler.code);
          that.updateOfflineValue();
        });
      }
  }

  this.refreshOffline();

  this.refreshOnline = function() {
    this.totalOnline = 0;
    this.onlineAmount.innerHTML = formatMoney(this.totalOnline, handler.code);
    this.updateOnlineValue();

    if ('getLocalAddr' in handler) {
      handler.getBalance(handler.getLocalAddr(), function(val){
        that.totalOnline = val;
        that.onlineAmount.innerHTML = formatMoney(that.totalOnline, handler.code);
        that.updateOnlineValue();
      });
    }

  }

  this.refreshOnline();

}

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    prices: {},

    updateMarketCap: function() {
      document.getElementById('refresh').classList.add('disabled');
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?convert=PLN&limit=200');
      xhr.onload = function() {
          if (xhr.status === 200) {
              var list = JSON.parse(this.responseText);
              for (var i in list) {
                app.prices[list[i]['symbol']]=parseFloat(list[i]['price_pln']);
              }
              var totalOnline = 0;
              var totalOffline = 0;
              for (var i in app.wallets) {
                console.log('TEST' + i);
                totalOnline += app.wallets[i].updateOnlineValue();
                totalOffline += app.wallets[i].updateOfflineValue();
              }
              document.getElementById('grandTotal').innerHTML = formatMoney(totalOnline + totalOffline, 'PLN');
              document.getElementById('totalOnline').innerHTML = formatMoney(totalOnline, 'PLN');
              //plnTotal
              document.getElementById('refresh').classList.remove('disabled');
          }
      };
      xhr.send();

    },
    closePopup: function() {
        document.getElementById('popup').style.height = '0';
        document.getElementById('popup').style.bottom = 'auto';
    },
    popupHelp: function() {
        this.currentPopup = document.getElementById('helpPopup');
        document.getElementById('popup').style.height = 'auto';
        document.getElementById('popup').style.bottom = '0';
    },
    onDeviceReady: function() {

        var btc = new Wallet(BtcHandler, []);
        document.getElementById('walletsList').appendChild(btc.row);

        var eth = new Wallet(EthHandler, ['0x87Fdb041d00597067Ed5F52dbA73d140130Ae787']);
        document.getElementById('walletsList').appendChild(eth.row);

        var pay = new Wallet(PayHandler, []);
        document.getElementById('walletsList').appendChild(pay.row);

        var ltc = new Wallet(LtcHandler, []);
        document.getElementById('walletsList').appendChild(ltc.row);

        this.wallets = [btc, eth, pay, ltc];
        this.updateMarketCap();
    },

};

app.initialize();
