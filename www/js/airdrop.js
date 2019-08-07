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
