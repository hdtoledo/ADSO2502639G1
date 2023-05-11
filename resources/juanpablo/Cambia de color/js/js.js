

const boton = document.querySelector(".miBoton")
let background = document.querySelector("body")
const colores =["red", "green", "yellow", "blue", "violet"];



boton.addEventListener("click", function() {
    cambiarColor();

});

function cambiarColor (){
    let random0 = parseInt(Math.random() * colores.length);
    background.style.backgroundColor = colores[random0];
}
