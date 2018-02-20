
var Logger = {
  //"error", "info", "success"
  log: function(severity, coin, message) {
    //Db.query('INSERT INTO logs (ts, severity, coin, message) VALUES(?, ?, ?, ?)', [Date.now(), severity, coin, message]);
  },

  getLogs: function(callback) {
    //Db.query('SELECT * FROM logs ORDER BY ts DESC LIMIT 10', [], callback);
  }
}

Logger.log("info", null, "application started");

window.onerror = function(msg, url, line, col, error) {
   var log = msg;
   log += !url ? '' : '\nurl: ' + url;
   log += !line ? '' : '\nline: ' + line;
   log += !col ? '' : '\ncolumn: ' + col;
   log += !error ? '' : '\nerror: ' + error;

   app._alertJsError(log);

};
