'use strict'



var osPlugins = {

  generatePDF: function(html, file, success, error){
    if (device.platform == 'browser') {
      console.log(html);
      //window.open('data:text/html;charset=UTF-8,' + encodeURIComponent(html), '_system');
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
  }
}
