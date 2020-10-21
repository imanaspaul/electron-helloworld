const {app} = require('electron');

// Internal imports
const mainWindow = require("./windows/mainWindow");


// Listen for app to be ready
app.on('ready', () => {
  // Create new window
  mainWindow();
});

