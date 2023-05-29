const btn=document.querySelector('button');
const body=document.querySelector('body');
let contador = 0

const colors = ['red','blue','orange','pink',"green","yellow","brown","white","gray","violet"];

btn.addEventListener('click',fondo);
const count = () => {contador++}

function fondo(){
    let indice=parseInt(Math.random()*colors.length)
    body.style.backgroundColor=colors[indice];
    count()
    console.log("El boton ha sido presionado " + contador + " veces.")
}