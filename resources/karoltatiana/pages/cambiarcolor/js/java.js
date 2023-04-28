const btn=document.querySelector("button");
const body=document.querySelector("body");

const colores=['red', 'blue', 'green', 'purple', 'yellow', 'pink'];
let contador = 0;

btn.addEventListener("click",fondo);

function fondo(){
    const color=parseInt(Math.random()*colores.length);
    body.style.backgroundColor=colores[color];
    contador++;
    console.log(contador);
};