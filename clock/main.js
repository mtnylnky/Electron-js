const { app, Menu, BrowserWindow, ipcMain, dialog} = require('electron');

function createWindow() {
    win = new BrowserWindow({
        width: 400,
        height: 400,
        frame: false,
        resizable: false,
        transparent:true
    });
    win.removeMenu()
    win.loadFile('index.html')
    //win.webContents.openDevTools()
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