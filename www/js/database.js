

var Data = {

  wallets: {},

  load: function(callback) {
    Db.query('SELECT * FROM wallets WHERE enabled = 1', [], function(rows) {
      for (let i=0; i<rows.length; i++) {
        this.wallets[rows[i].coin] = rows[i];
        this.wallets[rows[i].coin].api = allCoinApis[rows[i].coin];
        this.wallets[rows[i].coin].offlineWallets = new Array();
      }
      Db.query('SELECT * FROM offline_assets', [], function(rows) {
        for (let i=0; i<rows.length; i++) {
          this.wallets[rows[i].coin].offlineWallets.push(rows[i]);
        }
        callback();
      }.bind(this));
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

  addWallet: function(handler, callback) {
    var that = this;

    Db.query('INSERT OR IGNORE INTO wallets (coin) VALUES (?)', [handler.code], function(){
      Db.query('SELECT * FROM wallets WHERE coin = ?', [handler.code], function(rows) {
        var wallet = rows[0];
        console.log(wallet);
        var update = false;
        wallet.api = handler;
        wallet.offlineWallets = new Array();
        //generate private key if not exist and if possible.
        if (!wallet.privateKey && 'newPrivateKey' in handler) {
            wallet.privateKey = handler.newPrivateKey();
            wallet.addr = handler.addrFromPrivateKey(wallet.privateKey);
            wallet.balance = 0;
            update = true;
        }
        if (!wallet.enabled ) {
            wallet.enabled = 1;
            update = true;
        }
        var next = function() {
          Db.query('SELECT * FROM offline_assets WHERE coin=?', [handler.code], function(rows) {
            for (let i=0; i<rows.length; i++) {
              wallet.offlineWallets.push(rows[i]);
            }
            that.wallets[handler.code] = wallet;
            callback();
          });
        };
        if (update) {
          Db.query('UPDATE wallets SET privateKey = ?, addr = ?, balance = ?, enabled = ? WHERE coin = ?',
            [wallet.privateKey, wallet.addr, wallet.balance, wallet.enabled, wallet.coin], next);
        } else {
          next();
        }
      });
    });
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
