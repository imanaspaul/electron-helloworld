const { Menu, app } = require("electron");


const mainMenu =  [
  // Each object is a dropdown
  {
    label: 'Option',
    submenu:[
      {
        label: 'Quit',
        accelerator:'CommandOrCtrl+Q',
        click(){
          app.quit();
        }
      }
    ]
  },
  {
    label : "Logout"
  }
];
const appMenu = Menu.buildFromTemplate(mainMenu);
module.exports = appMenu;