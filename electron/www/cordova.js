
//PLACEHOLDER
//

var electron = require('electron');
var eStorage = require('electron-json-storage');


NativeStorage = {
  getItem: function(key, callbackSuccess, callbackError){
    eStorage.get(key, function(error, ret){
      if (error) {
        callbackError({
          code: 1,
          exception: error
        });
      } else if (typeof ret == 'undefined') {
        callbackError({code:2});
      } else {
        callbackSuccess(ret);
      }
    });
  },
  setItem: function(key, value, callbackSuccess, callbackError){
    eStorage.set(key, value, function(error) {
      if (error) {
        callbackError({
          code: 1,
          exception: error
        });
      } else {
        callbackSuccess();
      }
    });
  }
};

navigator.splashscreen = {
  hide: function(){}
};

cordova = {
  plugins: {
    barcodeScanner: {
      scan: function(success, error, options){

        alert('available in mobile version only');
      }
    },
    clipboard: {
      copy: function(txt){
        electron.clipboard.writeText(txt);
      },
      paste: function(callback){
        callback(electron.clipboard.readText());
      }
    }
  }
};

device = {
  platform: 'electron'
};

document.addEventListener("DOMContentLoaded", function(event) {
  document.body.className += 'electron';
  app.onDeviceReady();
});
