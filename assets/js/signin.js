const { ipcRenderer } = require("electron");

// dom element selection
const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    ipcRenderer.send("signin");
})