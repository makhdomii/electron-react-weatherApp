const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
let mainWindow;

const createWindow = () => {
    const browserDetail = {
        titleBarStyle: 'hidden',
        width: 1200,
        height: 800,
        transparent: true,
        frame: false,
        webPreferences: {
            webSecurity: false,
            nodeIntegration: true,
            preload: __dirname + '/preload.js'
        }
    }
    mainWindow = new BrowserWindow(browserDetail);
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});