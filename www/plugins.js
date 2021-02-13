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
  }
}

document.addEventListener("deviceready", function(){
    if (device.platform == 'browser') {
        console.log('registering SW');
        if ('serviceWorker' in navigator) {
           navigator.serviceWorker.register('./sw.js').then(function(registration) {
             console.log('ServiceWorker registration successful with scope: ', registration.scope);
           }, function(err) {
             console.log('ServiceWorker registration failed: ', err);
           });
           //navigator.registerProtocolHandler('web+coffee', 'http://localhost:8879/TEST?%s', 'Coffee Wallet');
        };
    }
});
