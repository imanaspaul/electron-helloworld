const {app, Menu, ipcMain} = require('electron');

// Internal imports
const mainWindow = require("./windows/mainWindow");
const dashboardWindow = require("./windows/dashboardWindow");
const appMenu = require("./config/Menu");


// Listen for app to be ready
app.on('ready', () => {
  // Create new window
  mainWindow();
  Menu.setApplicationMenu(appMenu);
});

// Catching events from clients
ipcMain.on("login", ()=>{
  dashboardWindow();
  mainWindow.close();
})