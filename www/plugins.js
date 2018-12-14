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
    window.open(url, '_');
  }
}
