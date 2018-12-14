'use strict'

var ipcRenderer = require('electron').ipcRenderer
var shell = require('electron').shell;

var pdfSuccessCallback;
var pdfErrorCallback;

ipcRenderer.on('call-app-method', (event, arg) => {
  app[arg]();
});

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
  },
  openInSystemBrowser: function(url) {
    shell.openExternal(url);
  }

}
