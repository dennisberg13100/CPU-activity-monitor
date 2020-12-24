const {app, BrowserWindow} = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    backgroundColor: "#111"
  })

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);