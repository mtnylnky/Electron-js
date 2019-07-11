const { app, Menu, BrowserWindow, ipcMain, dialog} = require('electron')
 
function createWindow() {
    win = new BrowserWindow({
        width: 640,
        height: 480,
        maximizable: false,
        resizable: false
    }); 
    win.loadFile('index.html')
    //win.webContents.openDevTools()
    win.on('closed', () => {
        win = null
    })
    var menu = Menu.buildFromTemplate([
        {
            label: 'Menu',
            submenu: [
                {label:'About Program',click(){}},
                {type:'separator'},
                {label:'Exit',click() {app.quit()}}
            ]
        }
    ]);
    Menu.setApplicationMenu(menu);
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