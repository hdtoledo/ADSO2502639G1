const colores = ["red", "green", "blue", "yellow", "purple", "pink", "gray", "violet", "black", "white"];
const body = document.querySelector("body");
const boton = document.getElementById("miboton");

function cambiarcolor (){
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    body.style.backgroundColor = colorAleatorio;
}

boton.addEventListener("click", cambiarcolor);

function cambiarcolor2 (){
    const colorAleatorio2 = colores[Math.floor(Math.random() * colores.length)];
    miboto.style.backgroundColor=colorAleatorio2;

}

boton.addEventListener("click", cambiarcolor2);
