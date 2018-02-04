
var allCoinApis = {
  'BTC.TEST': BtcTestHandler,
  'BTC': BtcHandler,
  'BCH': BchHandler,
  'ETH': EthHandler,
  'ETH.TEST': EthTestHandler,
  'PAY': PayHandler,
  'LTC': LtcHandler,
  'LSK': LskHandler,
  'NEBL': NeblHandler,
  'PART': PartHandler,
  'XRP': XrpHandler
};

var app = {
    // Application Constructor
    settings: Settings,
    data: Data,
    wallets: {},
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
          //console.log(allPriceProviders, value);
          that.priceUnitSelect.setOptions(allPriceProviders[value].availableUnits, that.settings.get('priceUnit', that.priceProvider.defaultUnit));
        });
        this.priceProviderSelect.setOptions(allPriceProviders, this.settings.get('priceProvider', 0));
        this.tabWallets();

        navigator.notification.alert(
          'This app is in BETA stage. ' +
          '\nPlease don\'t send real money. ' +
          '\nYou can use BTC.TEST and ETH.TEST to send and receive coins using test networks.', null, 'Warning!');
    },

    targetScroll: 0,

    scrollToTargetTimer: null,

    scrollToTarget : function(){

      var width = document.scrollingElement.offsetWidth;
      document.body.onscroll = null;
      var targetScroll = Math.floor(this.targetScroll * width);

      if (targetScroll > document.scrollingElement.scrollLeft) {
        document.scrollingElement.scrollLeft = Math.ceil(
          document.scrollingElement.scrollLeft + ((targetScroll - document.scrollingElement.scrollLeft) / 3));
      } else {
        document.scrollingElement.scrollLeft = Math.floor(
          document.scrollingElement.scrollLeft - ((document.scrollingElement.scrollLeft - targetScroll) / 3));
      }
      //console.log(document.scrollingElement.scrollLeft, targetScroll);
      if (document.scrollingElement.scrollLeft != targetScroll) {
        this.scrollToTargetTimer = setTimeout(this.scrollToTarget.bind(this), 10);
      } else {
        //temporary disable this feature:
        window.onresize = app.scrollToTarget.bind(app);
        document.body.onscroll = app.scrollToTarget.bind(app);
        /*
        var timer = null;
        document.body.onscroll = function(event){
          console.log('scroll');
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
        */
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
      this.targetScroll = Math.floor(width / 2);
      this.targetScroll = 1 / 2;
      this.scrollToTarget();
    },
    tabHistory: function() {
      this.setTabActive(1);
      this.targetScroll = 3 / 2;
      this.scrollToTarget();
      this.reloadHistory();
    },
    tabExchange: function() {
      this.setTabActive(2);
      var width = document.scrollingElement.offsetWidth;
      document.body.onscroll = null;
      this.targetScroll = Math.floor(width / 2) + (2 * width);
      this.targetScroll = 5 / 2;
      this.scrollToTarget();
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
        for (var key in app.wallets) {
          totalOnline += app.wallets[key].updateOnlineValue();
          totalOffline += app.wallets[key].updateOfflineValue();
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

    popupCoinInfo: function(handler) {
      this.openPopup('coinInfoPopup', 'Coin ' + handler.code);
      var links = '<ul>';
      for (var name in handler.links) {
        links += '<li><a href="#" onclick="window.open(\'' + handler.links[name] + '\', \'_system\');">' + name + '</a></li>';
      }
      links += '</ul>';
      var support = '<ul>';
      var features = [
        ['getBalance', 'get address balance', 'You can specify address instead of amount in your offline assets for this coin.'],
        ['newPrivateKey', 'local wallet', 'You can have a local wallet for this coin and receive funds.'],
        ['sendPayment', 'send payments', 'You can send payments from your local wallet for this coin'],
      ];
      for (var i=0; i<features.length;i++){
          support += '<li>' + features[i][1] + ': ';
          if (features[i][0] in handler) {
            support += '<strong>YES</strong> ' + features[i][2];
          } else {
            support += '<strong>NO</strong>';
          }
          support += '</li>';
      }
      support += '</ul>';

      document.getElementById('coinInfoDescription').innerHTML =
        '<h2>' + handler.longname + '</h2>' +
        '<div class="spacing center"><img class="coinIcon" src="coins/' + handler.name + '.png" alt="' + handler.code + '"/></div>' +
        handler.description +
        '<h2>links (external)</h2>' +
        links +
        '<h2>wallet1 support</h2>' +
        support;
    },

    popupAddCoin: function() {
      this.openPopup('addCoinPopup', 'Manage Coins');

      if (typeof this.popupGenerated == 'undefined') {
        this.popupGenerated = true;
        for (let key in allCoinApis) {

          var button = document.createElement("a");
          var img = document.createElement("img");
          img.setAttribute('src', 'coins/' + allCoinApis[key].name + '.png');
          button.appendChild(img);
          var span = document.createElement("span");
          span.innerHTML = allCoinApis[key].code;
          button.appendChild(span);
          if (key in this.data.wallets) {
            button.classList.add('active');
          }
          button.onclick = function(){
            if (key in app.data.wallets) {
              navigator.notification.confirm(
                  'Are you sure you want to disable ' + key + ' coin? ' +
                  '\nPrivate keys and offline wallets data will still be available in database and will be restored when you re-enable this coin.',
                  function(buttonIndex) {
                      if (buttonIndex == 1) {
                        button.classList.remove('active');
                        //app.wallets[key].row.click();
                        app.data.hideWallet(key, function(){
                          app.wallets[key].row.outerHTML = '';
                          delete app.wallets[key].row;
                          delete app.wallets[key];
                        });
                        app.closePopup();
                      }
                  },
                  'Disabel Coin',
                  ['Disable','Cancel']
              );
            } else {
              this.classList.add('active');
              app.data.addWallet(allCoinApis[key], function(){
                app.addWalletWidget(app.data.wallets[key]);
                app.wallets[key].row.click();
              });
              app.closePopup();
            }
          };
          button.classList.add('coinButton');
          document.getElementById("allCoins").appendChild(button);
        }
      }
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
             app.alertError("QR scan failed: " + error);
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

    popupOfflineAssets: function(wallet) {

      var rows = '';
      for (var i=0; i<wallet.offlineWallets.length; i++) {
        rows +='<tr><td>' +
          wallet.offlineWallets[i].addr + '</td><td>' +
          wallet.offlineWallets[i].balance + '</td><td>' +
          wallet.offlineWallets[i].comment + '</td></tr>';
      }
      document.getElementById('offlineAssets').innerHTML = rows;
      
      this.openPopup('offlineAssetsPopup', wallet.handler.code + ' offline assets');
      this.offlineAssetWallet = wallet;
    },
    popupAddOfflineAsset: function(type) {
      document.getElementById('addOfflineAssetAddr').value = '';
      document.getElementById('addOfflineAssetBalance').value = '';
      document.getElementById('addOfflineAssetComment').value = '';
      document.getElementById('addOfflineAssetAddrDiv').classList.toggle('hidden', type == 'balance');
      document.getElementById('addOfflineAssetBalanceDiv').classList.toggle('hidden', type == 'addr');
      this.openPopup('addOfflineAssetPopup', 'add ' + this.offlineAssetWallet.handler.code + ' asset');
    },
    addOfflineAsset: function() {
      var data = {
        addr: document.getElementById('addOfflineAssetAddr').value,
        balance: parseFloat(document.getElementById('addOfflineAssetBalance').value),
        comment: document.getElementById('addOfflineAssetComment').value
      }
      this.data.addOfflineAsset(this.offlineAssetWallet.handler.code, data);
      this.popupOfflineAssets(this.offlineAssetWallet);
    },

    popupSendPayment: function(wallet) {
        this.openPopup('sendPaymentPopup', 'send ' + wallet.handler.code + ' <img class="coinIcon" src="coins/' + wallet.handler.name + '.png"/>');
        document.getElementById('sendCoinAddr').value = '';
        document.getElementById('sendCoinValue').value = '0';
        document.getElementById('sendCoinAmount').value = '0';
        document.getElementById('sendCoinName').innerHTML = wallet.handler.code;
        document.getElementById('sendFiatName').innerHTML = app.priceProvider.getUnit();
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
    alertError: function(html, coin) {
      this._alertMessage(html, coin, 'error');
    },
    alertInfo: function(html, coin) {
      this._alertMessage(html, coin, 'info');
    },
    alertSuccess: function(html, coin) {
      this._alertMessage(html, coin, 'success');
    },
    _alertMessage: function(html, coin, type) {
      Logger.log(type, coin, html);

      var msgDiv = document.createElement('div');
      msgDiv.classList.add(type);
      msgDiv.innerHTML = html;
      document.getElementById('messages').appendChild(msgDiv);
      setTimeout(function(){ document.getElementById('messages').removeChild(msgDiv); }, 2000);
    },
    sendPayment: function() {
      this.sendWallet.handler.sendPayment(
        this.sendWallet.data.privateKey,
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
        document.getElementById('receiveCoinAddr').value = wallet.data.addr;

        new QRCode(document.getElementById('receiveCoinQrcode'), wallet.data.addr);

    },
    addWalletWidget: function(data) {
      var w = new Wallet(data)
      document.getElementById('walletsList').appendChild(w.row);
      this.wallets[data.coin] = w;
    },
    onDeviceReady: function() {

        this.data.load(function(){
            for(var key in this.data.wallets){
              this.addWalletWidget(this.data.wallets[key]);
            }
        }.bind(this));
        /*
        var btc = new Wallet(BtcTestHandler, [{amount:0.43}]);
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
        */
        //this.wallets = [btc, bch, eth, pay, ltc, lsk, nebl, part];
        this.updateMarketCap();
    },

};

app.initialize();
