const {app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow() {
  //create the browser window
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600 //,
    //Is this another file that I will make shortly? 
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js')
    // }
  })

  //load app's index.html file
  mainWindow.loadFile('index.html');

  //what does opening DevTools do? 
  // Open the DevTools
  // mainWindow.webContents.openDevTools();
}

//when Electron has completed initialization it calls the .on method

app.on('ready', createWindow);

//when all windows are closed the app will quit (not needed on Darwin OS)
app.on('window-all-closed', function() {
  if (process.platform !== "darwin") app.quit();
});

app.on('activate', function() {
  //recreate a window in the app when the dock icon is clicked and no other windows are open
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

//rest of app's specific main processes can go here OR can go in separate files and be required in 
