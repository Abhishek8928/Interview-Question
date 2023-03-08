let colorBox = document.getElementsByClassName("small-box");
let currentColorHolder;

for (let i = 0; i < colorBox.length; i++){
    colorBox[i].addEventListener("click", () => {
        currentColorHolder = colorBox[i].innerHTML;
    })
}


let Box = document.getElementsByClassName("block");


for (let k = 0; k < Box.length; k++){
    Box[k].addEventListener("click", () => {
        Box[k].style.backgroundColor = currentColorHolder;
    })
}