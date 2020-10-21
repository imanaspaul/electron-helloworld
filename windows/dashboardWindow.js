const {app, BrowserWindow}  = require("electron");


// Initialize main window
const dashboardWindow = () => {
  let dashboardWindow = new BrowserWindow();
  // Load html in window
  dashboardWindow.loadFile("./templates/dashboard.html")
  // Quit app when closed
  dashboardWindow.on('closed', function(){
    app.quit();
  });
  return dashboardWindow;
}

module.exports = dashboardWindow;
