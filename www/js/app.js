'use strict'

function handleOpenURL(url) {
  setTimeout(function() {
    //make sure data is loaded
    if (app.lastOpenedUrl != url) {
      app.onDataLoaded(function(callback){
        app.alertInfo('opening url: ' + url);
        app.handleUrlOpened(url, callback);
      });
    };
  }, 0);
}

var app = {
    // Application Constructor
    settings: Settings,
    data: Data,
    wallets: {},
    lastOpenedUrl: null,
    initialize: function() {
        var that = this;
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.getElementById('overlay').onclick = function(event){
          if (that.menuOpened) {
            that.closeMenu();
          }
        };

        var footButtons = document.getElementById('foot').children;
        for (var i = 0; i < footButtons.length; i++) {
          fastTap(footButtons[i]);
        }
        fastTap(document.getElementById('toggleMenu'));
        var buttons = document.getElementsByTagName('button');
        for (var i = 0; i < buttons.length; i++) {
          fastTap(buttons[i]);
        }

        this.tabWallets();
        document.addEventListener('backbutton', this.onBackButton.bind(this), false);

        document.getElementById('popupContent').addEventListener("scroll", function(){
          app.togglePopupHeaderFix();
        });
    },

    targetScroll: 0,

    scrollToTargetTimer: null,

    netError: false,
    togglePopupHeaderFix: function() {
      var headerSize = 0;
      var children = document.getElementById('popupContent').childNodes;
      for (var c=0; c < children.length; c++) {
          if ((children[c].nodeType != 3) && (children[c].style.display == 'block')){
            headerSize = children[c].firstElementChild.offsetHeight;
          }
      }
      document.getElementById('popupHead').classList.toggle('expand', document.getElementById('popupContent').scrollTop >= headerSize - 62); //85
    },

    setNoNetError : function() {
      this.netError = true;
      document.getElementById('refresh').classList.add('error');
    },

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
                  app.tabTools();
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
    tabTools: function() {
      this.setTabActive(2);
      /*
      var width = document.scrollingElement.offsetWidth;
      document.body.onscroll = null;
      this.targetScroll = 5 / 2;
      this.scrollToTarget();*/
    },
    preParseCoinMsg: function(msg, coin, allowLinks = false) {
      if ((typeof(msg) == 'string') && (coin in allCoinApis) && ('explorerLinkTx' in allCoinApis[coin])) {
        msg = msg.replace(/\<u\>\w+\<\/u\>/, function(match){
          var tx = match.substring(3, match.length-4);
          var txShort = tx.substring(0, 6) + '..' + tx.substring(tx.length-4, tx.length);
          return allowLinks ? ('<a href="#" onclick="osPlugins.openInSystemBrowser(\'' + allCoinApis[coin].explorerLinkTx(tx) + '\');">' + txShort + '</a>') : ('<u>' + txShort + '</u>');
        });
      }
      return msg;
    },
    reloadHistory: function() {
      Logger.getLogs(function(logs){
        document.getElementById('history').innerHTML = '';
        for (var i=0; i< logs.length; i++) {
          var li = document.createElement('li');
          var html = logs[i].message;
          if ('coin' in logs[i]) {
            html = app.preParseCoinMsg(html, logs[i].coin, true);
          }

          if (('coin' in logs[i]) && (logs[i].coin in allCoinApis)) {
            html = '<img src="coins/' + allCoinApis[logs[i].coin].icon + '.svg"/>' + html;
          } else {
            //html = '<img src="coins/empty.svg"/>' + html;
          }

          li.innerHTML = '<div class="msg ' + logs[i].severity + '"><div class="ts">' + (new Date(logs[i].ts)).toLocaleString()  + '</div><div>' + html + '</div></div><div class="stitch2"></div>';
          //logs[i].coin
          document.getElementById('history').appendChild(li);
        }
        //console.log(logs);
      });
    },
    popupHistory: function() {
      //app.openPopup('historyPopup', 'History');
      //app.reloadHistory();
      //document.getElementById('historyPopup').appendChild(document.getElementById('history'));
    },
    priceProvider: null,
    setPriceProvider: function(provider) {
      this.priceProvider = provider;
    },

    initAirdrop: function() {
      setTimeout(function() {
        airdrop.getLeft(function(left, message){
          if (left > app.airdropMaxReward) {
            app.toggleAll('airdrop-button', true);
            if (!((config.airdrop.coin in app.data.wallets) && app.data.wallets[config.airdrop.coin].picked)) {
              if (!app.lockDialogOpened) {
                app.confirmBeforeContinue(
                  'Coffee Tokens Airdrop',
                  '<p>Coffee Token (CFT) is a utility token for Coffee Wallet Project. You can find out more <a href="#" onclick="osPlugins.openInSystemBrowser(\'https://tokens.coffee/\')">here</a>.</p>' +
                  '<div style="text-align:center"><img src="coins/cft.svg" width="32" alt="CFT"></div>' +
                  '<p>To promote the application we offer <strong>' + app.airdropMaxReward + '&nbsp;CFT</strong> for each user. You can get your tokens now or later at any time using "tools" tab.</p>' +
                  '<p>' + message + '</p>',
                  function(){
                    app.popupAirdrop();
                  },
                  'get&nbsp;now',
                  'later'
                );
              }
            };
          }
        });
      }, 1000);
    },

    collectAirdrop: function() {
      airdrop.collectAirdrop(function(txn){
        app.alertSuccess('Tokens were sent successfully. Your wallet should be updated in a minute. TXN: <u>' + txn + '</u>. ', config.airdrop.coin);
        for (var i=1; i<7; i++) {
          setTimeout(function() { app.wallets[config.airdrop.coin].refreshOnline(); }, 5000 * i * i);
        }
        app.popupAirdrop2();
      },function(message){
        app.alertError(message);
      });
    },

    popupAirdrop: function() {
      if ((config.airdrop.coin in app.data.wallets) && app.data.wallets[config.airdrop.coin].picked) {
        return app.popupAirdrop2();
      }

      app.openPopup('airdropPopup', 'Coffee&nbsp;Tokens&nbsp;Airdrop', 'coins/cft.svg');

      document.getElementById('airdropTasks').innerHTML = '';
      var total = 0;
      for (var i=0; i< airdrop.tasks.length; i++) {
        var completed = airdrop.tasks[i][3]();
        var tr1 = document.createElement('tr');
        if (completed) {
          total += airdrop.tasks[i][2];
          tr1.classList.add('completed');
        }
        if (airdrop.tasks[i][2] == 0) {
          tr1.innerHTML += '<th colspan="2">(optional) ' + airdrop.tasks[i][0] + '</th>';
        } else {
          tr1.innerHTML += '<th>' + airdrop.tasks[i][0] + '</th>';
          tr1.innerHTML += '<td class="reward">' + airdrop.tasks[i][2]  + ' ' + config.airdrop.coin + '</td>';
        }

        if (completed) {
          tr1.innerHTML += '<td class="status"><img src="icons/tick.png" width="22" /></td>';
        } else {
          var takeAction = document.createElement('button');
          takeAction.innerHTML = 'go';
          takeAction.onclick = airdrop.tasks[i][4];
          var td = document.createElement('td');
          td.appendChild(takeAction);
          tr1.appendChild(td);
        }
        document.getElementById('airdropTasks').appendChild(tr1);

        var tr2 = document.createElement('tr');
        tr2.innerHTML = '<td class="description" colspan="3">' + airdrop.tasks[i][1]  + '</td>';
        document.getElementById('airdropTasks').appendChild(tr2);
      }

      document.getElementById('airdropTotal').innerHTML = '' + total + ' ' + config.airdrop.coin;

      airdrop.getLeft(function(left, message){
        document.getElementById('collectAirdropButton').classList.toggle('hidden', left == 0);
        document.getElementById('airdropStatus').innerHTML = message;
      });
    },

    popupAirdrop2: function() {
      app.openPopup('airdropPopup2', 'Coffee&nbsp;Tokens&nbsp;Airdrop', 'coins/cft.svg');
      var addr = app.data.wallets[config.airdrop.coin].addr;
      var linkTxt = 'https://wallet.coffee/install?r=' + addr.substring(2, 18);
      document.getElementById('airdropRefLink').innerHTML = linkTxt;

      document.getElementById('airdropRefLinkQR').innerHTML = '';
      new QRCode(document.getElementById('airdropRefLinkQR'), {
        text: linkTxt,
      	width: 160,
      	height: 160,
        colorLight: '#ffffff', /*#f7f5f2*/
        colorDark: '#463f3a'
      });

      airdrop.getLeft(function(left, message){
        document.getElementById('airdropStatus2').innerHTML = message;
      });
    },


    updateAllValues: function() {
      var totalOnline = 0;
      var totalOffline = 0;
      var orders = [];
      for (var key in app.wallets) {
        var walletOnline = app.wallets[key].updateOnlineValue();
        var walletOffline = app.wallets[key].updateOfflineValue();
        totalOnline += walletOnline;
        totalOffline += walletOffline;
        orders.push([key, walletOnline + walletOffline]);
      }
      orders.sort(function(a, b) {
          return a[1] - b[1];
      });
      for (var i = orders.length - 1; i >= 0; i--) {
          var row = app.wallets[orders[i][0]].row;
          row.parentNode.appendChild(row);
      }

      document.getElementById('grandTotal').innerHTML = formatMoney(totalOnline + totalOffline, app.priceProvider.getUnit());
      document.getElementById('totalOnline').innerHTML = formatMoney(totalOnline, app.priceProvider.getUnit());

    },

    updateMarketCap: function(callback) {
      var that = this;
      var spinner = function(){
        document.getElementById('refresh').classList.toggle('spinning', that.spinning);
        if (that.spinning) {
          setTimeout(spinner, 1000);
        } else {
          //dependant
          document.getElementById('refresh').classList.toggle('error', that.netError);
          callback && callback();
        }
      };
      that.spinning = true;
      that.netError = false;
      spinner();
      app.updateAllValues();
      this.priceProvider.updatePrices(function(){
        app.updateAllValues();
        app.spinning = false;
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

    toggleAll: function(className, show) {
      var elements = document.getElementsByClassName(className);
      for (var i = 0; i < elements.length; i++) {
          elements[i].classList.toggle('hidden', !show);
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

    openPopup: function(id, title, bgimg, previousPopupCall) {

      this.previousPopupCall = previousPopupCall;
      this.closeMenu();
      document.getElementById('popup').classList.add('show');

      this.setCurrentCoinIcon(bgimg);
      this.showOneChildOf('popupContent', id);

      document.getElementById('popupContent').scrollTop = 0;
      app.togglePopupHeaderFix();
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
      if (this.previousPopupCall) {
        this.previousPopupCall();
      }
      this.previousPopupCall = null;
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
      //console.log(value);
      app.authenticateBeforeContinue(
        'Import ' + app.importingWallet.handler.code + ' Private Key',
        'Are You sure you want to import new private key? Current private key will be replaced. ' +
        'You might loose your funds if you havent make any backup.' ,
        function() {
          app.importingWallet.data.privateKey = value;
          app.importingWallet.data.addr = app.importingWallet.handler.addrFromPrivateKey(value);
          app.data.save();
          app.closeForm();
          app.importingWallet.refreshOnline();
        });
    },

    showExportKeysReminderIfRequired: function(callback) {
      var counter = this.settings.get('keyBackedUpReminderCounter', 0);
      counter ++;
      if (counter > 2) counter = 0;
      this.settings.set('keyBackedUpReminderCounter', counter);
      if (counter == 0) {
        this.confirmBeforeContinue(
          'backup your keys',
          '<p>All your private keys are generated from a <b>12-word BIP39 phrase</b>. It is extremely important that you <b>backup</b> this phrase safely.</p>' +
          '<p>This reminder will keep showing up until you use <b>"backup wallets"</b> menu option.</p>',
          function(){
            callback(true);
          }
        );
      } else {
        callback(false);
      }
    },

    exportAllKeys: function() {
      this.closeMenu();

      var mnemonicParts = app.data.wallets.bip39.mnemonic.split(' ');
      var mnemonicMessage = '<ol class="mnemonic">';
      for (var i =0; i<mnemonicParts.length; i++) {
        mnemonicMessage += '<li><span>' + mnemonicParts[i] + '</span></li>';
      }
      mnemonicMessage += '</ol>';

      app.authenticateBeforeContinue(
        'Backup Wallets',
        'On the next screen, you will see your 12-word BIP39 recovery passphrase. It might be used to recover your keys if you loose access to this device. <br/><ul>' +
        '<li>Don\'t show your mnemonic to anyone.</li>' +
        '<li>Do not take a screenshot.</li>' +
        '<li>Do not send it over unencrypted network.</li>' +
        '<li>Write it down and store in a secure location.</li></ul>',
        function() {
            app.settings.set('keyBackedUp', false);
            app.confirmBeforeContinue(
              'your backup phrase',
              mnemonicMessage,
              function() {
                app.settings.set('keyBackedUp', true);
              },
              'done'
              //'remind&nbsp;later'
            );
        }
      );
      //var text = JSON.stringify(app.data.wallets);
      //var url = 'data:text/plain;charset=utf-8,' + encodeURIComponent(text);
      //cordova.plugins.clipboard.copy(text);
      //app.alertInfo('copied to clipboard');
    },

    importAllKeys: function() {
      this.closeMenu();
      var element = document.createElement('input');
      element.type = "file";
      document.body.appendChild(element);
      element.click();
      element.onchange = function(event){
        var fr = new FileReader();
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
      button.onclick = callback;
      fastTap(button);
      li.appendChild(button);
      return li;
    },
    doExchange: function() {
      var provider = document.getElementById("exchangeProvider").value == "now" ? exchangeNow : exchangeChangelly;

      var sellCoin = document.getElementById("exchangeSellCoin").value;
      var sellAmmount = app.wallets[sellCoin].handler.floatValueToSystemValue(parseFloat(document.getElementById("exchangeSellAmmount").value));
      var buyCoin = document.getElementById("exchangeBuyCoin").value;
      var fee = app.exchangeDefaultFees[sellCoin];
      var buyAmmount = document.getElementById("exchangeBuyAmmount").value;

      var displaySellAmount = app.wallets[sellCoin].handler.systemValueToDisplayValue(sellAmmount);
      provider.createTransaction(
        sellCoin,
        buyCoin,
        app.wallets[sellCoin].handler.systemValueToFloatValue(sellAmmount),
        app.wallets[buyCoin].data.addr,
        function(ret){
          app.alertInfo('Changelly exchange id ' + ret.id + ' started.', sellCoin, ret);

          app.authenticateBeforeContinue(
            '<table class="transactionSummary">' +
            '<tr class="first"><td><img class="coinIcon" src="coins/' + app.wallets[sellCoin].handler.icon + '.svg"/></td><td><img style="width:65%" src="icons/sendglyph.png"/></td><td><img class="coinIcon" src="coins/' + app.wallets[buyCoin].handler.icon + '.svg"/></td></tr>' +
            '<tr class="second"><td>' + shortAmount(displaySellAmount, sellCoin, 13) + '</td><td></td><td>' + shortAmount(buyAmmount, buyCoin, 13) + '</td></tr>' +
            '</table>',
            '<table class="niceTable">' +
            '<tr><th colspan="2" style="width:26%;">payinAddress:</th></tr><tr><td colspan="2">' + ret.payinAddress + '</td></tr>' +
            '<tr><th colspan="2">amount:</th></tr><tr><td style="width:50%;">' + displaySellAmount + ' ' + sellCoin + '</td><td>' + app.priceProvider.convert(app.wallets[sellCoin].handler.systemValueToFloatValue(sellAmmount), sellCoin) + '</td></tr>' +
            '<tr><th colspan="2">fee:</th></tr><tr><td>' + app.wallets[sellCoin].handler.getFeeDisplay(fee) + '</td><td>' + app.wallets[sellCoin].handler.getFeeValueDisplay(fee) + '</td></tr>' +
            '<tr><th colspan="2">estimated return:</th></tr><tr><td>' + (buyAmmount) + ' ' + buyCoin + '</td><td>' + app.priceProvider.convert(buyAmmount, buyCoin) + '</td></tr>' +
            '<tr><th colspan="2">' + provider.name + ' ID:</th></tr><tr><td colspan="2">' + ret.id + '</td></tr>' +
            '</table>'
            ,
            function(){
              app.wallets[sellCoin].handler.sendPayment(app.wallets[sellCoin].data.privateKey, ret.payinAddress, sellAmmount, fee);
              app.closePopup();
              setTimeout(function() { app.wallets[sellCoin].refreshOnline(); }, 2000);
              setTimeout(function() { app.alertInfo('Please refresh your ' + buyCoin + ' balance in few minutes.', buyCoin); }, 3000);
            }
          );
        }
      );
    },
    updateExchange: function() {
      var provider = document.getElementById("exchangeProvider").value == "now" ? exchangeNow : exchangeChangelly;
      if (provider.key != app.lastExchangeProvider) {
        document.getElementById("exchangeDescription").innerHTML =
          provider.description + '<br/>' +
          'Refer to <a href="#" onclick="osPlugins.openInSystemBrowser(\'' + provider.url + '\');">' + provider.url + '</a> for more info.';

        (new Select(document.getElementById("exchangeSellCoin"))).setOptions({}, null);
        (new Select(document.getElementById("exchangeBuyCoin"))).setOptions({}, null);
        app.lastExchangeProvider = provider.key;
        app.getExchangeableCoins(provider, function(currencies){
          var available = {'':{'name': '- please select -'}};
          for (var i in currencies) {
            if (currencies[i] in app.wallets) {
              available[currencies[i]] = {'name': currencies[i]};
            }
          }
          (new Select(document.getElementById("exchangeSellCoin"))).setOptions(available, sellCoin);
          (new Select(document.getElementById("exchangeBuyCoin"))).setOptions(available, buyCoin);
          app.updateExchange();
        });
      }

      var sellCoin = document.getElementById("exchangeSellCoin").value;
      var sellAmmount = document.getElementById("exchangeSellAmmount").value;
      var buyCoin = document.getElementById("exchangeBuyCoin").value;

      var fee = null;

      if (sellCoin) {
        if (sellCoin in app.exchangeDefaultFees) {
          fee = app.exchangeDefaultFees[sellCoin];
          document.getElementById("exchangeSellFee").textContent = app.wallets[sellCoin].handler.getFeeDisplay(fee);
        } else {
          document.getElementById("exchangeSellFee").textContent = 'pending...';
          var fees = app.wallets[sellCoin].handler.getFees(function(fees){
            app.exchangeDefaultFees[sellCoin] = fees[Math.floor((fees.length - 1) / 2)];
            app.updateExchange();
          });
        }
        //TODO system value
        document.getElementById("exchangeSellMax").textContent = app.wallets[sellCoin].data.balance - (fee === null ? 0 : app.wallets[sellCoin].handler.estimateFeeFloat(fee));
        document.getElementById("exchangeSellValue").innerHTML = app.priceProvider.convert(sellAmmount, sellCoin);
      } else {
        document.getElementById("exchangeSellMax").textContent = '';
        document.getElementById("exchangeSellValue").textContent = '';
        document.getElementById("exchangeSellFee").textContent = '';
      }

      var goodPair = sellCoin && buyCoin && (sellCoin != buyCoin);
      if (goodPair) {
        var minKey = sellCoin + '#' + buyCoin;
        if (minKey in app.exchangeMinAmmounts[provider.key]) {
          document.getElementById("exchangeSellMin").textContent = app.exchangeMinAmmounts[provider.key][minKey];
        } else {
          document.getElementById("exchangeSellMin").textContent = '';
          provider.getMinAmount(sellCoin, buyCoin, function(ret){
            app.exchangeMinAmmounts[provider.key][minKey] = ret;
            document.getElementById("exchangeSellMin").textContent = app.exchangeMinAmmounts[provider.key][minKey];
          });
        }
        /*changelly.getTransactions(buyCoin, app.wallets[buyCoin].data.addr, function(ret){
          console.log(ret);
        });*/
      } else {
        document.getElementById("exchangeSellMin").textContent = '';
      }

      if (goodPair && (sellAmmount > 0)) {
        provider.estimateExchangeAmount(
          sellCoin,
          buyCoin,
          sellAmmount,
          function(ret){
            document.getElementById("exchangeBuyAmmount").value = ret;
            document.getElementById("exchangeBuyValue").innerHTML = app.priceProvider.convert(ret, buyCoin);
          }
        );
      } else {
        document.getElementById("exchangeBuyAmmount").value = 0;
        document.getElementById("exchangeBuyValue").textContent = '';
      }
      document.getElementById("exchangeButton").disabled = !(goodPair && (sellAmmount > 0) && (fee !== null));
    },

    getExchangeableCoins: function(provider, callback) {
      provider.getCurrencies(function(currencies){
        var ret = new Array();
        for (var i in currencies) {
          var key = currencies[i].toUpperCase();
          if (key in allCoinApis && 'sendPayment' in allCoinApis[key]) {
            ret.push(key);
          }
        }
        callback(ret);
      });
    },

    popupExchange: function(sellCoin, buyCoin) {
      this.exchangeDefaultFees = {};
      this.exchangeMinAmmounts = {'now' : {}, 'changelly' : {}};

      document.getElementById("exchangeSellAmmount").value = 0;
      this.openPopup('exchangePopup', 'Exchange', 'icons/changelly_color.png');
      app.settings.set('airdropTaskExchange', true);

      app.updateExchange();
    },
    cancelSentViaMessage: function(coin, pk) {
      navigator.notification.confirm('Are you sure you want to CANCEL this? Recipients of message will no longer be able to redeem those coins.',
      function(){
        app.handleReceiveMessage(coin, pk);
      });
    },
    popupSendViaMessage: function() {
      this.openPopup('sendViaMessagePopup', 'send via message', 'icons/messageglyph.png');
      app.settings.set('airdropTaskSendViaMessage', true);

      Logger.getLogs(function(logs){
        if (logs.length > 0){
          document.getElementById('sendViaMessageHistory').innerHTML = '';
          for (var i=0; i< logs.length; i++) {
            var tr = document.createElement('tr');
            var cancelLinkHtml = '<a href="#" onclick="app.cancelSentViaMessage(\'' + logs[i].data.coin + '\',\'' + logs[i].data.pk + '\');">CANCEL</a>';
            var resendLinkHtml = '<a href="#" onclick="app.sendSocialPaymentShare(\'' + logs[i].data.coin + '\', \'\', \'' + logs[i].data.pk + '\');">RESEND</a>';

            tr.innerHTML = '<td>' + (new Date(logs[i].ts)).toUTCString()  + '</td><td>'
            + logs[i].description + '</td><td>'
            + cancelLinkHtml + '&nbsp;' + resendLinkHtml + '</td>';
            document.getElementById('sendViaMessageHistory').appendChild(tr);
          }
        }
      }, 'sendasmessage');
      //coin shortcuts
      document.getElementById('sendViaMessageButtons').innerHTML = '';
      var empty = true;
      for (var coin in app.wallets){
        if (app.canSendViaMessage(app.wallets[coin].handler)) {
            empty = false;
            document.getElementById('sendViaMessageButtons').appendChild(new CoinButton(
              app.wallets[coin].handler,
              false,
              function(coin){
                if (app.wallets[coin.code].data.balance != 0 ) {
                  app.popupSendSocial(app.wallets[coin.code]);
                } else {
                  app.alertInfo('Can\'t sent via message. Wallet is empty.', coin.code);
                }
              }
            ));
        }
      }
      if (empty) {
        document.getElementById('sendViaMessageButtons').innerHTML = 'You have no coins that can be sent via message.';
      }
    },
    canSendViaMessage: function(handler) {
      return ('newRandomPrivateKey' in handler) && (!('feeCoin' in handler));
    },
    popupCoinInfo: function(wallet) {
      this.openPopup('coinInfoPopup', wallet.handler.longname, 'coins/' + wallet.handler.icon + '.svg');

      document.getElementById('coinInfoName').innerHTML = wallet.handler.code;
      document.getElementById('coinInfoSubName').innerHTML = wallet.handler.longname;
      document.getElementById('coinInfoCurrentPrice').innerHTML =
      'current price: ' + this.priceProvider.getPrice(wallet.handler.code) + ' ' + this.priceProvider.getUnit();

      document.getElementById('coinInfoButtons').innerHTML = '';

      document.getElementById('coinInfoButtons').appendChild(createButton('receive', 'receive', ('newPrivateKey' in wallet.handler) ? function(){app.popupReceivePayment(wallet);} : null));
      document.getElementById('coinInfoButtons').appendChild(createButton('send', 'send', ('sendPayment' in wallet.handler) ? function(){app.popupSendPayment(wallet);} : null));

      document.getElementById('coinInfoButtons').appendChild('getBalance' in wallet.handler ? wallet.refreshButton2 : createButton('refresh', 'refresh', null));
      document.getElementById('coinInfoButtons').appendChild(createButton('list', 'portfolio', function(){app.popupOfflineAssets(wallet);}));



      var advanced = document.createElement('ul');
      advanced.classList.add('advancedActions');
      var advancedWallet = wallet;

      if (app.canSendViaMessage(wallet.handler)) {
        advanced.appendChild(app.createAdvancedOption('message', 'send via message', function(){
          app.popupSendSocial(wallet);
        }));
      }

      /* TODO
      if ('exchangeableCoinsCache' in app && (app.exchangeableCoinsCache.indexOf(wallet.handler.code) != -1)) {
        advanced.appendChild(app.createAdvancedOption('sell', 'sell coin', function(){
          app.popupExchange(wallet.handler.code, null);
        }));
        advanced.appendChild(app.createAdvancedOption('buy', 'buy coin', function(){
          app.popupExchange(null, wallet.handler.code);
        }));
      }
      */

      if ('explorerLinkAddr' in wallet.handler) {
        advanced.appendChild(app.createAdvancedOption('link', 'history (external)', function(){
          osPlugins.openInSystemBrowser(wallet.handler.explorerLinkAddr(wallet.data.addr));
        }));
      }

      if ('sendPayment' in wallet.handler) {
        advanced.appendChild(app.createAdvancedOption('sendall', 'send all', function(){
          app.popupSendPayment(wallet, wallet.data.systemBalance);
        }));
      }

      //advanced.appendChild(app.createAdvancedOption('send', 'export private key', app.showExportPrivateKeyPopup.bind(app, advancedWallet)));
      //advanced.appendChild(app.createAdvancedOption('receive', 'import private key', app.showImportPrivateKeyPopup.bind(app, advancedWallet)));

      var links = '<ul>';
      for (var name in wallet.handler.links) {
        links += '<li><a href="#" onclick="osPlugins.openInSystemBrowser(\'' + wallet.handler.links[name] + '\');">' + name + '</a></li>';
      }
      links += '</ul>';

      advanced.appendChild(app.createAdvancedOption('about', 'about', function(){
        app.confirmBeforeContinue(wallet.handler.longname + ' (' + wallet.handler.code + ')',
          '<div style="text-align:center;"><img width="64" src="coins/' + wallet.handler.icon + '.svg"/></div>' +
          wallet.handler.description + links,
          function(){},
          'close'
        );
      }));

      if (wallet.totalOffline + wallet.totalOnline <= 0) {
        advanced.appendChild(app.createAdvancedOption('remove', 'remove wallet', app.removeCoin.bind(app, advancedWallet)));
      }

      //document.getElementById('coinInfoWallet').appendChild(getCoinAddrIcon(wallet.handler, wallet.data.addr));

      document.getElementById('coinInfoWallet').innerHTML = '<div style="overflow:auto; padding: 0 12px;">' +
      '<div style="float:left; text-align:left;">' +
      'wallet:<br/>' +
      (('sendPayment' in wallet.handler) ? (
      '<strong id="coinInfoValueContainer"></strong><br/>' +
      '<span id="coinInfoBalanceContainer"></span>') : 'Not supported yet.<br/>Portfolio use only.') +
      '</div>' +
      '<div style="float:right; text-align:right;">' +
      'portfolio:<br/>' +
      '<strong id="coinInfoPortfolioValueContainer"></strong><br/>' +
      '<span id="coinInfoPortfolioBalanceContainer"></span>' +
      '</div>';

      if ('sendPayment' in wallet.handler) {
        document.getElementById('coinInfoBalanceContainer').appendChild(wallet.onlineAmountDetail);
        document.getElementById('coinInfoValueContainer').appendChild(wallet.onlineValueDetail);
      }

      document.getElementById('coinInfoPortfolioBalanceContainer').appendChild(wallet.offlineAmountDetail);
      document.getElementById('coinInfoPortfolioValueContainer').appendChild(wallet.offlineValueDetail);


      if (advanced.children.length > 0) {
        document.getElementById('coinInfoActions').innerHTML = '';
        document.getElementById('coinInfoActions').append(advanced);
      }
    },

    filterAddCoinPopup: function() {
      var query = document.getElementById('addCoinFilter').value.toUpperCase();
      //var onlySupportedRead = document.getElementById('addCoinOnlySupportedRead').checked;
      var includeTestCoins = (app.settings.get('enableTestCoins', false) == "true");
      var onlySupportedWrite = document.getElementById('addCoinOnlySupportedWrite').checked;
      var limit = 24;
      var allCoins = document.getElementById('allCoins');
      while (allCoins.firstChild) { allCoins.removeChild(allCoins.firstChild); }

      for (var i=0; i< allCoinApisByRank.length; i++){
        var coin = allCoinApisByRank[i];
        var show = coin._search.search(query) != -1;
        //if (onlySupportedRead) show = show && ('getBalance' in coin);
        if (onlySupportedWrite) show = show && ('sendPayment' in coin);
        if (!includeTestCoins) show = show && (!('testCoin' in coin) || (!coin.testCoin));
        if (show) {
          limit --;
          if (limit >= 0) {
            if (!('_button' in coin)) {
              allCoinApisByRank[i]._button = new CoinButton(
                coin,
                coin.code in app.data.wallets && app.data.wallets[coin.code].enabled,
                function(coin){
                  app.closePopup();
                  setTimeout(function(){
                    app.addOrActivateCoin(coin.code, function(){
                      coin._button.classList.add('active');
                    });
                  }, 100);
                });
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
    },

    popupAddCoin: function() {
      this.openPopup('addCoinPopup', 'add cryptos');
      setTimeout(function(){
        if (typeof app.popupGenerated == 'undefined') {
          app.popupGenerated = true;
          document.getElementById('addCoinFilter').onkeyup = app.filterAddCoinPopup;
          document.getElementById('addCoinFilter').onchange = app.filterAddCoinPopup;
          //document.getElementById('addCoinOnlySupportedRead').onchange = app.filterAddCoinPopup;
          document.getElementById('addCoinOnlySupportedWrite').onchange = app.filterAddCoinPopup;
          for (var i=0; i< allCoinApisByRank.length; i++) {
            allCoinApisByRank[i]._search = (allCoinApisByRank[i].name + ' '+ allCoinApisByRank[i].code + ' ' + allCoinApisByRank[i].longname).toUpperCase();
          }
        }
        app.filterAddCoinPopup();
      }, 100);
    },

    popupHelp: function() {
        this.openPopup('helpPopup', 'Help');
    },
    popupFeedback: function() {
        //this.openPopup('feedbackPopup', 'Feedback');
    },

    popupPriceSettings: function() {
        this.openPopup('priceSettingsPopup', 'Settings');

        this.priceProviderSelect.setValue(this.settings.get('priceProvider', 0));
        this.priceUnitSelect.setValue(this.settings.get('priceUnit', this.priceProvider.defaultUnit));

        document.getElementById('settingsEnableTestCoins').checked = (this.settings.get('enableTestCoins', false) == "true");

    },
    savePriceSettings: function() {
        this.closePopup();

        this.settings.set('enableTestCoins', document.getElementById('settingsEnableTestCoins').checked);

        this.settings.set('priceProvider', parseInt(this.priceProviderSelect.getValue()));
        this.setPriceProvider(allPriceProviders[this.settings.get('priceProvider')]);

        this.settings.set('priceUnit', this.priceUnitSelect.getValue());
        this.priceProvider.setUnit(this.settings.get('priceUnit'));

        this.updateMarketCap();
    },
    handleAnyQRCode: function(addr, args) {

      if ('escrowPrivateKey' in args) {
        return app.handleReceiveMessage(args.coinCode, args.escrowPrivateKey);
      }

      if (!args.coin && args.coinCode && (args.coinCode in allCoinApis)) {
        args.coin = allCoinApis[args.coinCode].name;
      }
      if (!args.coin) {
        this.alertError('unknown code');
        return;
      }

      this.alertInfo('detected ' + args.coin + ' address');
      for (var key in this.wallets) {
        if (this.wallets[key].handler.name == args.coin) {
          if ('sendPayment' in this.wallets[key].handler) {
            var afterSendCallback = ('callback' in args ? args['callback'] : null);
            this.popupSendPayment(this.wallets[key], null, afterSendCallback);
            this.pasteToSendForm(addr, args);
          } else {
            this.alertError('coin ' + args.coin + ' is not yet supported');
          }
          return;
        }
      }
      this.alertInfo('coin ' + args.coin + ' is not in your active wallets or is unknown');
    },

    pasteToSendForm: function(addr, args) {
      if (args.coin) {
        if (this.sendWallet.handler.name != args.coin) {
          this.alertInfo('Warning: This seems like a ' + args.coin + ' address but you are sending ' + this.sendWallet.handler.name + '!');
        }
      }
      document.getElementById('sendCoinAddr').value = addr;
      app.validateAddr('sendCoinAddr');

      if ('amount' in args && args.amount){
        document.getElementById('sendCoinAmount').value = parseFloat(args.amount);
        app.coinUpdateValue('sendCoin', app.sendWallet.handler);
        app.sendCoinValidateAmount('sendCoin');
      }
    },
    _parseTransactionText: function(text, callback) {
      if (text.startsWith('coffee:')) {
        var parts = text.split('/');

        if (parts.length == 4 && parts[1] == '' && parts[0] == 'coffee:' && !parts[3].startsWith('?')) {
          return callback(null, {
            coinCode : parts[2],
            escrowPrivateKey : parts[3]
          });
        } else if (parts.length == 4 && parts[1] == '' && parts[0] == 'coffee:') {
          text = parts[2] + parts[3];
        } else if (parts.length == 3 && parts[1] == '' && parts[0] == 'coffee:') {
          text = parts[2];
        } else {
          app.alertError('unknown url format: ' + text);
          return;
        }
      }

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
        if (kp.length>1) args[kp[0]] = decodeURIComponent(kp[1]);
      });
      if ('r' in args) {
        app.alertInfo('BIP72 address found. quering for payment details...');

        var oReq = new XMLHttpRequest();
        oReq.open("GET", args.r);
        oReq.addEventListener("load", function(){
          var paymentRequest = JSON.parse(this.responseText);
          //console.log(paymentRequest);
          var coin = 'unknown';
          if (paymentRequest.currency == 'BTC' && paymentRequest.network == 'main') coin = 'bitcoin';
          if (paymentRequest.currency == 'BTC' && paymentRequest.network == 'test') coin = 'bitcoin-test';
          if (paymentRequest.currency == 'BCH' && paymentRequest.network == 'main') coin = 'bitcoin-cash';

          if (paymentRequest.outputs.length != 1) {
            app.alertError('payment requests with multiple outputs are not supported. sorry.');
          } else {
            callback(paymentRequest.outputs[0].address, {'coin': coin, 'amount': paymentRequest.outputs[0].amount / 100000000});
          }
        });
        oReq.setRequestHeader('Accept', 'application/payment-request');
        //oReq.setRequestHeader('Accept', 'application/bitcoin-paymentrequest');
        oReq.send();
      } else {
        callback(addr, args);
      }
    },
    pasteAnyClipboard: function() {
      app.pasteClipboard(app.handleAnyQRCode.bind(app));
    },
    scanAnyQrCode: function() {
      app.scanQrCode(app.handleAnyQRCode.bind(app));
    },
    pasteClipboard: function(callback) {
      var that = this;
      cordova.plugins.clipboard.paste(function(text){
        that._parseTransactionText(text, callback);
      });
    },
    scanQrCode: function(callback) {
      cordova.plugins.barcodeScanner.scan(
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

    popupOfflineAssets: function(wallet, idToUpdate) {

      document.getElementById('offlineAssets').innerHTML = '';
      for (var i=0; i<wallet.offlineWallets.length; i++) {
        var a = new Asset(wallet, i + 1, wallet.offlineWallets[i]);
        document.getElementById('offlineAssets').appendChild(a.row);
        if (typeof idToUpdate != 'undefined' && idToUpdate == i + 1) {
          a.refreshBalance();
        }
      }

      this.openPopup('offlineAssetsPopup', wallet.handler.code + ' portfolio', 'coins/' + wallet.handler.icon + '.svg');

      document.getElementById('offlineAssetsTitle').innerHTML = wallet.handler.code + ' portfolio';
      document.getElementById('offlineAssetsSubtitle').innerHTML = 'Your ' + wallet.handler.longname + ' assets';
      document.getElementById('addAddressButton').classList.toggle('hidden', !('getBalance' in wallet.handler));
      document.getElementById('newAddressButton').classList.toggle('hidden', !('newRandomPrivateKey' in wallet.handler));
      this.offlineAssetWallet = wallet;
    },

    pasteToField: function(field, addr, args) {
      document.getElementById(field).value = addr;
    },

    popupOfflineAssetDetails: function(asset) {

      activeAsset = asset;

      this.openPopup('offlineAssetDetails', app.offlineAssetWallet.handler.code + ' portfolio asset', 'coins/' + app.offlineAssetWallet.handler.icon + '.svg', function(){
        app.popupOfflineAssets(app.offlineAssetWallet);
      });

      document.getElementById('offlineAssetIcon').innerHTML = '';
      document.getElementById('offlineAssetIcon').appendChild(asset.assetIcon);

      document.getElementById('offlineAssetName').innerHTML = asset.data.comment;
      document.getElementById('offlineAssetSubName').innerHTML = app.offlineAssetWallet.handler.code + ' portfolio asset';

      document.getElementById('offlineAssetButtons').innerHTML = '';

      if (asset.data.addr) {
        document.getElementById('offlineAssetButtons').appendChild(createButton('receive', 'receive', asset.actionReceive));
        document.getElementById('offlineAssetButtons').appendChild(asset.refreshButton ? asset.refreshButton : createButton('refresh', 'refresh', null));
      } else {
        document.getElementById('offlineAssetButtons').appendChild(createButton('removef', 'remove', asset.removeAction));
        var spacer = document.createElement('div');
        spacer.className = 'button';
        document.getElementById('offlineAssetButtons').appendChild(spacer);
      }

      document.getElementById('offlineAssetButtons').appendChild(createButton('edit', 'edit', function(){
        app.popupEditOfflineAsset(asset);
      }));

      document.getElementById('offlineAssetActions').innerHTML = '';

      if (asset.data.addr) {
          var advanced = document.createElement('ul');
          advanced.classList.add('advancedActions');

          advanced.appendChild(app.createAdvancedOption('link', 'history (external)', asset.actionHistory));
          advanced.appendChild(app.createAdvancedOption('remove', 'remove', asset.removeAction));
          document.getElementById('offlineAssetActions').append(advanced);

          document.getElementById('offlineAssetInfo').innerHTML = '<p>This is an address in your portfolio that you are tracking.</p>' +
          '<p><strong>warning: </strong>Coffee Wallet does not know the private key for this address. Use only if you have it secured.</p>' +
          '<p>addr:&nbsp;<strong>' + asset.data.addr + '</strong></p>' +
          '<p>balance:&nbsp;<strong id="offlineAssetInfoBalanceContainer"></strong></p>' +
          '<p>value:&nbsp;<strong id="offlineAssetInfoValueContainer"></strong></p>';

          document.getElementById('offlineAssetInfoBalanceContainer').appendChild(asset.amount);
          document.getElementById('offlineAssetInfoValueContainer').appendChild(asset.value);


      } else {
          document.getElementById('offlineAssetInfo').innerHTML = '<p>This is a static balance in your portfolio.</p>' +
          '<p>balance: <strong>' + asset.data.balance + ' ' + app.offlineAssetWallet.handler.code + '</strong></p>' +
          '<p>value: <strong id="offlineAssetInfoValueContainer"></strong></p>';
          document.getElementById('offlineAssetInfoValueContainer').appendChild(asset.value);
      }

    },

    popupEditOfflineAsset: function(asset) {
      document.getElementById('addOfflineAssetAddr').value = asset.data.addr;
      app.validateAddr('addOfflineAssetAddr', true);

      document.getElementById('addOfflineAssetBalance').value = asset.data.balance;
      document.getElementById('addOfflineAssetComment').value = asset.data.comment;
      document.getElementById('addOfflineAssetAddrDiv').classList.toggle('hidden', asset.data.addr ? false : true);
      document.getElementById('addOfflineAssetAddrTools').classList.toggle('hidden', asset.data.addr ? false : true);
      document.getElementById('addOfflineAssetBalanceDiv').classList.toggle('hidden', asset.data.addr);


      document.getElementById('addOfflineAssetPopupSave').innerHTML = 'save';
      this.editAsset = true;
      this.openForm('addOfflineAssetPopup', 'edit ' + asset.wallet.handler.code + ' asset', 'coins/' + app.offlineAssetWallet.handler.icon + '.svg');
    },

    popupAddOfflineAsset: function(type, value) {
      document.getElementById('addOfflineAssetAddr').value = (type == 'addr' ? value : '');
      app.validateAddr('addOfflineAssetAddr', true);

      document.getElementById('addOfflineAssetBalance').value = (type == 'balance' ? value : '');
      document.getElementById('addOfflineAssetComment').value = '';
      document.getElementById('addOfflineAssetAddrDiv').classList.toggle('hidden', type == 'balance');
      document.getElementById('addOfflineAssetAddrTools').classList.toggle('hidden', type == 'balance');
      document.getElementById('addOfflineAssetBalanceDiv').classList.toggle('hidden', type == 'addr');

      document.getElementById('addOfflineAssetPopupSave').innerHTML = 'add';
      this.editAsset = false;
      this.openForm('addOfflineAssetPopup', 'add ' + this.offlineAssetWallet.handler.code + ' asset', 'coins/' + app.offlineAssetWallet.handler.icon + '.svg');
    },

    popupAddNewAddress: function() {

      var coinCode = app.offlineAssetWallet.handler.code;
      var coinName = app.offlineAssetWallet.handler.name;
      var randomPriv = app.offlineAssetWallet.handler.newRandomPrivateKey();
      var randomAddr = app.offlineAssetWallet.handler.addrFromPrivateKey(randomPriv);
      var randomPrivImg = this.generatePngWithQRCode(randomPriv, 350);
      var randomAddrImg = this.generatePngWithQRCode(coinName + ':' + randomAddr, 280);

      var html = '<html><h1>' + coinCode + ' wallet</h1>' +
        '<div style="text-align:right;"><h2>public key (address)</h2><img src="' + randomAddrImg + '"><h3>' + coinName + ':' + randomAddr + '</h3></div>'+
        '<hr/>' +
        '<h2>private key (secret)</h2><img src="' + randomPrivImg + '"><h3>' + randomPriv + '</h3>'+
        '<div style="position:absolute; bottom:0; right:0; text-align:right;">Share the public key to accept coins. <br/>Keep private key secret and safe. It allows your coins to be spent. <br/>Generated by Coffee Wallet ' + window.version + '</div>'+
        '</html>';

      function proceed(){
        app.data.addOfflineAsset(app.offlineAssetWallet.handler.code, {
          addr: randomAddr,
          balance: 0.0,
          systemBalance: 0,
          comment: 'paper wallet'
        });
        //refresh list
        app.popupOfflineAssets(app.offlineAssetWallet);
        app.confirmBeforeContinue('wallet created',
          '<strong>warning:</strong> Coffee Wallet <strong>does not</strong> store private keys for your portfolio! ' +
          'Use this address <strong>only</strong> after making the pdf you just saved secure. ' +
          'You will be able to spend funds from this wallet as long as you will have access to its private key!',
          function(){}
        );
      }

      osPlugins.generatePDF(html, coinCode + '-wallet',function(stats){
        proceed();
      },function(err) {
        app.alertError('error generating pdf wallet ' + err);
      });

    },

    saveOfflineAsset: function(){
      var data = {
        addr: document.getElementById('addOfflineAssetAddr').value,
        balance: parseFloat(document.getElementById('addOfflineAssetBalance').value) || 0.0,
        comment: document.getElementById('addOfflineAssetComment').value
      }

      if (!document.getElementById('addOfflineAssetAddrDiv').classList.contains('hidden')){
        if (!app.validateAddr('addOfflineAssetAddr')) {
          return false;
        }
      }
      var idToUpdate = 0;
      if (this.editAsset) {
        idToUpdate = activeAsset.id;
        this.data.updateOfflineAsset(activeAsset.wallet.handler.code, activeAsset.id, data);
      } else {
        idToUpdate = this.data.addOfflineAsset(this.offlineAssetWallet.handler.code, data);
      }
      this.closeForm();
      this.popupOfflineAssets(this.offlineAssetWallet, idToUpdate);
    },

    popupSendSocial: function(wallet) {
        this.popupSendPayment(wallet);
        this.toggleAll('normalSend', false);
        this.toggleAll('socialSend', true);
    },

    popupSendPayment: function(wallet, forceTotal, afterSendCallback) {
        app.openForm('sendPaymentPopup', 'send ' + wallet.handler.code, 'coins/' + wallet.handler.icon + '.svg');

        app.toggleAll('normalSend', true);
        app.toggleAll('socialSend', false);

        document.getElementById('sendCoinAddr').value = '';
        document.getElementById('sendCoinValue').value = '';

        //disable value edit for coins with no value
        document.getElementById('sendCoinValue').disabled = (this.priceProvider.getPrice(wallet.handler.code) == 0);
        document.getElementById('sendCoinAmount').value = '';
        document.getElementById('sendCoinAmount').readOnly = false;
        document.getElementById('sendCoinValue').readOnly = false;
        app.sendForceTotal = (typeof forceTotal == 'undefined') ? null : forceTotal;
        app.afterSendCallback = (typeof afterSendCallback == 'undefined') ? null : afterSendCallback;

        app.validateAddr('sendCoinAddr', true);
        app.sendCoinValidateAmount('sendCoin', true);

        document.getElementById('sendCoinName').innerHTML = wallet.handler.code;
        document.getElementById('sendFiatName').innerHTML = app.priceProvider.getUnit();
        app.sendWallet = wallet;

        app.sendFees = [];
        document.getElementById('sendCoinFee').rangeSlider.update({min: 0, max: 0, value: 0});

        document.getElementById('sendCoinFeeInfo').classList.add('default');

        app.sendCoinUpdateFee();

        if (app.sendForceTotal) {
          document.getElementById('sendCoinAmount').readOnly = true;
          document.getElementById('sendCoinValue').readOnly = true;
          document.getElementById('sendCoinAmount').value = app.sendWallet.handler.systemValueToDisplayValue(app.sendForceTotal);
          app.coinUpdateValue('sendCoin', app.sendWallet.handler);
          app.sendCoinValidateAmount('sendCoin');
        }

        wallet.handler.getFees(function(fees){
          document.getElementById('sendCoinFee').rangeSlider.update({min: 0, max: fees.length - 1, value: Math.floor((fees.length - 1) / 2)})
          app.sendFees = fees;
          app.sendCoinUpdateFee();
        });
    },

    validateAddr: function(element, focus) {
      var valid = false;
      var elem = document.getElementById(element);
      elem.parentElement.classList.remove('invalid');
      elem.parentElement.classList.remove('valid');
      elem.parentElement.lastElementChild.innerHTML = '';

      elem.parentElement.classList.toggle('filled', elem.value != '' || elem == document.activeElement);

      if (typeof focus == 'undefined') {

        valid = (element == 'addOfflineAssetAddr' ? app.offlineAssetWallet : this.sendWallet).handler.validateAddress(elem.value);

        elem.parentElement.classList.add(valid ? 'valid' : 'invalid');
        if (!valid) {
          elem.parentElement.lastElementChild.innerHTML = 'invalid address';
        }
      }
      return valid;
    },

    sendCoinValidateAmount: function(prefix, focus) {
      var valid = false;
      var amountElem = document.getElementById(prefix + 'Amount');
      var valueElem = document.getElementById(prefix + 'Value');
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

    sendCoinValidateFee: function() {
      if (this.sendFees && (document.getElementById('sendCoinFee').value in this.sendFees)) {
        return true;
      } else {
        app.alertError('please wait for fees update');
        return false;
      }
    },

    sendCoinUpdateFee: function(){
      if (this.sendFees && (document.getElementById('sendCoinFee').value in this.sendFees)) {
        var fee = this.sendFees[document.getElementById('sendCoinFee').value];
        if (app.sendForceTotal) {
          if ('feeCoin' in this.sendWallet.handler) {
            document.getElementById('sendCoinAmount').value = this.sendWallet.handler.systemValueToDisplayValue(
              app.sendForceTotal
            );
          } else {
            document.getElementById('sendCoinAmount').value = this.sendWallet.handler.systemValueToDisplayValue(
              this.sendWallet.handler.systemValuesDiff(app.sendForceTotal, this.sendWallet.handler.getFeeTotalCost(fee))
            );
          }
          app.coinUpdateValue('sendCoin', app.sendWallet.handler);
          app.sendCoinValidateAmount('sendCoin');
        }
        document.getElementById('feeAmount').innerHTML =
          this.sendWallet.handler.getFeeDisplay(fee) + '&nbsp;(' + this.sendWallet.handler.getFeeValueDisplay(fee) + ')';
        document.getElementById('feeTime').innerHTML = fee[1] + 'min';
      } else {
        document.getElementById('feeAmount').innerHTML = 'unknown';
        document.getElementById('feeTime').innerHTML = 'unknown';
      }
    },

    coinUpdateValue: function(prefix, handler) {
      var src = document.getElementById(prefix + 'Amount').value;
      document.getElementById(prefix + 'Value').value =
        src == '' ? '' : Number((src * this.priceProvider.getPrice(handler.code)).toFixed(2));
    },

    coinUpdateAmount: function(prefix, handler) {
      var src = document.getElementById(prefix + 'Value').value

      if (src == '') {
        document.getElementById(prefix + 'Amount').value = src;
      } else {
        var systemAmount = handler.floatValueToSystemValue(src / this.priceProvider.getPrice(handler.code));
        document.getElementById(prefix + 'Amount').value = handler.systemValueToDisplayValue(systemAmount);
      }


    },
    alertError: function(html, coin, debug) {
      this._alertMessage(html, coin, 'error');
    },
    alertInfo: function(html, coin, debug) {
      this._alertMessage(html, coin, 'info');
    },
    alertSuccess: function(html, coin, debug) {
      this._alertMessage(html, coin, 'success');
    },

    _alertMessage: function(html, coin, type, debug) {
      Logger.log(type, coin, html, debug);
      var alertTxt = this.preParseCoinMsg(html, coin);
      this._alertMessagePopup(type, alertTxt.length > 100 ? alertTxt.substr(0,98) + '...' : alertTxt);
    },

    _alertMessagePopup: function(type, html) {
      var msgDiv = document.createElement('div');
      msgDiv.classList.add('msg');
      msgDiv.classList.add(type);
      msgDiv.innerHTML = html;

      var closer = document.createElement("a");
      closer.classList.add('closer');
      var img = document.createElement("img");
      img.setAttribute('src', 'icons/close.png');
      closer.appendChild(img);
      closer.onclick = function(){ document.getElementById('messages').removeChild(msgDiv); msgDiv = null; };
      fastTap(closer);

      msgDiv.appendChild(closer);
      document.getElementById('messages').appendChild(msgDiv);
      setTimeout(function(){ msgDiv && msgDiv.classList.add('fadingout'); }, 5000);
      setTimeout(function(){ msgDiv && document.getElementById('messages').removeChild(msgDiv); }, 7000);
    },

    _alertJsError: function(html) {
      this._alertMessagePopup('error', html);
    },

    lockDialogOpened: null,
    lockDialogAuthenticate: false,
    lockDialogConfirmCallback: null,
    lockDialogCancelCallback: null,
    lockDialogCanCancel: null,

    lockDialogCancel: function() {
      app.lockDialogOpened = false;
      document.getElementById('lockPopup').classList.add('hidden');

      this.lockDialogConfirmCallback = null;
      var callback = this.lockDialogCancelCallback;
      this.lockDialogCancelCallback = null;
      callback && callback();
    },

    lockDialogConfirm: function() {
      app.lockDialogOpened = false;
      document.getElementById('lockPopup').classList.add('hidden');

      this.lockDialogCancelCallback = null;
      var callback = this.lockDialogConfirmCallback;
      this.lockDialogConfirmCallback = null;

      if (this.lockDialogAuthenticate && (device.platform == "Android")) {
        FingerprintAuth.isAvailable(function(result){
          if(result.isAvailable) {
            FingerprintAuth.encrypt(
              {
                clientId: "coffee",
                username: "user",
                password: "__dummy"
              },
              function(){
                app.alertSuccess("auth successfull");
                callback();
              }, function(err){
                app.alertError("auth error: " + err);
              }
            );
          } else {
            callback();
          }
        }, function(){
          callback();
        });
      } else if(this.lockDialogAuthenticate && (device.platform == "iOS")) {
        window.plugins.touchid.isAvailable(function(){
          window.plugins.touchid.verifyFingerprintWithCustomPasswordFallback(
            "Scan your fingerprint to confirm",
            function(){
              app.alertSuccess("auth successfull");
              callback();
            }, function(err){
              app.alertError("auth error: " + JSON.stringify(err));
            }
          );
        }, function(){
          callback();
        });
      } else {
        callback();
      }
    },

    authenticateBeforeContinue: function(title, message, authCallback) {
      //message = message; // + '<br/>If your device supports fingerprint/face scanner you will be asked to authenticate.';
      this.confirmBeforeContinue(title, message, authCallback, 'confirm', 'cancel');
      this.lockDialogAuthenticate = true;
    },

    confirmBeforeContinue: function(title, message, confirmCallback, confirmText, cancelText, cancelCallback) {
      this.lockDialogOpened = true;
      this.lockDialogAuthenticate = false;

      this.lockDialogConfirmCallback = confirmCallback;
      this.lockDialogCancelCallback = cancelCallback;

      document.getElementById('lockPopup').classList.remove('hidden');
      document.getElementById('lockPopupConfirm').classList.remove('hidden');
      document.getElementById('lockPopupConfirmText').innerHTML = (typeof confirmText != 'undefined') ? confirmText : 'confirm';
      this.lockDialogCanCancel = !(typeof cancelText == 'undefined');
      document.getElementById('lockPopupCancel').classList.toggle('hidden', !this.lockDialogCanCancel);
      document.getElementById('lockPopupCancelText').innerHTML = (typeof cancelText != 'undefined') ? cancelText : 'cancel';
      document.getElementById('lockTitle').innerHTML = title;
      document.getElementById('lockMessage').innerHTML = message;
    },

    generatePngWithQRCode: function(text, size) {
      var tmpElement = document.createElement('div');
      var qrcode = new QRCode(tmpElement, {
      	text: text,
      	width: size,
      	height: size,
      	colorDark : "#000000",
      	colorLight : "#ffffff"
      });
      return qrcode._oDrawing._elCanvas.toDataURL("image/png");
    },

    sendSocialPaymentShare: function(coin, displayAmount, tmpPrivateKey) {
      var receiveLink = coin + '/' + tmpPrivateKey; //'coffee://' +
      var subject = displayAmount + ' ' + coin + ' for you!';
      var message = subject + '\n' +
        'To receive ' + displayAmount + ' ' + coin + ' go to:\n' +
        'https://wallet.coffee/receive#' + receiveLink;

      osPlugins.shareDialog(subject, message, function() {
        app.alertInfo('Done. Recipient will now be able to withdraw this transfer.');
      }, function(msg) {
        app.alertError('Sharing failed with message: ' + msg);
      });
    },

    sendSocialPaymentCommit: function(coin, amount, fee) {

      var tmpPrivateKey = app.sendWallet.handler.newRandomPrivateKey();
      var tmpAddr = app.sendWallet.handler.addrFromPrivateKey(tmpPrivateKey);


      var displayAmount = app.sendWallet.handler.systemValueToDisplayValue(amount);

      Logger.logTransaction('sendasmessage', 'sent ' + displayAmount + ' ' + coin + ' as message', {coin:coin, pk:tmpPrivateKey});

      app.alertInfo('Sending to blockchain escrow...');
      app.sendWallet.handler.sendPayment(app.sendWallet.data.privateKey, tmpAddr, amount, fee);
      app.closeForm();

      app.sendSocialPaymentShare(coin, displayAmount, tmpPrivateKey);
    },
    sendSocialPayment: function() {

      if (!(this.sendCoinValidateAmount('sendCoin') && this.sendCoinValidateFee())) {
        return;
      }

      var coin = this.sendWallet.handler.code;
      var fee = this.sendFees[document.getElementById('sendCoinFee').value];
      var amount = this.sendWallet.handler.floatValueToSystemValue(parseFloat(document.getElementById('sendCoinAmount').value));
      var displayAmount = app.sendWallet.handler.systemValueToDisplayValue(amount);

      this.confirmBeforeContinue(
        'Warning!',
        '<p>"Send via message" feature is designed only to send <b>tiny ammounts</b> beetween two <b>trusted</b> parties when the receiver does not have a wallet yet.</p>' +
        '<p>It is as safe as the sending medium is. For example, if you are sending via email, everyone that has access to contents of this email (including sender) will be able to withdraw money before the recipient.</p>' +
        '<ul>' +
        '<li>Send only tiny ammounts.</li>' +
        '<li>Advise the recipient to withdraw ASAP.</li>' +
        '<li>Send over encrypted medium if possible.</li>' +
        '<li>Advise the recipient to use regular transfers hereafter.</li>' +
        '</ul>'
        ,
        function(){
          app.authenticateBeforeContinue(
            '<table class="transactionSummary">' +
            '<tr class="first"><td><img class="coinIcon" src="coins/' + app.sendWallet.handler.icon + '.svg"/></td><td><img style="width:65%" src="icons/sendglyph.png"/></td><td><img style="width:100%" src="icons/messageglyph.png"/></td></tr>' +
            '<tr class="second"><td>' + shortAmount(displayAmount, coin, 13) + '</td><td></td><td></td></tr>' +
            '</table>',
            '<table class="niceTable">' +
            '<tr><th colspan="2">amount:</th></tr><tr><td style="width:50%;">' + displayAmount + ' ' + coin + '</td><td>' + app.priceProvider.convert(app.sendWallet.handler.systemValueToFloatValue(amount), coin) + '</td></tr>' +
            '<tr><th colspan="2">fee:</th></tr><tr><td>' + app.sendWallet.handler.getFeeDisplay(fee) + '</td><td>' + app.sendWallet.handler.getFeeValueDisplay(fee) + '</td></tr>' +
            '</table>' +
            '<p>You will see your device share dialog in next step and will be able to select send medium.</p>' +
            '<p><strong>Warning:</strong> this feature uses an intermediate, escrow wallet. Recipient of this message will have to pay another network fee to claim it.</p>'
            ,
            function(){
              app.sendSocialPaymentCommit(coin, amount, fee);
            }
          );
        }
      );
    },

    addOrActivateCoin: function(code, callback) {
      if (code in app.data.wallets && app.data.wallets[code].enabled) {
        app.wallets[code].setActive(true);
        callback();
      } else if (code in allCoinApis) {
        app.data.addWallet(allCoinApis[code], function(){
          if (app.data.wallets[code].enabled) {
            app.addWalletWidget(app.data.wallets[code]);
            app.wallets[code].setActive(true);
            callback();
          }
        });
      } else {
        app.alertError('unknown coin ' + coin);
      }
    },

    proceedToReceiveMessage: function(handler, privateKey, balance, unconfirmed, defaultFee, callback) {

      var amount = handler.systemValuesDiff(balance, handler.getFeeTotalCost(defaultFee));
      var displayTotal = handler.systemValueToDisplayValue(balance);
      var displayAmount = handler.systemValueToDisplayValue(amount);
      //issues
      var warning = '';
      var hideConfirm = false;
      if (handler.systemValuesCompare(0, balance) != -1) {
        warning = '<strong>error:</strong> Escrow wallet is empty. Was it already claimed? If this is a fresh transfer please try again in a minute.';
        hideConfirm = true;
      } else if (handler.systemValuesCompare(0, amount) != -1) {
        warning = '<strong>error:</strong> Escrow wallet balance is less than required fee.';
        hideConfirm = true;
      } else if (handler.systemValuesCompare(0, unconfirmed) != 0) {
        warning = '<strong>warning:</strong> Escrow transaction is not yet confirmed. You can continue but in case of problems please try again after few minutes.';
      }

      app.confirmBeforeContinue(
        '<table class="transactionSummary">' +
        '<tr class="first"><td><img class="coinIcon" src="icons/messageglyph.png"/></td><td><img style="width:65%" src="icons/sendglyph.png"/></td><td><img style="width:100%" src="coins/' + handler.icon + '.svg"/></td></tr>' +
        '<tr class="second"><td></td><td></td><td>' + shortAmount(displayAmount, handler.code, 13) + '</td></tr>' +
        '</table>',
        'Somebody used "Send via message" function to send you ' + handler.code + '. Click "claim" to proceed and transfer contents to your wallet.' +
        '<table class="niceTable">' +
        '<tr><th colspan="2">total message content:</th></tr><tr><td style="width:50%;">' + displayTotal + ' ' + handler.code + '</td><td>' + app.priceProvider.convert(handler.systemValueToFloatValue(balance), handler.code) + '</td></tr>' +
        '<tr><th colspan="2">transaction fee:</th></tr><tr><td>' + handler.getFeeDisplay(defaultFee) + '</td><td>' + handler.getFeeValueDisplay(defaultFee) + '</td></tr>' +
        '<tr><th colspan="2">you will receive:</th></tr><tr><td style="width:50%;">' + displayAmount + ' ' + handler.code + '</td><td>' + app.priceProvider.convert(handler.systemValueToFloatValue(amount), handler.code) + '</td></tr>' +
        '</table>' +
        '<p>' + warning + '</p>',
        function(){
          app.addOrActivateCoin(handler.code, function(){
            handler.sendPayment(
              privateKey,
              app.wallets[handler.code].data.addr,
              amount,
              defaultFee
            );
            //TODO this is a temporary hack before the update loop/queue
            for (var i=1; i<10; i++) {
              setTimeout(function() { app.wallets[handler.code].refreshOnline(); }, 5000 * i * i);
            }
            callback && callback();
          });
        },
        'claim',
        'cancel',
        function() {
          callback && callback();
        }
      );
      if (hideConfirm) {
        document.getElementById('lockPopupConfirm').classList.add('hidden');
      }
    },

    handleReceiveMessage: function(coin, privateKey, callback) {
      if ((coin in allCoinApis) && app.canSendViaMessage(allCoinApis[coin])) {
        var handler = allCoinApis[coin];
        handler.getBalance(handler.addrFromPrivateKey(privateKey), function(balance, unconfirmed){
          setTimeout(function() {
            var fees = handler.getFees(function(fees){
              var defaultFee = fees[Math.floor((fees.length - 1) / 2)];
              app.proceedToReceiveMessage(handler, privateKey, balance, unconfirmed, defaultFee, callback);
            });
          }, 1000);
        }, function (error, code) {
          app.alertError(error, code);
          callback && callback();
        });
      } else {
        app.alertError('Don\'t know how to receive ' + coin);
        callback && callback();
      }
    },

    handleUrlOpened: function(url, callback) {
      var parts = url.split('/');
      if (parts.length == 4 && parts[0] == 'coffee:' && !parts[3].startsWith('?')) {
        app.handleReceiveMessage(parts[2], parts[3], callback);
      } else {
        //ignore callback not to show airdrop info on url open different than receive via msg.
        app._parseTransactionText(url, app.handleAnyQRCode.bind(app));
      }
    },

    onDataLoaded: function(callback) {
      if (typeof callback == 'undefined') {
        app.dataLoaded = true;
        if ('onDataLoadedCallback' in app) {
          app.onDataLoadedCallback(function(){
            app.initAirdrop();
          });
        } else {
          app.initAirdrop();
        }
      } else {
        //TODO chain:
        if ('dataLoaded' in app && app.dataLoaded == true) {
          callback();
        } else {
          app.onDataLoadedCallback = callback;
        }
      }
    },

    sendPayment: function() {

      if (!(this.validateAddr('sendCoinAddr') && this.sendCoinValidateAmount('sendCoin') && this.sendCoinValidateFee())) {
        return;
      }

      var coin = this.sendWallet.handler.code;
      var fee = this.sendFees[document.getElementById('sendCoinFee').value];
      var addr = document.getElementById('sendCoinAddr').value;

      var systemAmount = 0;
      if (app.sendForceTotal) {
        if ('feeCoin' in app.sendWallet.handler) {
          systemAmount = app.sendForceTotal;
        } else {
          systemAmount = app.sendWallet.handler.systemValuesDiff(app.sendForceTotal, app.sendWallet.handler.getFeeTotalCost(fee));
        }
      } else {
        systemAmount = app.sendWallet.handler.floatValueToSystemValue(parseFloat(document.getElementById('sendCoinAmount').value));
      }
      var floatAmount = app.sendWallet.handler.systemValueToFloatValue(systemAmount);
      var displayAmount = app.sendWallet.handler.systemValueToDisplayValue(systemAmount);

      app.authenticateBeforeContinue(
        '<table class="transactionSummary">' +
        '<tr class="first"><td><img class="coinIcon" src="coins/' + app.sendWallet.handler.icon + '.svg"/></td><td><img style="width:65%" src="icons/sendglyph.png"/></td><td>' + getCoinAddrIcon(app.sendWallet.handler, addr).outerHTML + '</td></tr>' +
        '<tr class="second"><td>' + shortAmount(displayAmount, coin, 13) + '</td><td></td><td>' + shortAddr(addr, 13) + '</td></tr>' +
        '</table>',
        '<table class="niceTable">' +
        '<tr><th colspan="2" style="width:26%;">recipient:</th></tr><tr><td colspan="2">' + addr + '</td></tr>' +
        '<tr><th colspan="2">amount:</th></tr><tr><td style="width:50%;">' + displayAmount + ' ' + coin + '</td><td>' + this.priceProvider.convert(floatAmount, coin) + '</td></tr>' +
        '<tr><th colspan="2">fee:</th></tr><tr><td>' + app.sendWallet.handler.getFeeDisplay(fee) + '</td><td>' + app.sendWallet.handler.getFeeValueDisplay(fee) + '</td></tr>' +
        '</table>'
        ,
        function(){
          app.sendWallet.handler.sendPayment(app.sendWallet.data.privateKey, addr, systemAmount, fee, app.afterSendCallback ? function(txid) {
            app.alertInfo('sending payment notification to: ' + app.afterSendCallback);
            var http = new XMLHttpRequest();
            http.open('POST', app.afterSendCallback);
            var body = [];
            var data = {
              'transaction_id': txid,
              'from_address': app.sendWallet.data.addr,
              'to_address': addr,
              'amount': floatAmount,
              'coin': app.sendWallet.handler.name
            };
            for (var d in data) body.push(d + '=' + encodeURIComponent(data[d]));
            http.onreadystatechange = function() {
              if ( http.readyState == 4 ) {
                app.alertInfo('status: ' + this.status);
              }
            }
            http.send(body.join('&'));

          } : null);
          app.closeForm();
        }
      );
    },
    copyReceiveCoinAddrToClp: function() {
        osPlugins.copyToClipboard(document.getElementById('receiveCoinAddr').value);
        app.alertInfo('copied code to clipboard', app.receivingWallet.handler.code);
    },
    shareReceivePaymentCode: function() {
      var message = 'currency: ' + app.receivingWallet.handler.code + '\naddress: ' + app.receivingAddr;
      if (document.getElementById('receiveCoinAmount').value) {
        var systemAmount = app.receivingWallet.handler.floatValueToSystemValue(parseFloat(document.getElementById('receiveCoinAmount').value));
        message += '\namount: ' + app.receivingWallet.handler.systemValueToDisplayValue(systemAmount);
      }
      message += '\nlink: \n' + 'https://wallet.coffee/request.html#' + this.updateReceivePaymentCode();

      osPlugins.shareDialog('', message, function() {
        app.alertInfo('Done. Recipient will be able to use code to make a payment.');
      }, function(msg) {
        app.alertError('Sharing failed with message: ' + msg);
      });
    },
    updateReceivePaymentCode: function() {
      var code = app.receivingWallet.handler.name + ':' + app.receivingAddr;
      document.getElementById('setAmountLabel').innerHTML = 'set amount';
      if (document.getElementById('receiveCoinAmount').value) {
        var systemAmount = app.receivingWallet.handler.floatValueToSystemValue(parseFloat(document.getElementById('receiveCoinAmount').value));
        code = code + '?amount=' + app.receivingWallet.handler.systemValueToDisplayValue(systemAmount);
        document.getElementById('setAmountLabel').innerHTML = 'change amount';
      }


      document.getElementById('receiveCoinAddr').value = code;
      document.getElementById('receiveCoinQrcode').innerHTML = '';
      new QRCode(document.getElementById('receiveCoinQrcode'), {
        text: code,
        width: 256,
        height: 256,
        colorLight: '#ffffff', /*#f7f5f2*/
        colorDark: '#463f3a'
      });
      return code;
    },

    popupReceiveClearAmount: function() {
      document.getElementById('receiveCoinBottom').classList.remove('custom-amount');
      document.getElementById('receiveCoinAmount').value = '';
      document.getElementById('receiveCoinValue').value = '';
      app.updateReceivePaymentCode();
    },

    popupReceivePayment: function(wallet, addr) {
        this.openForm('receivePaymentPopup', 'receive ' + wallet.handler.code, 'coins/' + wallet.handler.icon + '.svg');
        //document.getElementById('receiveCoinLabel').innerHTML = '';
        document.getElementById('receiveCoinAddr').value = '';
        document.getElementById('receiveCoinQrcode').innerHTML = '';
        document.getElementById('receiveCoinName').innerHTML = wallet.handler.code;
        document.getElementById('receiveFiatName').innerHTML = app.priceProvider.getUnit();

        document.getElementById('receiveCoinBottom').classList.remove('custom-amount');
        document.getElementById('receiveCoinValue').value = '';
        document.getElementById('receiveCoinAmount').value = '';

        if (addr == null) {
          //document.getElementById('receiveCoinLabel').innerHTML = 'Your ' + wallet.handler.code + ' address is:';
          document.getElementById('receiveCoinNote').innerHTML = '';
        } else {
          //document.getElementById('receiveCoinLabel').innerHTML = '' + wallet.handler.code + ' offline address:';
          document.getElementById('receiveCoinNote').innerHTML = 'This is an imported address,<br/> use it only if you control its private key!';
        }
        var addrString = addr == null ? wallet.data.addr : addr;
        document.getElementById('receiveCoinIdenticon').innerHTML = '';
        document.getElementById('receiveCoinIdenticon').appendChild(getCoinAddrIcon(wallet.handler, addrString));

        this.receivingWallet = wallet;
        this.receivingAddr = addrString;
        this.updateReceivePaymentCode();

        //setTimeout(app.updateReceivingWallet, 3000);
    },

    updateReceivingWallet: function() {
      if (document.getElementById("formPopup").classList.contains('show')) {
        if (document.getElementById('receivePaymentPopup').style.display == 'block') {
          //console.log('refresh');
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
    saveVersion: function() {
      this.settings.set('appVersion', window.version);
    },
    showChangelogIfVersionUpdated: function(callback) {
      var oldVersion = this.settings.get('appVersion', '0.1.7');
      if (oldVersion != window.version) {
        app.saveVersion();
        var changelist = '';
        for (var i in window.changelog) {
          if (versionCompare(window.changelog[i].version, oldVersion) != 1) break;
          changelist += '<b>version ' + window.changelog[i].version + '</b> ' + window.changelog[i].date + '<ul>';
          for (var j in window.changelog[i].changes) {
            changelist += '<li>' + window.changelog[i].changes[j] + '</li>';
          }
          changelist += '</ul>';
        }
        this.confirmBeforeContinue(
          'updated to ' + window.version,
          '<p>Your were running ' + oldVersion + ' previously. ' + (changelist != '' ? 'Below is a complete list of changes.' : 'Thanks for updating.') + '</p>' +
          changelist,
          function(){
            callback(true);
          }
        );
      } else {
        callback(false);
      }
    },

    flushUxHint: function(file) {
      document.getElementById("uxHint").innerHTML = '<img src="img/' + file + '.png"/>';
      document.getElementById('uxHint').classList.add('blink');
      setTimeout(function(){document.getElementById('uxHint').classList.remove('blink');}, 1000);
    },

    recoverWallet: function(invalidMnemonic) {
      var input = document.createElement("textarea");
      input.id = input.name = "mnemonic";
      input.rows = "3";
      app.confirmBeforeContinue(
        'Recover Wallet',
        '<p>Enter your recovery phrase.</p><p>Recovery phrase should be 12 english lowercase words separated by single spaces.</p>',
        function() {
          var mnemonic = input.value.split(' ').map(function(e){ return e.trim().toLowerCase();}).filter(function (e) {return e != '';}).join(' ');
          if (btcjs.validateMnemonic(mnemonic)) {
            //validate
            app.data.wallets.bip39 = {
              enabled : false,
              mnemonic: mnemonic,
              seedHex: btcjs.mnemonicToSeedHex(mnemonic)
            };
            app.data.save();
            app.initRecoveredWallet();
          } else {
            app.recoverWallet(mnemonic);
          }
        },
        'recover',
        'cancel',
        app.createNewWallet.bind(app)
      );
      document.getElementById('lockMessage').appendChild(input);
      if (typeof invalidMnemonic != "undefined") {
        input.value = invalidMnemonic;
        var div = document.createElement("div");
        div.className = "red";
        div.innerHTML = "this phrase is invalid!";
        document.getElementById('lockMessage').appendChild(div);
      }
    },

    initNewWallet: function() {
      app.addOrActivateCoin('BTC', function(){
        app.addOrActivateCoin('ETH', function(){
          app.confirmBeforeContinue(
            'Wallet Created',
            '<p>New random recovery phrase for all your wallets has been created. It is <b>extremely important</b> that you backup this phrase in case you lose access to this device. '+
            'You can do this at any time using "backup wallets" menu option.</p>' +
            '<div style="text-align:center">' +
            '<img src="coins/btc.svg" width="32" alt="BTC">&nbsp; &nbsp; &nbsp;' +
            '<img src="coins/eth.svg" width="32" alt="ETH">' +
            '</div>' +
            '<p>Bitcoin and Ethereum wallets are already added for your convinience. You can add different coins using "add wallet" option. Use "help" menu option for more info. </p>',
            function() {
              app.onDataLoaded();
            },
            'ok'
          );
        });
      });
    },

    initRecoveredWallet: function() {
      app.confirmBeforeContinue(
        'Wallet Recovered',
        '<p>All your new wallets will be generated using your recovery phrase.<p>' +
        '<p>Please <strong>add wallets</strong> you were holding and refresh balances.<p>',
        function() {
          app.onDataLoaded();
        }),
        'ok';

    },

    createNewWallet: function() {

      app.confirmBeforeContinue(
        'Welcome!',
        '<p>' +
        'Coffee Wallet is an open source, cross-platform, multi-currency blockchain wallet and portfolio.' +
        '</p>' +
        '<p>' +
        'It has been built with extreme care, but it comes with <b>no warranties</b> of any kind. ' +
        'Coffee Wallet does not provide financial services. It uses third party providers to access blockchains.' +
        '</p>' +
        '<p>' +
        'All private keys are generated from a secure seed recovery phrase that will now be generated. ' +
        'If you already have your secret phrase you can <a href="javascript:app.recoverWallet()">recover your wallet</a>.' +
        '</p>',
        function() {
          var mnemonic = btcjs.generateNewMnemonic();
          app.data.wallets.bip39 = {
            enabled : false,
            mnemonic: mnemonic,
            seedHex: btcjs.mnemonicToSeedHex(mnemonic)
          };
          app.data.save();
          app.initNewWallet();
        },
        'create wallet'
        //document.getElementById('lockMessage').appendChild();
      );

    },

    onBackButton: function() {
      if (this.lockDialogOpened) {
        this.lockDialogCanCancel && this.lockDialogCancel();
      } else if (document.getElementById('formPopup').classList.contains('show')) {
        this.closeForm();
      } else if (document.getElementById('popup').classList.contains('show')) {
        this.closePopup();
      } else if (this.menuOpened) {
        this.closeMenu();
      }
    },

    onDeviceReady: function() {

        this.setPriceProvider(allPriceProviders[this.settings.get('priceProvider', 0)]);
        this.priceProvider.setUnit(this.settings.get('priceUnit', this.priceProvider.defaultUnit));

        this.priceProviderSelect = new Select(document.getElementById("priceProvider"));
        this.priceUnitSelect = new Select(document.getElementById("priceUnit"));
        this.priceProviderSelect.onChange(function(value){
          //console.log(allPriceProviders, value);
          app.priceUnitSelect.setOptions(allPriceProviders[value].availableUnits, app.settings.get('priceUnit', app.priceProvider.defaultUnit));
        });
        this.priceProviderSelect.setOptions(allPriceProviders, this.settings.get('priceProvider', 0));

        rangeSlider.create(document.getElementById('sendCoinFee'), {
            polyfill: true,
            vertical: false,
            min: 0,
            max: 100,
            step: 1,
            value: 50,
            borderRadius: 10,
        });

        this.data.load(function(){
            navigator.splashscreen.hide();

            if (!('bip39' in this.data.wallets)) {
              app.saveVersion();
              app.createNewWallet();
            } else {
              app.showChangelogIfVersionUpdated(function(){
                app.showExportKeysReminderIfRequired(function(){
                  for (var key in app.data.wallets) {
                    if (app.data.wallets[key].enabled) {
                      if (!(app.data.wallets[key].coin in allCoinApis)) {
                        app.alertError('coin ' + app.data.wallets[key].coin + ' is no longer supported. It will be disabled.');
                        app.data.wallets[key].enabled = false;
                      } else {
                        app.addWalletWidget(app.data.wallets[key]);
                      }
                    }
                  }
                  app.updateAllValues();
                  app.onDataLoaded();
                });
              });
            }
        }.bind(this));

        this.updateMarketCap();

        document.getElementById('sendCoinFee').parentElement.addEventListener ("touchstart", function() {
          document.getElementById('sendCoinFee').focus();
        });

        // TODO
        //app.getExchangeableCoins(function(list){app.exchangeableCoinsCache = list});

        PullToRefresh.init({
          triggerElement: '#walletsTab',
          mainElement: '#wallets',
          distMax: 84,
          distReload: 60,
          iconArrow: '<div class="spinner"><img src="icons/refresh.png" alt="refresh"></div>',
          iconRefreshing: '<div class="spinner spinning"><img src="icons/refresh.png" alt="refresh"></div>',
          getStyles: function() { return ''; },
          onRefresh: function(cb) {
            app.updateMarketCap(cb);
          },
          shouldPullToRefresh: function() {
            return !document.querySelector('#walletsTab').scrollTop;
          }
        });

        Logger.log("info", null, "application started");
    },

};

app.initialize();
