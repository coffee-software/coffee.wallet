

var Data = {

  wallets: {},

  load: function(callback) {
    Db.query('SELECT * FROM wallets WHERE enabled = 1', [], function(rows) {
      var counter = rows.length;
      for (let i=0; i<rows.length; i++) {
        this.wallets[rows[i].coin] = rows[i];
        this.wallets[rows[i].coin].api = allCoinApis[rows[i].coin];
        this.wallets[rows[i].coin].offlineWallets = new Array();

        this._validateWallet(this.wallets[rows[i].coin], function() {
            counter --;
            console.log(counter);
            if (counter == 0) {
              Db.query('SELECT * FROM offline_assets', [], function(rows) {
                for (let i=0; i<rows.length; i++) {
                  this.wallets[rows[i].coin].offlineWallets.push(rows[i]);
                }
                callback();
              }.bind(this));
            }
        }.bind(this));
      }
    }.bind(this));
  },

  hideWallet: function(code, callback) {
    delete this.wallets[code];
    Db.query(
      'UPDATE wallets SET enabled = 0 WHERE coin = ?',
      [code],
      callback
    );
  },
  _validateWallet: function(wallet, callback) {
    console.log(wallet.privateKey, !wallet.privateKey);
    var that = this;
    var update = false;

    var next = function() {
      if (update) {
        Db.query('UPDATE wallets SET privateKey = ?, addr = ?, balance = ?, enabled = ? WHERE coin = ?',
          [wallet.privateKey, wallet.addr, wallet.balance, wallet.enabled, wallet.coin], callback);
      } else {
        callback();
      }
    };

    if (!wallet.enabled ) {
        wallet.enabled = 1;
        update = true;
    }
    if (!wallet.privateKey && ('newPrivateKey' in wallet.api)) {
        update = true;
        if (typeof wallet.api.newPrivateKey == 'function') {
          wallet.privateKey = wallet.api.newPrivateKey();
          wallet.addr = wallet.api.addrFromPrivateKey(wallet.privateKey);
          wallet.balance = 0;
          next();
        } else {
          //ensure wallet exists
          this.addWallet(wallet.api.newPrivateKey, function(){
            wallet.privateKey = that.wallets[wallet.api.newPrivateKey.code].privateKey;
            wallet.addr = wallet.api.addrFromPrivateKey(wallet.privateKey);
            wallet.balance = 0;
            next();
          });
        }
    } else {
      next();
    }
  },
  addWallet: function(handler, callback) {
    var that = this;
    if (handler.code in that.wallets) {
      callback();
    } else {
      Db.query('INSERT OR IGNORE INTO wallets (coin) VALUES (?)', [handler.code], function(){
        Db.query('SELECT * FROM wallets WHERE coin = ?', [handler.code], function(rows) {
          var wallet = rows[0];
          console.log(wallet);
          wallet.api = handler;
          wallet.offlineWallets = new Array();
          //generate private key if not exist and if possible.

          var next = function() {
            Db.query('SELECT * FROM offline_assets WHERE coin=?', [handler.code], function(rows) {
              for (let i=0; i<rows.length; i++) {
                wallet.offlineWallets.push(rows[i]);
              }
              that.wallets[handler.code] = wallet;
              callback();
            });
          };
          that._validateWallet(wallet, next);
        });
      });
    }
  }
}


var Db = {
    getDb: function() {
      if (typeof this.db == 'undefined') {
          this.db = window.openDatabase("wallet.one", "1.0", "wallet.one", 20000000);
          this.db.transaction(function (tx) {
            //tx.executeSql('DROP TABLE IF EXISTS logs');
            tx.executeSql('CREATE TABLE IF NOT EXISTS '+
              'logs (ts DATETIME PRIMARY KEY DESC, severity TEXT, coin TEXT, addr TEXT, tx TEXT, message TEXT)');

            tx.executeSql('CREATE TABLE IF NOT EXISTS '+
              'settings (key TEXT PRIMARY KEY, value TEXT)');

            tx.executeSql('CREATE TABLE IF NOT EXISTS '+
              'wallets (coin TEXT PRIMARY KEY, enabled INT, privateKey TEXT, addr TEXT, balance FLOAT)');

            tx.executeSql('CREATE TABLE IF NOT EXISTS '+
              'offline_assets (coin TEXT, addr TEXT, balance FLOAT, comment TEXT)');

            tx.executeSql('CREATE TABLE IF NOT EXISTS '+
              'prices (unit1 TEXT, unit2 TEXT, price FLOAT, ts DATETIME)');
          });
      }
      return this.db;
    },

    query: function(sql, params, success) {
      this.getDb().transaction(function (tx) {
        tx.executeSql(sql, params, function (tx, result) {
            if(success) success(result.rows);
        }, function (tx, error) {
            var exception = {};
            exception.error = error.message;
            exception.sql = sql;
            exception.param = params;
            console.log(exception);
        });
      });
    }
}
