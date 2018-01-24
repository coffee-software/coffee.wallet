
var app = {
    // Application Constructor
    settings: Settings,

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
        //TODO read from config
        this.setPriceProvider(allPriceProviders[this.settings.get('priceProvider', 0)]);
        this.priceProvider.setUnit(this.settings.get('priceUnit', this.priceProvider.defaultUnit));


        this.priceProviderSelect = new Select(document.getElementById("priceProvider"));
        this.priceUnitSelect = new Select(document.getElementById("priceUnit"));
        this.priceProviderSelect.onChange(function(value){
          console.log(allPriceProviders, value);
          that.priceUnitSelect.setOptions(allPriceProviders[value].availableUnits, that.settings.get('priceUnit', that.priceProvider.defaultUnit));
        });
        this.priceProviderSelect.setOptions(allPriceProviders, this.settings.get('priceProvider', 0));
        this.tabWallets();
    },

    targetScroll: 0,

    scrollToTargetTimer: null,

    scrollToTarget : function(){
      if (this.targetScroll > document.scrollingElement.scrollLeft) {
        document.scrollingElement.scrollLeft = Math.ceil(
          document.scrollingElement.scrollLeft + ((this.targetScroll - document.scrollingElement.scrollLeft) / 3));
      } else {
        document.scrollingElement.scrollLeft = Math.floor(
          document.scrollingElement.scrollLeft - ((document.scrollingElement.scrollLeft - this.targetScroll) / 3));
      }
      //console.log(document.scrollingElement.scrollLeft);
      if (document.scrollingElement.scrollLeft != this.targetScroll) {
        this.scrollToTargetTimer = setTimeout(this.scrollToTarget.bind(this), 10);
      } else {
        var timer = null;
        document.body.onscroll = function(event){
          if(app.scrollToTargetTimer !== null) {
              clearTimeout(app.scrollToTargetTimer);
          }
          if (timer !== null) {
              clearTimeout(timer);
          }
          timer = setTimeout(function() {
                var width = document.scrollingElement.offsetWidth;
                if (document.scrollingElement.scrollLeft < width) {
                  app.tabWallets();
                } else if (document.scrollingElement.scrollLeft < 2 * width) {
                  app.tabHistory();
                } else {
                  app.tabExchange();
                }
          }, 50);
        };
      }
    },

    setTabActive: function(n) {
      for (var i = 0; i < document.getElementById('foot').children.length; i++) {
        if (i == n) {
          document.getElementById('foot').children[i].classList.add('active');
        } else {
          document.getElementById('foot').children[i].classList.remove('active');
        }
      }

    },
    tabWallets: function() {
      this.setTabActive(0);
      var width = document.scrollingElement.offsetWidth;
      document.body.onscroll = null;
      this.targetScroll = (width / 2);
      this.scrollToTargetTimer = setTimeout(this.scrollToTarget.bind(this), 10);

    },
    tabHistory: function() {
      this.setTabActive(1);
      var width = document.scrollingElement.offsetWidth;
      document.body.onscroll = null;
      this.targetScroll = (width / 2) + width;
      this.scrollToTargetTimer = setTimeout(this.scrollToTarget.bind(this), 10);
      this.reloadHistory();
    },
    tabExchange: function() {
      this.setTabActive(2);
      var width = document.scrollingElement.offsetWidth;
      document.body.onscroll = null;
      this.targetScroll = (width / 2) + (2 * width);
      this.scrollToTargetTimer = setTimeout(this.scrollToTarget.bind(this), 10);
    },
    reloadHistory: function() {
      Logger.getLogs(function(logs){
        document.getElementById('history').innerHTML = '';
        for (var i=0; i< logs.length; i++) {
          var li = document.createElement('li');
          li.classList.add(logs[i].severity);
          li.innerHTML = '<div class="ts">' + logs[i].ts + '</div><div>' + logs[i].message + '</div>';
          //logs[i].coin
          document.getElementById('history').appendChild(li);
        }
        //console.log(logs);
      });
    },

    priceProvider: null,
    setPriceProvider: function(provider) {
      this.priceProvider = provider;
    },

    updateMarketCap: function() {
      document.getElementById('refresh').classList.add('disabled');
      this.priceProvider.updatePrices(function(){
        var totalOnline = 0;
        var totalOffline = 0;
        for (var i in app.wallets) {
          totalOnline += app.wallets[i].updateOnlineValue();
          totalOffline += app.wallets[i].updateOfflineValue();
        }
        document.getElementById('grandTotal').innerHTML = formatMoney(totalOnline + totalOffline, app.priceProvider.getUnit());
        document.getElementById('totalOnline').innerHTML = formatMoney(totalOnline, app.priceProvider.getUnit());
        //plnTotal
        document.getElementById('refresh').classList.remove('disabled');
      });
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
      document.getElementById("foot").classList.add('blur');
    },

    closeMenu: function() {
      this.menuOpened = false;
      document.getElementById("menu").style.height = '0';
      document.getElementById("overlay").classList.remove('show');
      document.getElementById("container").classList.remove('blur');
      document.getElementById("foot").classList.remove('blur');
    },

    openPopup: function(id, title) {
      this.closeMenu();
      document.getElementById("container").classList.add('blur');
      document.getElementById("nav").classList.add('blur');
      document.getElementById("foot").classList.add('blur');

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
      document.getElementById("foot").classList.remove('blur');
      document.getElementById("popup").classList.remove('show');
    },

    popupHelp: function() {
        this.openPopup('helpPopup', 'Help');
    },

    popupPriceSettings: function() {
        this.openPopup('priceSettingsPopup', 'Price Settings');

        this.priceProviderSelect.setValue(this.settings.get('priceProvider', 0));
        this.priceUnitSelect.setValue(this.settings.get('priceUnit', this.priceProvider.defaultUnit));
    },
    savePriceSettings: function() {
        this.closePopup();

        this.settings.set('priceProvider', parseInt(this.priceProviderSelect.getValue()));
        this.setPriceProvider(allPriceProviders[this.settings.get('priceProvider')]);

        this.settings.set('priceUnit', this.priceUnitSelect.getValue());
        this.priceProvider.setUnit(this.settings.get('priceUnit'));

    },
    scanQrCode: function() {
      window.cordova.plugins.barcodeScanner.scan(
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
      document.getElementById('sendCoinValue').value =
        document.getElementById('sendCoinAmount').value * this.priceProvider.getPrice(this.sendWallet.handler.code);
    },

    sendCoinUpdateAmount: function() {
      document.getElementById('sendCoinAmount').value =
        document.getElementById('sendCoinValue').value / this.priceProvider.getPrice(this.sendWallet.handler.code);
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
    copyReceiveCoinAddrToClp: function() {
        window.cordova.plugins.clipboard.copy(document.getElementById('receiveCoinAddr').value);
    },
    popupReceivePayment: function(wallet) {
        this.openPopup('receivePaymentPopup', 'receive ' + wallet.handler.code + ' <img class="coinIcon" src="coins/' + wallet.handler.name + '.png"/>');

        document.getElementById('receiveCoinName').innerHTML = '';
        document.getElementById('receiveCoinAddr').value = '';
        document.getElementById('receiveCoinQrcode').innerHTML = '';

        document.getElementById('receiveCoinName').innerHTML = wallet.handler.code;
        document.getElementById('receiveCoinAddr').value = wallet.handler.getLocalAddr();

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
