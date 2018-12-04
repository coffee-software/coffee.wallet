'use strict'

var Data = {

  wallets: {},

  load: function(callback) {
    var that = this;
    NativeStorage.getItem("wallets", function(value){
      that.wallets = value;
      for (var coin in that.wallets) {
        that._validateWallet(that.wallets[coin]);
      }
      callback();
    }, function(error){
      if (typeof error.code == "object" && 'code' in error.code){
        //this fixes weird bug in secure storege plugin TODO
        error = error.code;
      }
      if (error.code == 2) {
        callback();
      } else {
        console.log(error);
        app._alertJsError('error ' + error.code + ' ' + error.exception);
      }
    });
  },

  save: function(callback) {
    NativeStorage.setItem("wallets", this.wallets, function(){
      callback && callback();
    }, function(error) {
        app._alertJsError('error ' + error.exception);
    });
  },
  deleteOfflineAsset: function(coin, id) {
    this.wallets[coin].offlineWallets.splice(id - 1, 1);
    this.save(function(){});
  },
  updateOfflineAsset: function(coin, id, data) {
    this.wallets[coin].offlineWallets[id - 1].addr = data.addr;
    this.wallets[coin].offlineWallets[id - 1].balance = data.balance;
    this.wallets[coin].offlineWallets[id - 1].systemBalance = data.systemBalance;
    this.wallets[coin].offlineWallets[id - 1].comment = data.comment;
    this.save(function(){});
  },
  addOfflineAsset: function(coin, data) {
    var l = this.wallets[coin].offlineWallets.push(data);
    this.save(function(){});
    return l;
  },
  hideWallet: function(code, callback) {
    this.wallets[code].enabled = false;
    this.save(callback);
  },
  _validateWallet: function(wallet) {
    //console.log(wallet.privateKey, !wallet.privateKey);
    var that = this;
    var update = false;

    if (wallet.enabled && !wallet.privateKey && (wallet.coin in allCoinApis) && ('newPrivateKey' in allCoinApis[wallet.coin])) {
      wallet.privateKey = allCoinApis[wallet.coin].newPrivateKey();
      wallet.addr = allCoinApis[wallet.coin].addrFromPrivateKey(wallet.privateKey);

      if ('feeCoin' in allCoinApis[wallet.coin]) {
        var parentHandler = allCoinApis[wallet.coin].feeCoin;
        if (!((parentHandler.code in that.wallets) && that.wallets[parentHandler.code].enabled)) {
          app.alertInfo(allCoinApis[wallet.coin].code + ' transaction fees are paid in ' + parentHandler.code + '. Consider adding this coin.', wallet.coin);
        }
      }
    }
  },
  addWallet: function(handler, callback) {
    var that = this;
    if (! (handler.code in that.wallets)) {
      var wallet = {
        coin: handler.code
      };
      wallet.offlineWallets = new Array();
      that.wallets[handler.code] = wallet;
    }
    that.wallets[handler.code].enabled = true;
    that._validateWallet(that.wallets[handler.code]);
    this.save(callback);
  }
}
