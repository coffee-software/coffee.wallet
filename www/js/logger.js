'use strict'

var Logger = {

  //this wont be shifted
  logTransaction: function(type, description, data) {
    this.getLogs(function(logs) {
      logs.unshift({ts:Date.now(), description:description, data:data});
      if (typeof NativeStorage != 'undefined') {
        NativeStorage.setItem("logs" + '_' + type, logs, function(){}, function(){});
      }
    }, type);
  },

  //"error", "info", "success"
  log: function(severity, coin, message, debug) {
    this.getLogs(function(logs) {
      logs.unshift({ts:Date.now(), severity:severity, coin:coin, message:message, debug:debug});
      if (logs.length > 200) {
        logs.pop();
      }
      if (typeof NativeStorage != 'undefined') {
        NativeStorage.setItem("logs", logs, function(){}, function(){});
      }
    });
  },

  getLogs: function(callback, type) {
    if (typeof NativeStorage == 'undefined') {
      return callback(new Array());
    }
    NativeStorage.getItem("logs" + (typeof type == 'undefined' ? '' : '_' + type), function(value){
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
