const boton = document.querySelector(".btncolor");
const fondo = document.querySelector("body");
const colores = [
    "pink",
    "white",
    "yellow",
    "green",
    "orange",
    
]

function coloraleAtorio(){
    return colores[Math.floor(Math.random()*colores.length)];
}
boton.addEventListener("click", function () {
    const color = coloraleAtorio();
    fondo.style.background = color;
    console.log('si ha cambiado');
});