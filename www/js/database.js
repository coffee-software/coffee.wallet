

var Data = {

  wallets: {},

  load: function(callback) {
    var that = this;
    NativeStorage.getItem("wallets", function(value){
      app._alertJsError('ok');
      app._alertJsError(value);
      that.wallets = value;
      for (var coin in that.wallets) {
        that._validateWallet(that.wallets[coin]);
      }
      callback();
    }, function(error){
      app._alertJsError('error');
      app._alertJsError(error.exception);
      console.log(error);
      if (error.code == 2) {
        callback();
      }
    });
  },

  save: function(callback) {
    NativeStorage.setItem("wallets", this.wallets, function(){
      callback();
    });
  },

  updateOfflineAsset: function(coin, id, data) {
    this.wallets[coin].offlineWallets[id - 1].addr = data.addr;
    this.wallets[coin].offlineWallets[id - 1].balance = data.balance;
    this.wallets[coin].offlineWallets[id - 1].comment = data.comment;
    this.save();
  },
  addOfflineAsset: function(coin, data) {
    this.wallets[coin].offlineWallets.push(data);
    this.save();
  },
  hideWallet: function(code, callback) {
    this.wallets[code].enabled = false;
    this.save(callback);
  },
  _validateWallet: function(wallet) {
    //console.log(wallet.privateKey, !wallet.privateKey);
    var that = this;
    var update = false;

    if (!wallet.enabled ) {
        wallet.enabled = 1;
    }
    if (!wallet.privateKey && ('newPrivateKey' in allCoinApis[wallet.coin])) {
        if (typeof allCoinApis[wallet.coin].newPrivateKey == 'function') {
          wallet.privateKey = allCoinApis[wallet.coin].newPrivateKey();
          wallet.addr = allCoinApis[wallet.coin].addrFromPrivateKey(wallet.privateKey);
          wallet.balance = 0;
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
    that._validateWallet(that.wallets[handler.code]);
    this.save(callback);
  }
}
