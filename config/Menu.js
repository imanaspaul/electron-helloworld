const { Menu, app } = require("electron");


const mainMenu =  [
  // Each object is a dropdown
  {
    label: 'Option',
    submenu:[
      {
        label: 'Quit',
        accelerator:process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click(){
          app.quit();
        }
      }
    ]
  }
];
const appMenu = Menu.buildFromTemplate(mainMenu);
module.exports = appMenu;