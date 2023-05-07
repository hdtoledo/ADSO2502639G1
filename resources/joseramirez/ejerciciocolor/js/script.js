const boton = document.querySelector(".btncolor");
const fondo = document.querySelector("body");
const colores = [
    "blue",
    "red",
    "black",
    "gray",
    "pink",
    "gold",
    "green",
]

function coloraleAtorio(){
    return colores[Math.floor(Math.random()* colores.length)];
}
boton.addEventListener("click", function () {
    const color = coloraleAtorio();
    fondo.style.background = color;
    console.log('si ha cambiado');  
});