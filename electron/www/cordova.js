
//PLACEHOLDER
//

var electron = require('electron');
var eStorage = require('electron-json-storage');
var Instascan = require('instascan');


NativeStorage = {
  getItem: function(key, callbackSuccess, callbackError){
    eStorage.get(key, function(error, ret){
      if (error) {
        callbackError({
          code: 1,
          exception: error
        });
      } else if ((typeof ret == 'undefined') || (Object.keys(ret).length == 0)) {
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
      cameraId: 0,
      cameras: [],
      scanner: null,
      initialized: false,
      scanSuccess: null,
      scanError: null,

      nextCamera: function(){
        this.cameraId ++;
        if (this.cameraId >= this.cameras.length) {
          this.cameraId = 0;
        }
        this.scanner.start(this.cameras[this.cameraId]);
        document.getElementById('mobileQRCamera').innerHTML = this.cameras[this.cameraId].name;
      },

      closeScanner: function(){
        document.getElementById('mobileQRScanner').classList.remove('show');
        this.scanner.stop();
      },

      scan: function(success, error, options){
        var that = this;
        document.getElementById('mobileQRScanner').classList.add('show');
        that.scanSuccess = success;
        that.scanError = error;
        if (!this.initialized) {
          that.scanner = new Instascan.Scanner({ video: document.getElementById('mobileQRPreview') });
          document.getElementById('mobileQRCancel').onclick = that.closeScanner.bind(that);
          document.getElementById('mobileQRCamera').onclick = that.nextCamera.bind(that);;
          that.initialized = true;
          that.scanner.addListener('scan', function (content) {
            that.closeScanner();
            that.scanSuccess({text:content});
          });
        }
        Instascan.Camera.getCameras().then(function (cameras) {
          if (cameras.length > 0) {
            that.cameras = cameras;
            that.cameraId = -1;
            that.nextCamera();
          } else {
            that.closeScanner();
            that.scanError('No cameras found.');
          }
        }).catch(function (e) {
          that.closeScanner();
          that.scanError(e);
        });
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
