// Native
const { format } = require('url')

// Packages
const { BrowserWindow, app } = require('electron')
const isDev = require('electron-is-dev')
const prepareNext = require('electron-next')
const { resolve } = require('app-root-path')

require('electron-debug')({enabled: isDev, showDevTools: isDev})

let mainWindow

app.customDir = isDev ? false : app.getAppPath() + '/node_modules/farseer/lib'
// Prepare the renderer once the app is ready

app.on('ready', async () => {
  await prepareNext('./renderer')

  mainWindow = new BrowserWindow({
    width: 300,
    height: 106,
    maxWidth: 300,
    maxHeight: 900,
    minHeight: 106,
    minWidth: 300,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      devTools: true
    }
  })

  const devPath = 'http://localhost:8000/index'

  const prodPath = format({
    pathname: resolve('renderer/out/index/index.html'),
    protocol: 'file:',
    slashes: true
  })

  const url = isDev ? devPath : prodPath
  mainWindow.loadURL(url)
})

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit)
