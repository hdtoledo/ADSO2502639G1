
const button = document.querySelector(".mibutton");
let background = document.querySelector("body");
const colores = ["red" , "green" , "yellow"];

button.addEventListener("click" , () =>  {
    cambiarcolor();
})

function cambiarcolor () {
    let random0 = parseInt(Math.random  () * colores.length);
    background.style.backgroundColor = colores[random0];
}