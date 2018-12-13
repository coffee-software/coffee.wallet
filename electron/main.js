// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, dialog} = require('electron')
var fs = require('fs')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

ipcMain.on('print-pdf', (event, arg) => {

    var tmpWindow = new BrowserWindow({show : false});
    tmpWindow.loadURL('data:text/html;charset=UTF-8,' + encodeURIComponent(arg.html));

    dialog.showSaveDialog({
      title: 'Save Paper Wallet',
      defaultPath: '~/' + arg.file + '.pdf',
      filters: [{
        name: 'PDF',
        extensions: ['pdf']
      }]
    }, function(file_path) {

      tmpWindow.webContents.printToPDF({
          landscape: false,
          marginsType: 0,
          printBackground: false,
          printSelectionOnly: false,
          pageSize: "A4",
      }, function(err, data) {
          if (err) {
            event.sender.send('print-pdf-error', err);
          } else if (file_path) {
            fs.writeFile(file_path, data, function(err){
              if (err){
                event.sender.send('print-pdf-error', {err});
              } else {
                event.sender.send('print-pdf-success', null);
              }
            });
          } else {
            event.sender.send('print-pdf-error', 'Cancelled');
          }
      });
    });
});

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
      titleBarStyle: 'hidden',
      width: 500,
      height: 800,
      minWidth: 300,
      minHeight: 300,
      backgroundColor: '#312450',
      icon: 'icon.png'
  })
  mainWindow.setMenu(null);

  // and load the index.html of the app.
  mainWindow.loadFile('www/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
