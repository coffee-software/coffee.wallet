var Db = {

    query: function(sql, params, success){
      if( typeof this.db == 'undefined' ) {
          this.db = window.openDatabase("wallet.one", "1.0", "wallet.one", 20000000);
      }
      this.db.transaction(function (tx) {
        //tx.executeSql('DROP TABLE IF EXISTS logs');
        tx.executeSql('CREATE TABLE IF NOT EXISTS logs (ts DATETIME PRIMARY KEY DESC, severity TEXT, coin TEXT, message TEXT)');
        tx.executeSql(sql, params, function (tx, result) {
            if(success) success(result.rows);
        }, function (tx, error) {
            window.console.log(error.message);
            window.Logger.log("error", null, "SQL ERROR: " + error.message);
        });

      });
    }
}

var Logger = {
  //"error", "info", "warning", "success"
  log: function(severity, coin, message) {
    Db.query('INSERT INTO logs (ts, severity, coin, message) VALUES(?, ?,?,?)', [new Date(), severity, coin, message]);
  },

  getLogs: function(callback) {
    Db.query('SELECT * FROM logs ORDER BY ts DESC LIMIT 100', [], callback);
  }
}

Logger.log("info", null, "application started");

window.onerror = function(msg, url, line, col, error) {
   var log = msg;
   log += !url ? '' : '\nurl: ' + url;
   log += !line ? '' : '\nline: ' + line;
   log += !col ? '' : '\ncolumn: ' + col;
   log += !error ? '' : '\nerror: ' + error;
   try {
     Logger.log("error", null, "JS ERROR: " + log);
   } catch(err) {
     console.trace();
     console.log(log);
     console.log(err);
   }
   return true;
};
