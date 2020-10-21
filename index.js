const {app, Menu, ipcMain} = require('electron');

// Internal imports
const mainWindow = require("./windows/mainWindow");
const signinWindow = require("./windows/signinWindow");
// const dashboardWindow = require("./windows/dashboardWindow");
const appMenu = require("./config/Menu");
const singninWindow = require('./windows/signinWindow');


// Listen for app to be ready
app.on('ready', () => {
  // Create new window
  mainWindow();
  Menu.setApplicationMenu(appMenu);
});




// Catching events from clients
ipcMain.on("login", ()=>{
   signinWindow();
  // dashboardWindow();
})
ipcMain.on("signin", ()=>{
   let signin = singninWindow();
   signin.close();
   signin = null
  // dashboardWindow();
})

ipcMain.on('ondragstart', (event, filePath) => {
  event.sender.startDrag({
    file: filePath,
    icon: filePath
  })
})