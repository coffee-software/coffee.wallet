'use strict'

var allCoinApis = {
  'BTC.TST': BtcTestHandler,
  'ETH.TST': EthTestHandler,
  'BTC': BtcHandler,
  'BCH': BchHandler,
  'ETH': EthHandler,
  'LTC': LtcHandler,
  'DOGE': DogeHandler,
  'PAY': new ERC20Handler(ERC20Tokens.PAY)
};

var allCoinApisByRank = new Array();

for (var i=0; i<otherCoins.length;i++) {
  if (!(otherCoins[i].code in allCoinApis)) {
    allCoinApis[otherCoins[i].code] = otherCoins[i];
  }
  allCoinApisByRank.push(allCoinApis[otherCoins[i].code]);
}

allCoinApisByRank.push(BtcTestHandler);
allCoinApisByRank.push(EthTestHandler);


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
          //console.log('scroll');
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
      this.setTabActive(1);

      /*var width = document.scrollingElement.offsetWidth;
      document.body.onscroll = null;
      this.targetScroll = 1 / 2;
      this.scrollToTarget();*/
    },
    tabHistory: function() {
      this.setTabActive(0);
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
          li.innerHTML = '<div class="ts">' + (new Date(logs[i].ts * 1000)).toUTCString()  + '</div><div>' + logs[i].message + '</div>';
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
      var that = this;

      var spinner = function(){
        document.getElementById('refresh').classList.toggle('spinning', that.spinning);
        if (that.spinning) {
          setTimeout(spinner, 1000);
        }
      };
      that.spinning = true;
      spinner();

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
        that.spinning = false;
      });
    },

    menuOpened : false,

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

    showOneChildOf: function(parentId, childId) {
      var children = document.getElementById(parentId).childNodes;
      for (var c=0; c < children.length; c++) {
          if (children[c].nodeType != 3) {
            children[c].style.display = 'none';
          }
      }
      document.getElementById(childId).style.display = 'block';
    },

    setCurrentCoinIcon: function(img) {
      if (img) {
        var icons = document.getElementsByClassName("coinBig");
        for (var i = 0; i < icons.length; i++) {
            icons[i].src = img;
        }
      }
    },

    openForm: function(id, title, bgimg) {
      this.closeMenu();

      document.getElementById("container").classList.add('blur');
      document.getElementById("nav").classList.add('blur');
      document.getElementById("popupHead").classList.add('blur');
      document.getElementById("popupContent").classList.add('blur');

      document.getElementById('formPopup').classList.add('show');
      this.setCurrentCoinIcon(bgimg);
      this.showOneChildOf('formPopup', id);

    },

    openPopup: function(id, title, bgimg) {

      this.closeMenu();
      document.getElementById('popup').classList.add('show');

      this.setCurrentCoinIcon(bgimg);
      this.showOneChildOf('popupContent', id);

      document.getElementById('popupTitle').innerHTML = title;
      //document.getElementById('popupIcon').setAttribute('src', 'icons/' + icon + '.png');
    },

    closeForm: function() {
      document.getElementById("container").classList.remove('blur');
      document.getElementById("nav").classList.remove('blur');
      document.getElementById("popupHead").classList.remove('blur');
      document.getElementById("popupContent").classList.remove('blur');
      document.getElementById("formPopup").classList.remove('show');
    },

    closePopup: function() {
      document.getElementById("popup").classList.remove('show');
    },

    showExportPrivateKeyPopup: function(wallet) {
      app.authenticateBeforeContinue(
        'Export ' + wallet.handler.code + ' Private Key',
        'Are you sure you want to see your private key? It gives full access to your ' + wallet.handler.code + ' online wallet. '
        + 'Don\'t show it to any one. Don\'t take a screenshot.',
        function() {
          app.openForm('exportPrivateKeyPopup', wallet.handler.code + ' private key', 'coins/' + wallet.handler.icon + '.svg');
          document.getElementById('privateKeyValue').innerHTML = wallet.data.privateKey;
        }
      );
    },

    showImportPrivateKeyPopup: function(wallet) {
      app.openForm('importPrivateKeyPopup', 'import ' + wallet.handler.code + ' private key', 'coins/' + wallet.handler.icon + '.svg');
      app.importingWallet = wallet;
      document.getElementById('importPrivateKeyInput').value = '';
    },

    importPrivateKey: function(){
      var value = document.getElementById('importPrivateKeyInput').value
      //app.importingWallet
      console.log(value);
      app.authenticateBeforeContinue(
        'Import ' + app.importingWallet.handler.code + ' Private Key',
        'Are You sure you want to import new private key? Current private key will be replaced. ' +
        'You might loose your funds if you havent make any backup.' ,
        function() {
          app.importingWallet.data.privateKey = value;
          app.importingWallet.data.addr = app.importingWallet.handler.addrFromPrivateKey(value);
          app.importingWallet.balance = 0;
          app.data.save();
          app.closeForm();
          app.importingWallet.refreshOnline();
        });
    },

    exportAllKeys: function() {
      this.closeMenu();
      var text = JSON.stringify(app.data.wallets);
      //var url = 'data:text/plain;charset=utf-8,' + encodeURIComponent(text);
      cordova.plugins.clipboard.copy(text);
      app.alertInfo('copied to clipboard');
    },

    importAllKeys: function() {
      this.closeMenu();
      var element = document.createElement('input');
      element.type = "file";
      document.body.appendChild(element);
      element.click();
      element.onchange = function(event){
        let fr = new FileReader();
        fr.onload = function(event) {
          alert(event.target.result);
        };
        fr.readAsText(event.target.files[0]);
        document.body.removeChild(element);
      };
    },

    removeCoin: function(wallet) {
      var key = wallet.handler.code;
      navigator.notification.confirm(
          'Are you sure you want to remove ' + key + ' coin? ' +
          '\nPrivate keys and offline wallets data will still be available in database and will be restored when you re-enable this coin.',
          function(buttonIndex) {
              if (buttonIndex == 1) {
                app.data.hideWallet(key, function(){
                  app.wallets[key].row.outerHTML = '';
                  delete app.wallets[key].row;
                  delete app.wallets[key];
                });
                app.closePopup();
              }
          },
          'Remove Coin',
          ['Remove','Cancel']
      );
    },

    createAdvancedOption: function(icon, text, callback) {
      var li = document.createElement('li');
      var button = document.createElement('button');
      var img = document.createElement("img");
      img.setAttribute('src', 'icons/' + icon + '.png');
      button.appendChild(img);
      button.appendChild(document.createTextNode(text));
      fastTap(button, callback);
      li.appendChild(button);
      return li;
    },

    popupCoinInfo: function(wallet) {
      this.openPopup('coinInfoPopup', wallet.handler.longname, 'coins/' + wallet.handler.icon + '.svg');
      var links = '<ul>';
      for (var name in wallet.handler.links) {
        links += '<li><a href="#" onclick="window.open(\'' + wallet.handler.links[name] + '\', \'_system\');">' + name + '</a></li>';
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
          if (features[i][0] in wallet.handler) {
            support += '<strong>YES</strong> ' + features[i][2];
          } else {
            support += '<strong>NO</strong>';
          }
          support += '</li>';
      }
      support += '</ul>';

      var advanced = document.createElement('ul');
      advanced.classList.add('advancedActions');
      var advancedWallet = wallet;

      if ('newPrivateKey' in wallet.handler) {
        //advanced.appendChild(app.createAdvancedOption('send', 'export private key', app.showExportPrivateKeyPopup.bind(app, advancedWallet)));
        //advanced.appendChild(app.createAdvancedOption('receive', 'import private key', app.showImportPrivateKeyPopup.bind(app, advancedWallet)));
      }

      if (wallet.totalOffline + wallet.totalOnline <= 0) {
        advanced.appendChild(app.createAdvancedOption('remove', 'remove coin', app.removeCoin.bind(app, advancedWallet)));
      }

      document.getElementById('coinInfoDescription').innerHTML =
        '<h2>' + wallet.handler.longname + ' (' + wallet.handler.code + ')</h2>' +
        wallet.handler.description +
        '<div class="spacing stitch"></div>' +
        '<h3>links (external)</h3>' +
        links +
        '<h3>coffee features</h3>' +
        support;

      if (advanced.children.length > 0) {
          document.getElementById('coinInfoDescription').insertAdjacentHTML('beforeend','<h3>advanced options:</h3>');
          document.getElementById('coinInfoDescription').append(advanced);
      }
    },

    popupAddCoin: function() {
      this.openPopup('addCoinPopup', 'add cryptos');
      var that = this;
      if (typeof that.popupGenerated == 'undefined') {
        that.popupGenerated = true;
        setTimeout(function(){
          var filter = function() {

            var query = document.getElementById('addCoinFilter').value.toUpperCase();
            var onlySupportedRead = document.getElementById('addCoinOnlySupportedRead').checked;
            var onlySupportedWrite = document.getElementById('addCoinOnlySupportedWrite').checked;
            var limit = 24;
            var allCoins = document.getElementById('allCoins');
            while (allCoins.firstChild) { allCoins.removeChild(allCoins.firstChild); }

            for (var i=0; i< allCoinApisByRank.length; i++){
              var coin = allCoinApisByRank[i];
              var show = coin._search.search(query) != -1;
              if (onlySupportedRead) show = show && ('getBalance' in coin);
              if (onlySupportedWrite) show = show && ('sendPayment' in coin);
              if (show) {
                limit --;
                if (limit >= 0){
                  if (!('_button' in coin)) {
                    allCoinApisByRank[i]._button = new CoinButton(coin)
                  }
                  allCoins.appendChild(coin._button);
                }
              }
            }
            if (limit == 24) {
              document.getElementById('moreCoins').innerHTML = 'No coins found for given query.';
            } else if (limit >= 0) {
              document.getElementById('moreCoins').innerHTML = '';
            } else {
              document.getElementById('moreCoins').innerHTML = '' + -limit + ' more coins matches.<br/> Please enter more specific query.';
            };
          };
          document.getElementById('addCoinFilter').onkeyup = filter;
          document.getElementById('addCoinFilter').onchange = filter;
          document.getElementById('addCoinOnlySupportedRead').onchange = filter;
          document.getElementById('addCoinOnlySupportedWrite').onchange = filter;
          for (var i=0; i< allCoinApisByRank.length; i++){
            allCoinApisByRank[i]._search = (allCoinApisByRank[i].name + ' '+ allCoinApisByRank[i].code + ' ' + allCoinApisByRank[i].longname).toUpperCase();
          }
          filter();
        }, 100);
      }
    },

    popupHelp: function() {
        this.openPopup('helpPopup', 'Help');
    },
    popupFeedback: function() {
        this.openPopup('feedbackPopup', 'Feedback');
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

        this.updateMarketCap();
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
             preferFrontCamera : false, // iOS and Android
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

      this.openPopup('offlineAssetsPopup', wallet.handler.code + ' assets', 'coins/' + wallet.handler.icon + '.svg');
      document.getElementById('addBalanceButtons').classList.toggle('hidden', !('getBalance' in wallet.handler));
      this.offlineAssetWallet = wallet;
    },

    pasteToField: function(field, addr, args) {
      document.getElementById(field).value = addr;
    },

    popupEditOfflineAsset: function(asset) {
      document.getElementById('addOfflineAssetAddr').value = asset.data.addr;
      document.getElementById('addOfflineAssetBalance').value = asset.data.balance;
      document.getElementById('addOfflineAssetComment').value = asset.data.comment;
      document.getElementById('addOfflineAssetAddrDiv').classList.toggle('hidden', asset.data.addr ? false : true);
      document.getElementById('addOfflineAssetBalanceDiv').classList.toggle('hidden', asset.data.addr);


      document.getElementById('addOfflineAssetPopupSave').innerHTML = 'save';
      this.editAsset = true;
      this.openForm('addOfflineAssetPopup', 'edit ' + asset.wallet.handler.code + ' asset', 'coins/' + app.offlineAssetWallet.handler.icon + '.svg');
    },
    popupAddOfflineAsset: function(type, value) {
      document.getElementById('addOfflineAssetAddr').value = (type == 'addr' ? value : '');
      document.getElementById('addOfflineAssetBalance').value = (type == 'balance' ? value : '');
      document.getElementById('addOfflineAssetComment').value = '';
      document.getElementById('addOfflineAssetAddrDiv').classList.toggle('hidden', type == 'balance');
      document.getElementById('addOfflineAssetBalanceDiv').classList.toggle('hidden', type == 'addr');

      document.getElementById('addOfflineAssetPopupSave').innerHTML = 'add';
      this.editAsset = false;
      this.openForm('addOfflineAssetPopup', 'add ' + this.offlineAssetWallet.handler.code + ' asset', 'coins/' + app.offlineAssetWallet.handler.icon + '.svg');
    },
    saveOfflineAsset: function(){
      var data = {
        addr: document.getElementById('addOfflineAssetAddr').value,
        balance: parseFloat(document.getElementById('addOfflineAssetBalance').value),
        comment: document.getElementById('addOfflineAssetComment').value
      }
      if (this.editAsset) {
        this.data.updateOfflineAsset(activeAsset.wallet.handler.code, activeAsset.id, data);
      } else {
        this.data.addOfflineAsset(this.offlineAssetWallet.handler.code, data);
      }
      this.closeForm();
      this.popupOfflineAssets(this.offlineAssetWallet);
      this.offlineAssetWallet.refreshOffline();
    },

    popupSendPayment: function(wallet) {
        this.openForm('sendPaymentPopup', 'send ' + wallet.handler.code, 'coins/' + wallet.handler.icon + '.svg');

        var fees = wallet.handler.getFees();
        //document.getElementById('sendCoinFee').max = fees.length - 1;
        //document.getElementById('sendCoinFee').value = Math.floor((fees.length - 1) / 2);
        document.getElementById('sendCoinFee').rangeSlider.update({min: 0, max: fees.length - 1, value: Math.floor((fees.length - 1) / 2)})

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
      elem.parentElement.classList.remove('invalid');
      elem.parentElement.classList.remove('valid');
      elem.parentElement.lastElementChild.innerHTML = '';

      elem.parentElement.classList.toggle('filled', elem.value != '' || elem == document.activeElement);

      if (typeof focus == 'undefined') {
        valid = this.sendWallet.handler.validateAddress(elem.value);
        elem.parentElement.classList.add(valid ? 'valid' : 'invalid');
        if (!valid) {
          elem.parentElement.lastElementChild.innerHTML = 'invalid address';
        }
      }
      return valid;
    },

    sendCoinValidateAmount: function(focus) {
      var valid = false;
      var amountElem = document.getElementById('sendCoinAmount');
      var valueElem = document.getElementById('sendCoinValue');
      valueElem.parentElement.lastElementChild.innerHTML = '';

      amountElem.parentElement.classList.remove('invalid');
      amountElem.parentElement.classList.remove('valid');
      valueElem.parentElement.classList.remove('invalid');
      valueElem.parentElement.classList.remove('valid');

      amountElem.parentElement.classList.toggle('filled', amountElem.value != '' || amountElem == document.activeElement || valueElem == document.activeElement);
      valueElem.parentElement.classList.toggle('filled', valueElem.value != '' || amountElem == document.activeElement || valueElem == document.activeElement);

      if (typeof focus == 'undefined') {
        valid = parseFloat(amountElem.value) > 0;
        amountElem.parentElement.classList.add(valid ? 'valid' : 'invalid');
        valueElem.parentElement.classList.add(valid ? 'valid' : 'invalid');
        if (!valid) {
          valueElem.parentElement.lastElementChild.innerHTML = 'invalid amount';
        }
      }
      return valid;

      //document.getElementById('sendCoinAmount').value = '';

    },

    sendCoinUpdateFee: function(){
      if (this.sendFees && (document.getElementById('sendCoinFee').value in this.sendFees)) {
        var fee = this.sendFees[document.getElementById('sendCoinFee').value];
        document.getElementById('feeAmount').innerHTML =
          fee[0] + this.sendWallet.handler.code + ' (' +
          this.priceProvider.convert(fee[0], this.sendWallet.handler.code) + ')';
        document.getElementById('feeTime').innerHTML = fee[1] + 'min';
      }
    },

    sendCoinUpdateValue: function() {
      var src = document.getElementById('sendCoinAmount').value;
      document.getElementById('sendCoinValue').value =
        src == '' ? '' : (src * this.priceProvider.getPrice(this.sendWallet.handler.code));
    },

    sendCoinUpdateAmount: function() {
      var src = document.getElementById('sendCoinValue').value
      document.getElementById('sendCoinAmount').value =
         src == '' ? src : src / this.priceProvider.getPrice(this.sendWallet.handler.code);
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
      this._alertMessagePopup(type, html);
    },

    _alertMessagePopup: function(type, html) {
      var msgDiv = document.createElement('div');
      msgDiv.classList.add('msg');
      msgDiv.classList.add(type);
      msgDiv.innerHTML = html;
      var closer = createButton('close', function(){ document.getElementById('messages').removeChild(msgDiv); msgDiv = null; });
      closer.classList.add('closer');
      msgDiv.append(closer);
      document.getElementById('messages').appendChild(msgDiv);
      setTimeout(function(){ msgDiv && msgDiv.classList.add('fadingout'); }, 5000);
      setTimeout(function(){ msgDiv && document.getElementById('messages').removeChild(msgDiv); }, 7000);
    },

    _alertJsError: function(html) {
      this._alertMessagePopup('error', html);
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
        '' + coin + ' transaction',
        '<table class="niceTable">' +
        '<tr><th style="width:26%;">recipient:</th><td colspan="2">' + addr + '</td></tr>' +
        '<tr><th>amount:</th><td style="width:50%;">' + amount + ' ' + coin + '</td><td>' + this.priceProvider.convert(amount, coin) + '</td></tr>' +
        '<tr><th>fee:</th><td>' + fee[0] + ' ' + coin + '</td><td>' + this.priceProvider.convert(fee[0], coin) + '</td></tr>' +
        '<tr><th>total:</th><td>' + (amount + fee[0]) + ' ' + coin + '</td><td>' + this.priceProvider.convert(amount + fee[0], coin) + '</td></tr>' +
        '<tr><th>balance after:</th><td>' + (this.sendWallet.totalOnline - amount - fee[0]) + ' ' + coin + '</td><td>' + this.priceProvider.convert(this.sendWallet.totalOnline - amount - fee[0], coin) + '</td></tr>' +
        '</table>'
        ,
        function(){
          app.sendWallet.handler.sendPayment(app.sendWallet.data.privateKey, addr, amount, fee);
          app.closeForm();
        }
      );
    },
    copyReceiveCoinAddrToClp: function() {
        cordova.plugins.clipboard.copy(document.getElementById('receiveCoinAddr').value);
        app.alertInfo('copied addr to clipboard', app.receivingWallet.handler.code);
    },
    popupReceivePayment: function(wallet, addr) {
        this.openForm('receivePaymentPopup', 'receive ' + wallet.handler.code, 'coins/' + wallet.handler.icon + '.svg');
        document.getElementById('receiveCoinName').innerHTML = '';
        document.getElementById('receiveCoinAddr').value = '';
        document.getElementById('receiveCoinQrcode').innerHTML = '';

        if (addr == null) {
          document.getElementById('receiveCoinName').innerHTML = 'Your ' + wallet.handler.code + ' address is:';
        } else {
          document.getElementById('receiveCoinName').innerHTML = '' + wallet.handler.code + ' offline address:';
        }

        document.getElementById('receiveCoinAddr').value = (typeof addr == 'undefined' ? wallet.data.addr : addr);

        new QRCode(document.getElementById('receiveCoinQrcode'), {
          text: addr == null ? wallet.data.addr : addr,
          colorLight: '#f7f5f2',
          colorDark: '#463f3a'
        });

        this.receivingWallet = wallet;

        setTimeout(app.updateReceivingWallet, 3000);
    },

    updateReceivingWallet: function() {
      if (document.getElementById("formPopup").classList.contains('show')) {
        if (document.getElementById('receivePaymentPopup').style.display == 'block') {
          console.log('refresh');
          app.receivingWallet.refreshOnline(function(){
            setTimeout(app.updateReceivingWallet, 3000);
          });
        }
      }
    },

    addWalletWidget: function(data) {
      var w = new Wallet(data)
      document.getElementById('walletsList').appendChild(w.row);
      this.wallets[data.coin] = w;
    },
    onDeviceReady: function() {

        this.data.load(function(){
            for(var key in this.data.wallets){
              if (this.data.wallets[key].enabled) {
                if (!(this.data.wallets[key].coin in allCoinApis)) {
                  app.alertError('coin ' + this.data.wallets[key].coin + ' is no longer supported. It will be disabled.');
                  this.data.wallets[key].enabled = false;
                } else {
                  this.addWalletWidget(this.data.wallets[key]);
                }
              }
            }
        }.bind(this));
        this.updateMarketCap();

        rangeSlider.create(document.getElementById('sendCoinFee'), {
            polyfill: true,
            vertical: false,
            min: 0,
            max: 100,
            step: 1,
            value: 50,
            borderRadius: 10,
        });

        document.getElementById('sendCoinFee').parentElement.addEventListener ("touchstart", function() {
          document.getElementById('sendCoinFee').focus();
        });

        Logger.log("info", null, "application started");
    },

};

app.initialize();
