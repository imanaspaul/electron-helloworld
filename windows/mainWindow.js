const {app, BrowserWindow}  = require("electron");
const path = require('path');
const url = require('url');


// Initialize main window
const mainWindow = () => {
  let mainWindow = new BrowserWindow({
      autoHideMenuBar: true,
      webPreferences: {
                  nodeIntegration: true
                      }
    });
  // Load html in window
  mainWindow.loadFile("./templates/index.html")
  mainWindow.webContents.openDevTools();
}

module.exports = mainWindow;
