const { ipcRenderer } = require("electron");

// dom element selection
const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(email.value != '' && password.value != ""){
        msg.innerHTML = "All values are correct";
        if(email.value == "admin@domain.com" && password.value == "root"){
              msg.innerHTML = "Logged in";
              ipcRenderer.send("login");
        }
        else{
              msg.innerHTML = "Credentials are not correct";
        }
    }
    else{
        msg.innerHTML = "Please enter the correct value to each field";
    }
})