const { app, Menu, BrowserWindow, ipcMain, dialog} = require('electron')
const url = require('url');
const path = require('path');

function createWindow() {
    win = new BrowserWindow({
        width: 2550,
        height: 1920
    });
    win.setFullScreen(true)
    win.removeMenu()
    win.loadFile('index.html')
    //win.webContents.openDevTools()
    const configFile = path.join(path.dirname(__dirname), 'extraResources','config.json');
}

app.on('ready', (createWindow))
 
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
 
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
 
ipcMain.on("btnclick", (event, arg) => {
    var response = "Hello " + arg + ".How are you today?"
    event.sender.send("btnclick-task-finished", response);
})