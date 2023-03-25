const bodySelector = document.querySelector("body");
const title = document.createElement("h1");
title.innerText = "hello!";
bodySelector.appendChild(title);
bodySelector.style.color = "white";

function pagewidth() {
  if (window.innerWidth > 500 && window.innerWidth < 700) {
    console.log(window.innerWidth);
    bodySelector.style.backgroundColor = "blue";
  } else if (window.innerWidth >= 700 && window.innerWidth < 850) {
    console.log(window.innerWidth);
    bodySelector.style.backgroundColor = "purple";
  } else if (window.innerWidth >= 850) {
    console.log(window.innerWidth);
    bodySelector.style.backgroundColor = "orange";
  }
}

window.addEventListener("resize", pagewidth);
