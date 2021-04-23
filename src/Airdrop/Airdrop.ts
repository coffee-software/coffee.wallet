/*

'use strict'

var airdrop = {

  tasks : [
    ['Install application', 'Thanks for installing :)', 20, function(){
      return true;
    }, null],
    ['Add any currency', 'Add any crypto currency other than default ones to the list of your wallets.', 10, function(){
      return Object.keys(app.data.wallets).length > 3;
    }, function(){
      app.popupAddCoin();
    }],
    ['Add offline balance', 'Swipe any wallet on your wallets tab to the left and click "portfolio". Then click "add balance" to add to your portfolio.', 10, function(){
      for(var key in app.wallets){
        for (var i in app.wallets[key].offlineWallets) {
          if (! app.wallets[key].offlineWallets[i].addr) {
            return true;
          }
        }
      }
      return false;
    }, function(){
      app.closePopup();
      app.tabWallets();
    }],
    ['Watch wallet or generate PDF', 'In "portfolio" select "add address" to track an address. This is available only for coins with wallet support (like BTC or ETH). If you don\'t have any wallet stored elsewhere you can generate a paper wallet using "new address".', 10, function(){
      for(var key in app.wallets){
        for (var i in app.wallets[key].offlineWallets) {
          if (app.wallets[key].offlineWallets[i].addr) {
            return true;
          }
        }
      }
      return false;
    }, function(){
      app.closePopup();
      app.tabWallets();
    }],
    ['Open "send via message" popup', 'You don\'t have to use this feature. We just want you to open the popup and read how this useful feature works.', 5, function(){
      return app.settings.get('airdropTaskSendViaMessage');
    }, function(){
      app.closePopup();
      app.tabTools();
    }],
    ['Open "exchange" popup', 'Open "exchange" in tools tab. You don\'t have to perform any exchange.', 5, function(){
      return app.settings.get('airdropTaskExchange');
    }, function(){
      app.closePopup();
      app.tabTools();
    }],
    ['Charge your ETH balance', 'Swipe your ETH wallet right and click "receive" to see your address. Fees for transfering ERC20 tokens are paid with ETH. If you won\'t charge your ETH account, tokens you receive during this airdrop will not be easily accessible, therefore this task is highly recommended.', 40, function(){
      return (config.airdrop.parentCoin in app.data.wallets) && (app.data.wallets[config.airdrop.parentCoin].balance != 0);
    }, function(){
      app.closePopup();
      app.tabWallets();
      //return app.popupReceivePayment(app.wallets.ETH);
    }]
  ],

  collectAirdrop : function(successCallback, errorCallback) {

    var total = 0;
    var flags = [];
    for (var i=0; i< airdrop.tasks.length; i++) {
      var completed = airdrop.tasks[i][3]();
      flags.push(completed ? 1 : 0);
      if (completed) {
        total += airdrop.tasks[i][2];
      }
    }
    app.confirmBeforeContinue(
      'Collect ' + total + ' ' + config.airdrop.coin,
      '<div style="text-align:center"><img src="coins/cft.svg" width="32" alt="CFT"></div>' +
      (total < app.airdropMaxReward ? '<p><b>warning:</b> You can do this only once. Please consider finishing all tasks.</p>' : '') +
      '<p>Please click "collect" to claim ' + total + ' ' + config.airdrop.coin + '.</p>',
      function(){
        app.closePopup();
        app.addOrActivateCoin(config.airdrop.coin, function(){
          var params = {
            flags: flags,
            total: total,
            uuid: device.uuid,
            device: {
              cordova : device.cordova,
              model : device.model,
              platform : device.platform,
              uuid : device.uuid,
              version : device.version,
              manufacturer : device.manufacturer,
              isVirtual : device.isVirtual,
              serial : device.serial
            },
            addr: app.wallets[config.airdrop.coin].data.addr,
            ts: Math.round((new Date()).getTime() / 1000)
          };
          var payload = JSON.stringify(params);
          var xhr = new XMLHttpRequest();
          xhr.open('POST', config.airdrop.endpoint + 'airdrop', true);
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.setRequestHeader("X-Sign", Web3JsBaseHandler.getMainnetProvider().utils.sha3(payload + config.airdrop.secret));
          xhr.responseType = 'json';
          xhr.onload = function() {
            if (xhr.status === 200) {
              app.data.wallets[config.airdrop.coin].picked = true;
              app.data.save(function(){
                successCallback(xhr.response);
              });
            } else {
              errorCallback(xhr.response);
            }
          };
          xhr.send(payload);
        });
      },
      'collect',
      'cancel'
    );
  },

  getLeft: function(soccessCallback) {
    var params = {
      first: app.settings.get('airdropReported', 0) ? 0 : 1,
      uuid: device.uuid,
      device: {
        cordova : device.cordova,
        model : device.model,
        platform : device.platform,
        uuid : device.uuid,
        version : device.version,
        manufacturer : device.manufacturer,
        isVirtual : device.isVirtual,
        serial : device.serial
      },
      version: window.version,
      ts: Math.round((new Date()).getTime() / 1000)
    };
    var payload = JSON.stringify(params);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', config.airdrop.endpoint + 'left', true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-Sign", Web3JsBaseHandler.getMainnetProvider().utils.sha3(payload + config.airdrop.secret));
    xhr.responseType = 'json';
    xhr.onload = function() {
      if (xhr.status === 200) {
        //update rewards
        document.getElementById('airdropReferalReward').innerHTML = xhr.response.referalReward;
        app.airdropMaxReward = 0;
        for (var i=0; i< airdrop.tasks.length; i++) {
          airdrop.tasks[i][2] = parseInt(xhr.response.rewards[i]);
          app.airdropMaxReward += (xhr.response.rewards[i]);
        }
        //console.log();
        app.settings.set('airdropReported', 1);
        soccessCallback(xhr.response.left, xhr.response.msg);
      }
    };
    xhr.send(payload);
  },

}

//APP

    initAirdrop: function() {
        //airdrop is finished
        return;
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
            colorLight: '#ffffff',
            colorDark: '#463f3a'
        });

        airdrop.getLeft(function(left, message){
            document.getElementById('airdropStatus2').innerHTML = message;
        });
    },




            <div id="airdropPopup" style="display:none;">
              <div class="bg-creme popup-head">
                <div class="rowIcon"><img class="coinIcon coinBig" src="coins/cft.svg"/></div>
                <h2>CFT airdrop</h2>
                <h3>Coffee Wallet Tokens</h3>
              </div>
              <div class="section">
                You don't have to complete all tasks listed below but they should take only 3 minutes of your time and you will know all important features of this application.
              </div>
              <div class="stitch"></div>
              <table class="section" id="airdropTasks">
              </table>
              <div class="stitch"></div>
              <p id="airdropStatus" class="section"></p>
              <div class="actions row buttons">
                <button id="collectAirdropButton" class="box f1 hidden" onclick="app.collectAirdrop()">
                  Collect&nbsp;<span id="airdropTotal"></span>
                </button>
              </div>
            </div>
            <div id="airdropPopup2" style="display:none;">
              <div class="bg-creme popup-head">
                <div class="rowIcon"><img class="coinIcon coinBig" src="coins/cft.svg"/></div>
                <h2>CFT airdrop</h2>
                <h3>Coffee Wallet Tokens</h3>
              </div>
              <div class="section">
                Thanks for participating in the airdrop! Tokens will appear in your wallet as soon as transaction gets confirmed.
                If you would like to get some more and share Coffee Wallet with your friends, you can use fallowing share link.
                You will receive extra <strong><span id="airdropReferalReward">50</span> CFT</strong> for each installation.
              </div>
              <div class="airdrop-link">
                <div id="airdropRefLink">https://wallet.coffee/install</div>
                <div style="text-align:center">
                  <div id="airdropRefLinkQR" class="qr-code-display">
                  </div>
                </div>
                <div class="actions row">
                  <button class="f1" onclick="osPlugins.copyToClipboard(document.getElementById('airdropRefLink').innerHTML); app.alertInfo('copied to clipboard');">
                    <img src="icons/ico.copy.png"/>
                    Copy
                  </button>
                  <button class="f1" onclick="osPlugins.shareDialog('', document.getElementById('airdropRefLink').innerHTML)">
                    <img src="icons/share.png"/>
                    Share
                  </button>
                </div>
              </div>
              <p id="airdropStatus2" class="section"></p>
              <div class="stitch"></div>
              <div class="actions row buttons">
                <button class="box f1 light" onclick="osPlugins.openRateAppDialog()">
                  Rate App
                </button>
                <button class="box f1" onclick="app.closePopup()">
                  Close
                </button>
              </div>
            </div>

 */