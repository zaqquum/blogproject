const login = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const loginInput = login.querySelector("input"); 
const loginButton = login.querySelector("button");
const HIDDEN_NAME ="hidden";
const USERNAME_KEY = "username";

const  savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event){
    event.preventDefault();
    login.classList.add(HIDDEN_NAME);
    localStorage.setItem(USERNAME_KEY,loginInput.value);
    paintgreeting();
}

function paintgreeting(){
    const name = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${name}`;
    greeting.classList.remove(HIDDEN_NAME);
}
 

if(savedUsername === null){
    login.classList.remove(HIDDEN_NAME);
    login.addEventListener("submit",onLoginSubmit);
}
else{
   paintgreeting();
}