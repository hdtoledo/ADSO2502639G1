const butto = document.querySelector(".butto")
let background = document.querySelector("body")
const colores =["red","green","yellow", "blue", "violet"];

butto.addEventListener('click', () => {
    cambiarColor()
})
function cambiarColor (){
    let randomO = parseInt(Math.random() * colores.length);
    background.style.backgroundColor = colores[randomO]
}