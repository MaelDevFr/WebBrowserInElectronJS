const {contextBridge, ipcRenderer} = require("electron")

window.addEventListener("DOMContentLoaded",(e)=>{
    console.log("DOM Loaded with success !");    
})
contextBridge.exposeInMainWorld("api",{
    sendUrl: (url) => ipcRenderer.send("url-changed",url)
})