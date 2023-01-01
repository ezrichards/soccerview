const { app, BrowserWindow } = require('electron')
const electron = require('electron');
const path = require('path')

const createWindow = () => {
  var screenElectron = electron.screen;
  var mainScreen = screenElectron.getPrimaryDisplay();
  var dimensions = mainScreen.size;
  
  const win = new BrowserWindow({
    width: dimensions.width, 
    height: dimensions.height, 
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('index.html')
}

app.commandLine.appendSwitch('disable-color-correct-rendering');
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
