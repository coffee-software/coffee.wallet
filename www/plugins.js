'use strict';
/* global pdf */
/* global device */
/* global NativeStorage */
/* global FingerprintAuth */

var __OS_PLUGINS__ = {

  getStorage: function() { return NativeStorage; },
  getPlatformName: function(){ return device.platform; },
  generatePDF: function(html, file, success, error){
    if (device.platform == 'browser') {
      //console.log(html);
      //osPlugins.openInSystemBrowser('data:text/html;charset=UTF-8,' + encodeURIComponent(html));
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(html));
      element.setAttribute('download', file + '.html');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      success();
    } else {
      document.getElementById('loading').classList.add('show');
      pdf.fromData(html, {
          documentSize: 'A4',
          type: 'share',
          fileName: file
      })
      .then(function(stats){
        document.getElementById('loading').classList.remove('show');
        success();
      })
      .catch(function(err) {
        document.getElementById('loading').classList.remove('show');
        error(err);
      });
    }
  },
  scanQRCode: function(success, error) {

    if (device.platform == 'browser') {
        error('Scanning not yet supported in PWA');
    } else {
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                if (!result.canceled) {
                    success(result.text);
                }
            },
            error,
            {
                preferFrontCamera : false, // iOS and Android
                showFlipCameraButton : true, // iOS and Android
                showTorchButton : true, // iOS and Android
                torchOn: true, // Android, launch with the torch switched on (if available)
                prompt : "Place addres or transaction barcode inside the scan area", // Android
            }
        );
    }
  },
  openInSystemBrowser: function(url) {
    //ugly fix for weird iOS bug
    app.lastOpenedUrl = url;
    window.open(url, '_system');
  },
  openRateAppDialog: function() {
    if (device.platform == 'Android') {
      this.openInSystemBrowser('market://details?id=coffee.software.coffeewallet');
    } else if (device.platform == 'iOS') {
      this.openInSystemBrowser('itms-apps://itunes.apple.com/us/app/domainsicle-domain-name-search/id1433984988?ls=1&mt=8');
    } else {
      app.alertError('Rating is not available on this platform');
    }
  },
  shareDialog: function(subject, message, successHandler, errorHandler) {

    if (device.platform == 'browser') {
      this.copyToClipboard(message);
      app.alertSuccess('Share message copied to clipboard');
      successHandler();
      return;
    }
    document.getElementById('loading').classList.add('show');
    window.plugins.socialsharing.shareWithOptions(
      {
        message: message,
        subject: subject,
      },
      function() {
        document.getElementById('loading').classList.remove('show');
        successHandler();
      },
      function(error) {
        document.getElementById('loading').classList.remove('show');
        errorHandler(error);
      }
    );

  },
  copyToClipboard: function(text) {
    if (device.platform == 'browser') {
      var tmpInputElement = document.createElement('textarea');
      tmpInputElement.value = text;
      document.body.appendChild(tmpInputElement);
      tmpInputElement.select();
      document.execCommand('Copy');
      document.body.removeChild(tmpInputElement);
    } else {
      cordova.plugins.clipboard.copy(text);
    }
  },

    pasteFromClipboard: function(callback) {
        if (device.platform == 'browser') {
            navigator.clipboard.readText()
                .then(callback)
                .catch(function(err){
                    throw new Error('Failed to read clipboard contents');
                });
        } else {
            cordova.plugins.clipboard.paste(callback);
        }
    },

  browserCheckPersisted: function() {
    if (navigator.storage && navigator.storage.persist) {
      navigator.storage.persist().then(function (isPersisted){
        if (!isPersisted) {
            document.getElementById('pwaInfo').classList.add('show');
            document.getElementById('pwaPersist').classList.add('show');
        }
      });
    } else {
        document.getElementById('pwaInfo').classList.add('show');
        document.getElementById('pwaPersist').classList.add('show');
    }
  },
  browserInitPWA: function() {
    var deferredPrompt;
    if (window.location.hostname != 'app.wallet.coffee') {
        document.getElementById('pwaInfo').classList.add('show');
        document.getElementById('pwaBeta').classList.add('show');
    }
    var isPwa = navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;
    if (!isPwa) {
        document.getElementById('pwaInfo').classList.add('show');
        document.getElementById('pwaInstall').classList.add('show');
        window.addEventListener('beforeinstallprompt', function(e){
          e.preventDefault();
          deferredPrompt = e;
          document.getElementById('installPwa').classList.add('show');
        });
        document.getElementById('installPwa').addEventListener('click', function () {
          document.getElementById('installPwa').classList.remove('show');
          deferredPrompt.prompt();
          deferredPrompt = null;
          //const { outcome } = await deferredPrompt.userChoice;
        });
        window.addEventListener('appinstalled', function(evt) {
            window.location.reload(true);
        });
    }
  },
  confirmBeforeUpdate: function(registration, currentVersion, newVersion, callback) {
    navigator.splashscreen.hide();
    document.getElementById('loading').classList.remove('show');
    app.confirmBeforeContinue(
        'Update Available',
        'New version of Coffee Wallet is available.<br/>' +
        'You are running: <strong>' + currentVersion + '</strong><br/>' +
        'New version available: <strong>' + newVersion + '</strong><br/>' +
        'It is recommended to update to latest version.',
        function(){
            document.getElementById('loading').classList.add('show');
            navigator.serviceWorker.ready.then(function(registration) {
                registration.update().then(function(){
                     window.location.reload(true);
                });
            });
        },
        'Update Now',
        'Later',
        function(){
            callback();
        }
    );
  },
    hideNativeSplash: function() {
        navigator.splashscreen.hide();
    },
    authenticateUser: function(callback){
        if (device.platform == "Android") {
            FingerprintAuth.isAvailable(function(result){
                if(result.isAvailable) {
                    FingerprintAuth.encrypt(
                        {
                            clientId: "coffee",
                            username: "user",
                            password: "__dummy"
                        },
                        function(){
                            app.alertSuccess("auth successfull");
                            callback();
                        }, function(err){
                            app.alertError("auth error: " + err);
                        }
                    );
                } else {
                    callback();
                }
            }, function(){
                callback();
            });
        } else if(device.platform == "iOS") {
            window.plugins.touchid.isAvailable(function(){
                window.plugins.touchid.verifyFingerprintWithCustomPasswordFallback(
                    "Scan your fingerprint to confirm",
                    function(){
                        app.alertSuccess("auth successfull");
                        callback();
                    }, function(err){
                        app.alertError("auth error: " + JSON.stringify(err));
                    }
                );
            }, function(){
                callback();
            });
        } else {
            callback();
        }
    },
  checkForUpdates: function(callback) {
    var that = this;
    if (device.platform == 'browser' && (window.location.port != "8000")) {
        this.browserCheckPersisted();
        this.browserInitPWA();
        //TODO protocol handler:
        //navigator.registerProtocolHandler('web+coffee', 'http://localhost:8879/TEST?%s', 'Coffee Wallet');
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./sw.js').then(function(registration) {
                //console.log('ServiceWorker registration successful with scope: ', registration.scope);
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.onreadystatechange = function() {
                    if (xmlHttp.readyState == 4) {
                        if (xmlHttp.status == 200) {
                            var newVersionData = JSON.parse(xmlHttp.responseText);
                            if (newVersionData.version != coffee.App.getVersion()) {
                                that.confirmBeforeUpdate(registration, coffee.App.getVersion(), newVersionData.version, callback);
                            } else {
                                callback();
                            }
                        } else {
                            callback();
                        }
                    }
                };
                xmlHttp.open( "GET", '/version.json', true );
                xmlHttp.send( null );
            }, function(err) {
                //console.log('ServiceWorker registration failed: ', err);
            });
        } else {
           callback();
        }
    } else {
        callback();
    }
  }
};

var OsPlugins = __OS_PLUGINS__;