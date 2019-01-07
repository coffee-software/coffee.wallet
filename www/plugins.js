'use strict'



var osPlugins = {

  generatePDF: function(html, file, success, error){
    if (device.platform == 'browser') {
      console.log(html);
      //osPlugins.openInSystemBrowser('data:text/html;charset=UTF-8,' + encodeURIComponent(html));
      app.alertInfo('wallet info printed to console');
      success();
    } else {
      pdf.fromData(html, {
          documentSize: 'A4',
          type: 'share',
          fileName: fileName
      })
      .then(function(stats){
        success();
      })
      .catch(function(err) {
        error(err);
      });
    }
  },
  openInSystemBrowser: function(url) {
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
}
