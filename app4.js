
const h1 =document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
   /* const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;*/
    
    /*const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)){
    h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    } = */

h1.classList.toggle("clicked");
// classList에 clicked가 존재하면 remove
// 존재하지 않으면 clicked를 add 해주는 역할을 한다
    
}

h1.addEventListener("click", handleTitleClick);