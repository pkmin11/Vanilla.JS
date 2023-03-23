/*const title = document.getElementById("something");

title.innerText ="Got you!"

console.log(title.id);
console.log(title.className);


const hellos = document.getElementsByClassName("hello");

console.log(hellos);*/

/*const title =document.querySelector("div.hello:first-child h1");

console.log(title);

title.innerText = "Hello";

title.style.color = "blue";*/

const h1 =document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick(){
    h1.style.color = "blue";
    h1.innerText = "title was clicked!";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI!");
}

function handleWindowOnline(){
    alert("ALL GOOD");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
// ()을 붙이지 않는 이유 : 자바스크립이 대신 실행하도록 시키기 위해


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);