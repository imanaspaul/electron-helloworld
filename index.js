const {app, Menu} = require('electron');

// Internal imports
const mainWindow = require("./windows/mainWindow");
const appMenu = require("./config/Menu");


// Listen for app to be ready
app.on('ready', () => {
  // Create new window
  mainWindow();
  Menu.setApplicationMenu(appMenu);
});

