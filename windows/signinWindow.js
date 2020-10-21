const {app, BrowserWindow}  = require("electron");
const path = require('path');
const url = require('url');


// Initialize main window
const singninWindow = () => {
  let singninWindow = new BrowserWindow({
      autoHideMenuBar: true,
      webPreferences: {
                  nodeIntegration: true
                      }
    });
  // Load html in window
  singninWindow.loadFile("./templates/signin.html")
  singninWindow.webContents.openDevTools();
  return singninWindow;
}

module.exports = singninWindow;
