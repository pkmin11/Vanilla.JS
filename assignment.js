/*
마우스가 title위로 올라가면 텍스트가 변경되어야 합니다.
마우스가 title을 벗어나면 텍스트가 변경되어야 합니다.
브라우저 창의 사이즈가 변하면 title이 바뀌어야 합니다.
마우스를 우 클릭하면 title이 바뀌어야 합니다.
title의 색상은 colors 배열에 있는 색을 사용해야 합니다.
.css 와 .html 파일은 수정하지 마세요.
모든 함수 핸들러는 superEventHandler내부에 작성해야 합니다.
모든 조건이 충족되지 못하면 ❌를 받습니다.*/


const h1 =document.querySelector("div.hello:first-child h1");



function handleMouseEnter(){
    h1.style.color = "green";
    h1.innerText = "The Mouse is here!";
}

function handleMouseLeave(){
    h1.style.color = "blue";
    h1.innerText = "The Mouse is gone!";
}

function handleWindowResize(){
    h1.style.color = "purple";
    h1.innerText = "You just Resized!";
}

function handleWindowcontextmenu(){
    h1.style.color = "red";
    h1.innerText = "That was a right click!";
}

h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("contextmenu", handleWindowcontextmenu);
