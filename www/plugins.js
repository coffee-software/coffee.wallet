'use strict'



var osPlugins = {

  generatePDF: function(html, file, success, error){
    if (device.platform == 'browser') {
      console.log(html);
      //osPlugins.openInSystemBrowser('data:text/html;charset=UTF-8,' + encodeURIComponent(html));
      app.alertInfo('wallet info printed to console');
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
      app.alertError('Don\'t know how to do this on this platform');
    }
  },
  shareDialog: function(subject, message, successHandler, errorHandler) {

    if (device.platform == 'browser') {
      app.alertInfo('share code printed to console');
      console.log(message);
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
      //TODO copy to clip on browser
      console.log(text);
    } else {
      cordova.plugins.clipboard.copy(text);
    }
  }
}
