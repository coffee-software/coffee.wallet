
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

for (var i=0; i<otherCoins.length;i++) {
  if (!(otherCoins[i].code in allCoinApis)) {
    allCoinApis[otherCoins[i].code] = otherCoins[i];
  }
}

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
      document.getElementById('swiper').classList.remove('tab0');
      document.getElementById('swiper').classList.remove('tab1');
      document.getElementById('swiper').classList.remove('tab2');
      document.getElementById('swiper').classList.add('tab' + n);

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

      /*var width = document.scrollingElement.offsetWidth;
      document.body.onscroll = null;
      this.targetScroll = 1 / 2;
      this.scrollToTarget();*/
    },
    tabHistory: function() {
      this.setTabActive(1);
      /*
      this.targetScroll = 3 / 2;
      this.scrollToTarget();
      */
      this.reloadHistory();
    },
    tabExchange: function() {
      this.setTabActive(2);
      /*
      var width = document.scrollingElement.offsetWidth;
      document.body.onscroll = null;
      this.targetScroll = 5 / 2;
      this.scrollToTarget();*/
    },
    reloadHistory: function() {
      Logger.getLogs(function(logs){
        document.getElementById('history').innerHTML = '';
        for (var i=0; i< logs.length; i++) {
          var li = document.createElement('li');
          li.classList.add('msg');
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

    openPopup: function(id, title, icon, bgimg) {

      this.closeMenu();

      document.getElementById("container").classList.add('blur');
      document.getElementById("nav").classList.add('blur');
      document.getElementById("foot").classList.add('blur');

      document.getElementById("popup").classList.add('show');

      var icons = document.getElementsByClassName("coinBig");
      for (var i = 0; i < icons.length; i++) {
          icons[i].style.backgroundImage = bgimg ? "url('" + bgimg + "')" : null;
      }

      var children = document.getElementById('popupContent').childNodes;
      for (var c=0; c < children.length; c++) {
          if (children[c].nodeType != 3) {
            children[c].style.display = 'none';
          }
      }
      document.getElementById(id).style.display = 'block';
      document.getElementById('popupTitle').innerHTML = title;
      document.getElementById('popupIcon').setAttribute('src', 'icons/' + icon + '.png');
    },

    closePopup: function() {
      document.getElementById("container").classList.remove('blur');
      document.getElementById("nav").classList.remove('blur');
      document.getElementById("foot").classList.remove('blur');
      document.getElementById("popup").classList.remove('show');
    },

    popupCoinInfo: function(handler) {
      this.openPopup('coinInfoPopup', 'Coin ' + handler.code, 'help', 'coins/' + handler.name + '.png');
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
        handler.description +
        '<h2>links (external)</h2>' +
        links +
        '<h2>wallet1 support</h2>' +
        support;
    },

    popupAddCoin: function() {
      this.openPopup('addCoinPopup', 'Manage Coins', 'plus');
      var that = this;
      if (typeof that.popupGenerated == 'undefined') {
        that.popupGenerated = true;
        var filter = function() {
          var search = document.getElementById('addCoinFilter').value.toUpperCase();
          var onlySupported = document.getElementById('addCoinOnlySupported').checked;
          for (var i = 0; i < document.getElementById('allCoins').children.length; i++) {
            var cbutton = document.getElementById('allCoins').children[i];

            var show = cbutton.dataset.search.search(search) != -1;
            if (onlySupported) show = show && (cbutton.dataset.supported == 'true');
            cbutton.classList.toggle(
              'hidden',
              !show
            );
          }
        };
        document.getElementById('addCoinFilter').onkeyup = filter;
        document.getElementById('addCoinFilter').onchange = filter;
        document.getElementById('addCoinOnlySupported').onchange = filter;


        Object.keys(allCoinApis).sort().forEach(function(key){
          var button = document.createElement("a");
          button.dataset.search = (allCoinApis[key].name + ' '+ allCoinApis[key].code + ' ' + allCoinApis[key].longname).toUpperCase();
          button.dataset.supported = 'sendPayment' in allCoinApis[key];

          var img = document.createElement("img");
          img.setAttribute('src', 'coins/' + allCoinApis[key].name + '.png');
          button.appendChild(img);
          var span = document.createElement("span");
          span.innerHTML = allCoinApis[key].code;
          button.appendChild(span);
          if (key in that.data.wallets) {
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
        });
      }
    },

    popupHelp: function() {
        this.openPopup('helpPopup', 'Help', 'help');
    },
    popupFeedback: function() {
        this.openPopup('feedbackPopup', 'Feedback', 'heart');
    },

    popupPriceSettings: function() {
        this.openPopup('priceSettingsPopup', 'Price Settings', 'money');

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
    pasteToSendForm: function(addr, args) {
      //TODO check if coin matches?
      //console.log('paste', addr, args);
      document.getElementById('sendCoinAddr').value = addr;
      app.sendCoinValidateAddr();

      if ('amount' in args && args.amount){
        document.getElementById('sendCoinAmount').value = parseFloat(args.amount);
        app.sendCoinUpdateValue();
        app.sendCoinValidateAmount();
      }
    },
    _parseTransactionText: function(text, callback) {
      //check if text is a plain address or transaction info:
      //https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki#Simpler syntax
      var a = text.split('?', 2);
      var argsStr = (a.length > 1) ? a[1] : '';
      var addr = a[0];

      var args = {};

      var b = addr.split(':', 2);
      if (b.length >1) {
        args.coin = b[0];
        addr = b[1];
      }

      argsStr.split('&').forEach(function(e){
        var kp = e.split('=', 2);
        if (kp.length>1) args[kp[0]] = kp[1];
      });

      callback(addr, args);
    },
    pasteClipboard: function(callback) {
      var that = this;
      cordova.plugins.clipboard.paste(function(text){
        that._parseTransactionText(text, callback);
      });
    },
    scanQrCode: function(callback) {
      window.cordova.plugins.barcodeScanner.scan(
           function (result) {
             if (!result.canceled) {
               app._parseTransactionText(result.text, callback);
             }
          },
         function (error) {
             app.alertError("QR scan failed: " + error);
         },
         {
             preferFrontCamera : true, // iOS and Android
             showFlipCameraButton : true, // iOS and Android
             showTorchButton : true, // iOS and Android
             torchOn: true, // Android, launch with the torch switched on (if available)
             prompt : "Place addres or transaction barcode inside the scan area", // Android
         }
      );
    },

    popupOfflineAssets: function(wallet) {

      document.getElementById('offlineAssets').innerHTML = '';
      for (var i=0; i<wallet.offlineWallets.length; i++) {
        var a = new Asset(wallet, i + 1, wallet.offlineWallets[i]);
        document.getElementById('offlineAssets').appendChild(a.row);
      }

      this.openPopup('offlineAssetsPopup', wallet.handler.code + ' offline assets', 'list', 'coins/' + wallet.handler.name + '.png');
      this.offlineAssetWallet = wallet;
    },
    pasteOfflineAsset: function(addr, args) {
      //console.log('add', addr, args);
      this.popupAddOfflineAsset('addr', addr);
    },
    popupEditOfflineAsset: function(asset) {
      document.getElementById('addOfflineAssetAddr').value = asset.data.addr;
      document.getElementById('addOfflineAssetBalance').value = asset.data.balance;
      document.getElementById('addOfflineAssetComment').value = asset.data.comment;
      document.getElementById('addOfflineAssetAddrDiv').classList.toggle('hidden', asset.data.addr ? false : true);
      document.getElementById('addOfflineAssetBalanceDiv').classList.toggle('hidden', asset.data.addr);

      document.getElementById('saveOfflineAssetButton').classList.remove('hidden');
      document.getElementById('addOfflineAssetButton').classList.add('hidden');

      this.openPopup('addOfflineAssetPopup', 'edit ' + asset.wallet.handler.code + ' asset', 'edit', 'coins/' + app.offlineAssetWallet.handler.name + '.png');
    },
    popupAddOfflineAsset: function(type, value) {
      document.getElementById('addOfflineAssetAddr').value = (type == 'addr' ? value : '');
      document.getElementById('addOfflineAssetBalance').value = (type == 'balance' ? value : '');
      document.getElementById('addOfflineAssetComment').value = '';
      document.getElementById('addOfflineAssetAddrDiv').classList.toggle('hidden', type == 'balance');
      document.getElementById('addOfflineAssetBalanceDiv').classList.toggle('hidden', type == 'addr');
      document.getElementById('saveOfflineAssetButton').classList.add('hidden');
      document.getElementById('addOfflineAssetButton').classList.remove('hidden');
      this.openPopup('addOfflineAssetPopup', 'add ' + this.offlineAssetWallet.handler.code + ' asset', 'add', 'coins/' + app.offlineAssetWallet.handler.name + '.png');
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
    saveOfflineAsset: function(){
      var data = {
        addr: document.getElementById('addOfflineAssetAddr').value,
        balance: parseFloat(document.getElementById('addOfflineAssetBalance').value),
        comment: document.getElementById('addOfflineAssetComment').value
      }
      this.data.updateOfflineAsset(activeAsset.wallet.handler.code, activeAsset.id, data);
      this.popupOfflineAssets(this.offlineAssetWallet);
    },

    popupSendPayment: function(wallet) {
        this.openPopup('sendPaymentPopup', 'send ' + wallet.handler.code, 'send', 'coins/' + wallet.handler.name + '.png');

        //+ ' <img class="coinIcon" src="coins/' + wallet.handler.name + '.png"/>'
        var fees = wallet.handler.getFees();
        document.getElementById('sendCoinFee').max = fees.length - 1;
        document.getElementById('sendCoinFee').value = Math.floor((fees.length - 1) / 2);
        document.getElementById('sendCoinAddr').value = '';
        document.getElementById('sendCoinValue').value = '';
        document.getElementById('sendCoinAmount').value = '';
        app.sendCoinValidateAddr(true);
        app.sendCoinValidateAmount(true);

        document.getElementById('sendCoinName').innerHTML = wallet.handler.code;
        document.getElementById('sendFiatName').innerHTML = app.priceProvider.getUnit();
        this.sendWallet = wallet;
        this.sendFees = fees;
        app.sendCoinUpdateFee();

    },

    sendCoinValidateAddr: function(focus) {
      var valid = false;
      var elem = document.getElementById('sendCoinAddr');
      elem.classList.remove('invalid');
      elem.classList.remove('valid');
      elem.parentElement.nextElementSibling.innerHTML = '';
      if (typeof focus == 'undefined') {
        valid = this.sendWallet.handler.validateAddress(elem.value);
        elem.classList.add(valid ? 'valid' : 'invalid');
        if (!valid) {
          elem.parentElement.nextElementSibling.innerHTML = 'invalid address';
        }
      }
      return valid;
    },

    sendCoinValidateAmount: function(focus) {
      var valid = false;
      var amountElem = document.getElementById('sendCoinAmount');
      var valueElem = document.getElementById('sendCoinValue');
      valueElem.parentElement.nextElementSibling.innerHTML = '';

      amountElem.classList.remove('invalid');
      amountElem.classList.remove('valid');
      valueElem.classList.remove('invalid');
      valueElem.classList.remove('valid');

      if (typeof focus == 'undefined') {
        valid = parseFloat(amountElem.value) > 0;
        amountElem.classList.add(valid ? 'valid' : 'invalid');
        valueElem.classList.add(valid ? 'valid' : 'invalid');
        if (!valid) {
          valueElem.parentElement.nextElementSibling.innerHTML = 'invalid amount';
        }
      }
      return valid;

      //document.getElementById('sendCoinAmount').value = '';

    },

    sendCoinUpdateFee: function(){
      var fee = this.sendFees[document.getElementById('sendCoinFee').value];
      document.getElementById('feeAmount').innerHTML =
        fee[0] + this.sendWallet.handler.code + ' (' +
        this.priceProvider.convert(fee[0], this.sendWallet.handler.code) + ')';
      document.getElementById('feeTime').innerHTML = fee[1] + 'min';

    },

    sendCoinUpdateValue: function() {
      document.getElementById('sendCoinValue').value =
        document.getElementById('sendCoinAmount').value * this.priceProvider.getPrice(this.sendWallet.handler.code);
    },

    sendCoinUpdateAmount: function() {
      document.getElementById('sendCoinAmount').value =
        document.getElementById('sendCoinValue').value / this.priceProvider.getPrice(this.sendWallet.handler.code);
    },
    alertError: function(html, coin, debug) {
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
      msgDiv.classList.add('msg');
      msgDiv.classList.add('stitched');
      msgDiv.classList.add(type);
      msgDiv.innerHTML = html;
      document.getElementById('messages').appendChild(msgDiv);
      setTimeout(function(){ document.getElementById('messages').removeChild(msgDiv); }, 5000);
    },

    cancelAuth: function() {
      this.onAuthCallback = null;
      document.getElementById('lockPopup').classList.add('hidden');
    },
    confirmAuth: function() {
      this.onAuthCallback();
      this.onAuthCallback = null;
      document.getElementById('lockPopup').classList.add('hidden');
    },
    authenticateBeforeContinue: function(title, message, callback) {
      this.onAuthCallback = callback;
      document.getElementById('lockPopup').classList.remove('hidden');
      document.getElementById('lockTitle').innerHTML = title;
      document.getElementById('lockMessage').innerHTML = message;

      //document.getElementById('lockPopup').stylesList.remove('hidden');
    },

    sendPayment: function() {

      //document.getElementById('sendCoinAmount').value;
      if (!(this.sendCoinValidateAddr() && this.sendCoinValidateAmount())) {
        return;
      }

      var coin = this.sendWallet.handler.code;
      var fee = this.sendFees[document.getElementById('sendCoinFee').value];
      var addr = document.getElementById('sendCoinAddr').value;
      var amount = parseFloat(document.getElementById('sendCoinAmount').value);

      app.authenticateBeforeContinue(
        'Confirm ' + coin + ' Transaction',
        '<table style="width:100%">' +
        '<tr><th>recipient:</th><td colspan="2">' + addr + '</td></tr>' +
        '<tr><th>amount:</th><td>' + amount + ' ' + coin + '</td><td>' + this.priceProvider.convert(amount, coin) + '</td></tr>' +
        '<tr><th>fee:</th><td>' + fee[0] + ' ' + coin + '</td><td>' + this.priceProvider.convert(fee[0], coin) + '</td></tr>' +
        '<tr><th>total:</th><td>' + (amount + fee[0]) + ' ' + coin + '</td><td>' + this.priceProvider.convert(amount + fee[0], coin) + '</td></tr>' +
        '<tr><th>balance after:</th><td>' + (this.sendWallet.totalOnline - amount - fee[0]) + ' ' + coin + '</td><td>' + this.priceProvider.convert(this.sendWallet.totalOnline - amount - fee[0], coin) + '</td></tr>' +
        '</table>'
        ,
        function(){
          app.sendWallet.handler.sendPayment(app.sendWallet.data.privateKey, addr, amount, fee);
          app.closePopup();
        }
      );
    },
    copyReceiveCoinAddrToClp: function() {
        window.cordova.plugins.clipboard.copy(document.getElementById('receiveCoinAddr').value);
    },
    popupReceivePayment: function(wallet) {
        this.openPopup('receivePaymentPopup', 'receive ' + wallet.handler.code, 'receive');
        // + ' <img class="coinIcon" src="coins/' + wallet.handler.name + '.png"/>'
        document.getElementById('receiveCoinName').innerHTML = '';
        document.getElementById('receiveCoinAddr').value = '';
        document.getElementById('receiveCoinQrcode').innerHTML = '';

        document.getElementById('receiveCoinName').innerHTML = wallet.handler.code;
        document.getElementById('receiveCoinAddr').value = wallet.data.addr;

        new QRCode(document.getElementById('receiveCoinQrcode'), {
          text: wallet.data.addr,
          colorLight: '#eadfcb',
          colorDark: '#4e3c31'
        });

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
        this.updateMarketCap();
    },

};

app.initialize();
