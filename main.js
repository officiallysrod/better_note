const electron = require('electron');
const { app, BrowserWindow } = electron;

// keep a global reference of the window object, else the window will
// be closed automatically when the JS object is garbage collected.
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1200, height: 800 });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Called when Electron has finished initialization
// and is ready to create browser windows.
app.on('ready', createWindow);

// quit when all windows are closed, unless macOS
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
