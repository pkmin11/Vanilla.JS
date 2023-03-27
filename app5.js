const loginForm = document.querySelector("#Login-form");
const loginInput = document.querySelector("#Login-form input");
const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);