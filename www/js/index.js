
var BtcHandler = {
    code: "BTC"
}

var EthHandler = {
    code: "ETH",
    getBalance: function(addr){
        web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/O7OJXaza9lovtjycsQWS"));
        return parseFloat(web3.fromWei(web3.eth.getBalance(addr).toNumber(), 'ether'));
    }
}

function formatMoney(value, unit){
  return value.toFixed(2).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) ? '&nbsp;' + c : c;
  }) + '&nbsp;' + unit;
};

function Wallet(handler, offlineWallets) {

  this.row = document.createElement("tr");

  var unitCell = document.createElement("td");
  unitCell.appendChild(document.createTextNode(handler.code));

  var onlineCell = document.createElement("td");
  this.onlineAmount = document.createElement("div");
  this.onlineValue = document.createElement("div");
  onlineCell.appendChild(this.onlineValue).classList.add('value');
  onlineCell.appendChild(this.onlineAmount).classList.add('amount');


  var offlineCell = document.createElement("td");

  this.offlineAmount = document.createElement("div");
  this.offlineValue = document.createElement("div");
  offlineCell.appendChild(this.offlineValue).classList.add('value');
  offlineCell.appendChild(this.offlineAmount).classList.add('amount');

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
    if (handler.code in app.prices ) {
      value = this.totalOnline * app.prices[handler.code];
    }
    this.onlineValue.innerHTML = formatMoney(value, 'PLN');
    return value;
  }


  this.refreshOffline = function() {
      this.totalOffline = 0;
      for (idx in this.offlineWallets) {
        this.totalOffline += handler.getBalance(this.offlineWallets[idx]);
      }
      this.offlineAmount.innerHTML = formatMoney(this.totalOffline, handler.code);
      this.updateOfflineValue();
      return this.totalOffline;
  }

  this.refreshOffline();

  this.refreshOnline = function() {
    this.totalOnline = 0.05 + (Math.random() / 10);
    this.onlineAmount.innerHTML = formatMoney(this.totalOnline, handler.code);
    this.updateOnlineValue();
    return this.totalOnline;
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
      document.getElementById('refresh').innerHTML = '...';
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?convert=PLN&limit=10');
      xhr.onload = function() {
          if (xhr.status === 200) {
              var list = JSON.parse(this.responseText);
              for (i in list) {
                app.prices[list[i]['symbol']]=parseFloat(list[i]['price_pln']);
              }
              var totalOnline = 0;
              var totalOffline = 0;
              for (i in app.wallets) {
                totalOnline += app.wallets[i].updateOnlineValue();
                totalOffline += app.wallets[i].updateOfflineValue();
              }
              document.getElementById('grandTotal').innerHTML = formatMoney(totalOnline + totalOffline, 'PLN');
              document.getElementById('totalOnline').innerHTML = formatMoney(totalOnline, 'PLN');
              //plnTotal
              document.getElementById('refresh').innerHTML = 'refresh';
          }
      };
      xhr.send();

    },

    onDeviceReady: function() {

        var btc = new Wallet(BtcHandler, []);
        document.getElementById('walletsList').appendChild(btc.row);

        var eth = new Wallet(EthHandler, ['0x87Fdb041d00597067Ed5F52dbA73d140130Ae787']);
        document.getElementById('walletsList').appendChild(eth.row);

        this.wallets = [btc, eth];
        this.updateMarketCap();
    },

};

app.initialize();
