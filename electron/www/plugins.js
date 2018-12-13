'use strict'

var ipcRenderer = require('electron').ipcRenderer

var pdfSuccessCallback;
var pdfErrorCallback;

ipcRenderer.on('print-pdf-success', (event, arg) => {
  pdfSuccessCallback();
});

ipcRenderer.on('print-pdf-error', (event, arg) => {
  pdfErrorCallback(arg);
});

var osPlugins = {
  generatePDF: function(html, file, success, error){
    ipcRenderer.send('print-pdf', {
        html: html,
        file: file
    });
    pdfSuccessCallback = success;
    pdfErrorCallback = error;
  }

}
