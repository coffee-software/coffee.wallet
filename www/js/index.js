

function formatMoney(value, unit, decimals){
  var d = decimals ? decimals : 2;
  return value.toFixed(d).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) && (a.length - i > d) ? '&nbsp;' + c : c;
  }) + '&nbsp;' + unit;
};


var activeWallet = null;

function createButton(icon, callback) {
  var button = document.createElement("a");
  var img = document.createElement("img");
  img.setAttribute('src', 'icons/' + icon + '.png');
  button.appendChild(img);
  button.onclick = callback;
  button.classList.add('button');
  var div = document.createElement("div");
  div.appendChild(button);
  return div;
}

function Wallet(handler, offlineWallets) {


  this.row = document.createElement("tr");
  var that = this;
  that.handler = handler;
  this.row.onclick = function() {
    if (activeWallet) {
      activeWallet.row.classList.remove('active');
    }
    that.row.classList.add('active');
    activeWallet = that;
  }

  var unitCell = document.createElement("td");

  unitCell.innerHTML = '<img class="coinIcon" src="coins/' + handler.name + '.png" alt="' + handler.code + '"/>';


  var onlineCell = document.createElement("td");
  onlineCell.classList.add('online');
  this.onlineAmount = document.createElement("div");
  this.onlineValue = document.createElement("div");

  onlineCell.appendChild(this.onlineValue).classList.add('value');
  onlineCell.appendChild(this.onlineAmount).classList.add('amount');

  if ('getLocalAddr' in handler) {

    var buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add('buttons');
    buttonsDiv.appendChild(createButton('up', function(){app.popupSendPayment(that);}));
    buttonsDiv.appendChild(createButton('down', function(){app.popupReceivePayment(that);}));
    onlineCell.appendChild(buttonsDiv);
  } else {
    onlineCell.classList.add('disabled');
  }



  var offlineCell = document.createElement("td");
  offlineCell.classList.add('offline');
  this.offlineAmount = document.createElement("div");
  this.offlineValue = document.createElement("div");
  offlineCell.appendChild(this.offlineValue).classList.add('value');
  offlineCell.appendChild(this.offlineAmount).classList.add('amount');

  var buttonsDiv2 = document.createElement("div");
  buttonsDiv2.classList.add('buttons');
  buttonsDiv2.appendChild(createButton('list', function(){}));
  buttonsDiv2.appendChild(createButton('refresh', function(){that.refreshOnline(); that.refreshOffline();}));
  offlineCell.appendChild(buttonsDiv2);

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
      for (var idx in this.offlineWallets) {
        if ('addr' in  this.offlineWallets[idx]) {
          handler.getBalance(this.offlineWallets[idx].addr, function(val){
            //console.log(val);
            that.totalOffline += val;
            that.offlineAmount.innerHTML = formatMoney(that.totalOffline, handler.code, 5);
            that.updateOfflineValue();
          });
        } else {
          that.totalOffline += this.offlineWallets[idx].amount;
        }
      }
      this.offlineAmount.innerHTML = formatMoney(this.totalOffline, handler.code, 5);
      this.updateOfflineValue();
  }

  this.refreshOffline();

  this.refreshOnline = function() {
    this.totalOnline = 0;
    this.onlineAmount.innerHTML = formatMoney(this.totalOnline, handler.code, 5);
    this.updateOnlineValue();

    if ('getLocalAddr' in handler) {
      handler.getBalance(handler.getLocalAddr(), function(val){
        that.totalOnline = val;
        that.onlineAmount.innerHTML = formatMoney(that.totalOnline, handler.code, 5);
        that.updateOnlineValue();
      });
    }

  }

  this.refreshOnline();

}

var app = {
    // Application Constructor
    initialize: function() {
        var that = this;
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.getElementById('overlay').onclick = function(event){
          if (that.menuOpened) {
            that.closeMenu();
          }
          if (that.popupOpened) {
            that.closePopup();
          }
        };
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

    menuOpened : false,
    popupOpened : false,

    toggleMenu: function() {
      if (this.menuOpened) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    },

    openMenu: function() {
      this.menuOpened = true;
      //this is calculated by js because of https://css-tricks.com/using-css-transitions-auto-dimensions/
      document.getElementById("menu").style.height = document.getElementById("menu").children[0].clientHeight + 'px';
      document.getElementById("overlay").classList.add('show');
      document.getElementById("container").classList.add('blur');
    },

    closeMenu: function() {
      this.menuOpened = false;
      document.getElementById("menu").style.height = '0';
      document.getElementById("overlay").classList.remove('show');
      document.getElementById("container").classList.remove('blur');

    },

    openPopup: function(id, title) {
      this.closeMenu();
      document.getElementById("container").classList.add('blur');
      document.getElementById("nav").classList.add('blur');

      document.getElementById("popup").classList.add('show');

      var children = document.getElementById('popupContent').childNodes;
      for (var c=0; c < children.length; c++) {
          if (children[c].nodeType != 3) {
            children[c].style.display = 'none';
          }
      }
      document.getElementById(id).style.display = 'block';
      document.getElementById('popupTitle').innerHTML = title;
    },

    closePopup: function() {
      document.getElementById("container").classList.remove('blur');
      document.getElementById("nav").classList.remove('blur');
      document.getElementById("popup").classList.remove('show');
    },

    popupHelp: function() {
        this.openPopup('helpPopup', 'Help');
    },

    popupSettings: function() {
        this.openPopup('settingsPopup', 'Settings');
    },

    scanQrCode: function() {
      cordova.plugins.barcodeScanner.scan(
         function (result) {
            document.getElementById('sendCoinAddr').value = result.text;
            // result.format + result.cancelled;
         },
         function (error) {
             app.alertMessage("Scanning failed: " + error, 'error');
         },
         {
             preferFrontCamera : true, // iOS and Android
             showFlipCameraButton : true, // iOS and Android
             showTorchButton : true, // iOS and Android
             torchOn: true, // Android, launch with the torch switched on (if available)
             prompt : "Place addr barcode inside the scan area", // Android
         }
      );
    },

    popupSendPayment: function(wallet) {
        this.openPopup('sendPaymentPopup', 'send ' + wallet.handler.code + ' <img class="coinIcon" src="coins/' + wallet.handler.name + '.png"/>');
        document.getElementById('sendCoinAddr').value = '';
        document.getElementById('sendCoinValue').value = '0';
        document.getElementById('sendCoinAmount').value = '0';
        document.getElementById('sendCoinName').innerHTML = wallet.handler.code;
        this.sendWallet = wallet;
    },

    sendCoinUpdateValue: function() {
      if (this.sendWallet.handler.code in this.prices) {
        var ratio = this.prices[this.sendWallet.handler.code];
        document.getElementById('sendCoinValue').value = document.getElementById('sendCoinAmount').value * ratio;
      }
    },
    sendCoinUpdateAmount: function() {
      if (this.sendWallet.handler.code in this.prices) {
        var ratio = this.prices[this.sendWallet.handler.code];
        document.getElementById('sendCoinAmount').value = document.getElementById('sendCoinValue').value / ratio;
      }
    },
    alertMessage: function(html, cssClass) {
      var msgDiv = document.createElement('div');
      if (cssClass) {
        msgDiv.classList.add(cssClass);
      }
      msgDiv.innerHTML = html;
      document.getElementById('messages').appendChild(msgDiv);
      setTimeout(function(){ document.getElementById('messages').removeChild(msgDiv); }, 2000);
    },
    sendPayment: function() {
      this.sendWallet.handler.sendAmountTo(
        document.getElementById('sendCoinAddr').value,
        parseFloat(document.getElementById('sendCoinAmount').value)
      );
      this.closePopup();
    },
    popupReceivePayment: function(wallet) {
        this.openPopup('receivePaymentPopup', 'receive ' + wallet.handler.code + ' <img class="coinIcon" src="coins/' + wallet.handler.name + '.png"/>');

        document.getElementById('receiveCoinName').innerHTML = '';
        document.getElementById('receiveCoinAddr').innerHTML = '';
        document.getElementById('receiveCoinQrcode').innerHTML = '';

        document.getElementById('receiveCoinName').innerHTML = wallet.handler.code;
        document.getElementById('receiveCoinAddr').innerHTML = wallet.handler.getLocalAddr();

        new QRCode(document.getElementById('receiveCoinQrcode'), wallet.handler.getLocalAddr());

    },

    onDeviceReady: function() {

        var btc = new Wallet(BtcHandler, [{amount:0.43}]);
        document.getElementById('walletsList').appendChild(btc.row);

        var bch = new Wallet(BchHandler, [{amount:0.68}]);
        document.getElementById('walletsList').appendChild(bch.row);

        var eth = new Wallet(EthHandler, [{addr:'0x87Fdb041d00597067Ed5F52dbA73d140130Ae787'}]);
        document.getElementById('walletsList').appendChild(eth.row);

        var pay = new Wallet(PayHandler, [{amount:230}]);
        document.getElementById('walletsList').appendChild(pay.row);

        var ltc = new Wallet(LtcHandler, [{amount:2.5}]);
        document.getElementById('walletsList').appendChild(ltc.row);

        var lsk = new Wallet(LskHandler, [{amount:66.57}]);
        document.getElementById('walletsList').appendChild(lsk.row);

        var nebl = new Wallet(NeblHandler, [{amount:37.99}]);
        document.getElementById('walletsList').appendChild(nebl.row);

        var part = new Wallet(PartHandler, [{amount:30.5}]);
        document.getElementById('walletsList').appendChild(part.row);


        this.wallets = [btc, bch, eth, pay, ltc, lsk, nebl, part];
        this.updateMarketCap();
    },

};

app.initialize();
