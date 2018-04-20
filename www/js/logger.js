'use strict'

/*var Db = {
    query: function(sql, params, success) {
      window.sqlitePlugin.openDatabase({name: 'coffee.wallet.db', location: 'default'}, function(db){
        db.transaction(function (tx) {
          //tx.executeSql('DROP TABLE IF EXISTS logs');
          tx.executeSql('CREATE TABLE IF NOT EXISTS '+
            'logs (ts DATETIME KEY DESC, severity TEXT, coin TEXT, message TEXT)');

          tx.executeSql('CREATE TABLE IF NOT EXISTS '+
            'prices (unit1 TEXT, unit2 TEXT, price FLOAT, ts TIMESTAMP)');
        });

        db.transaction(function (tx) {
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
      });
    }
}*/

var Logger = {
  //"error", "info", "success"
  log: function(severity, coin, message) {
    this.getLogs(function(logs) {
      logs.unshift({ts:Date.now(), severity:severity, coin:coin, message:message});
      if (logs.length > 100) {
        logs.pop();
      }
      if (typeof NativeStorage != 'undefined') {
        NativeStorage.setItem("logs", logs, function(){}, function(){});
      }
    });
    //Db.query('INSERT INTO logs (ts, severity, coin, message) VALUES(?, ?, ?, ?)', [Date.now(), severity, coin, message]);
  },

  getLogs: function(callback) {
    if (typeof NativeStorage == 'undefined') {
      return callback(new Array());
    }
    NativeStorage.getItem("logs", function(value){
      callback(value);
    }, function(error){
      if (typeof error.code == "object" && 'code' in error.code){
        //this fixes weird bug in secure storege plugin TODO
        error = error.code;
      }
      if (error.code == 2) {
        callback(new Array());
      } else {
        console.log(error);
        app._alertJsError('error ' + error.code + ' ' + error.exception);
      }
    });
    //Db.query('SELECT * FROM logs ORDER BY ts DESC LIMIT 10', [], callback);
  }
}

window.onerror = function(msg, url, line, col, error) {
   var log = msg;
   log += !url ? '' : '\nurl: ' + url;
   log += !line ? '' : '\nline: ' + line;
   log += !col ? '' : '\ncolumn: ' + col;
   log += !error ? '' : '\nerror: ' + error;
   app._alertJsError(log);
   //console.log(msg, url, line, col, error);
};
