'use strict'



var osPlugins = {

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
  scanQRCode: function(success, error, config) {

    if (device.platform == 'browser') {
        error('Scanning not yet supported in PWA');
    } else {
        cordova.plugins.barcodeScanner.scan(
            success,
            error,
            config
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
  browserCheckPersisted: function() {
    if (navigator.storage && navigator.storage.persist) {
      navigator.storage.persist().then(function (isPersisted){
        if (!isPersisted) {
            document.getElementById('persistInfo').classList.add('show');
        }
      });
    } else {
        document.getElementById('persistInfo').classList.add('show');
    }
  },
  browserInitPWA: function() {
    let deferredPrompt;
    const isPwa = navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;
    if (!isPwa) {
        document.getElementById('pwaInfo').classList.add('show');
        window.addEventListener('beforeinstallprompt', (e) => {
          e.preventDefault();
          deferredPrompt = e;
          document.getElementById('installPwa').classList.add('show');
          console.log('beforeinstallprompt');
        });
        document.getElementById('installPwa').addEventListener('click', async () => {
          document.getElementById('installPwa').classList.remove('show');
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt.userChoice;
          deferredPrompt = null;
        });
        window.addEventListener('appinstalled', (evt) => {
            document.getElementById('pwaInfo').classList.remove('show');
        });
    }
  },
  checkForUpdates: function(callback) {
    if (device.platform == 'browser') {
        this.browserCheckPersisted();
        this.browserInitPWA();
        //TODO protocol handler:
        //navigator.registerProtocolHandler('web+coffee', 'http://localhost:8879/TEST?%s', 'Coffee Wallet');
        console.log('registering SW');
        if ('serviceWorker' in navigator) {
           navigator.serviceWorker.register('./sw.js').then(function(registration) {
             console.log('ServiceWorker registration successful with scope: ', registration.scope);
           }, function(err) {
             console.log('ServiceWorker registration failed: ', err);
           });
            console.log('Checking for updates...');
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState == 4) {
                    if (xmlHttp.status == 200) {
                        var newVersionData = JSON.parse(xmlHttp.responseText);
                        if (newVersionData.version != window.version) {
                            navigator.splashscreen.hide();
                            app.confirmBeforeContinue(
                                'Update Available',
                                'New version of Coffee Wallet is available.<br/>' +
                                'You are running: <strong>' + window.version + '</strong><br/>' +
                                'New version available: <strong>' + newVersionData.version + '</strong><br/>' +
                                'It is recommended to update to latest version.',
                                function(){
                                    document.getElementById('loading').classList.add('show');
                                    navigator.serviceWorker.ready.then(registration => {
                                        registration.update().then(() => {
                                             console.log('updated');
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
                        } else {
                            callback();
                        }
                    } else {
                        callback();
                    }
                }
            }
            xmlHttp.open( "GET", '/version.json', true );
            xmlHttp.send( null );
        } else {
           callback();
        }
    } else {
        callback();
    }
  }
}
