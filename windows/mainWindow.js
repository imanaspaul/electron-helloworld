const {app, BrowserWindow}  = require("electron");
const path = require('path');
const url = require('url');


// Initialize main window
const mainWindow = () => {
  let mainWindow = new BrowserWindow({
      icon : __dirname + `/assets/icons/win/icon.ico` // icon is not workinng now
  });
  // Load html in window
  mainWindow.loadFile("./templates/index.html")
  // Quit app when closed
  mainWindow.on('closed', function(){
    app.quit();
  });
}

module.exports = mainWindow;