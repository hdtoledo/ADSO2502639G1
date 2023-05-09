const btn=document.querySelector('button');
const body=document.querySelector('body');
let contador = 0

const colores=['blue','yellow','green','black','white','red','orange','yellowgreen'];

btn.addEventListener('click',fondo);

const cout = () => {contador++} 

function fondo(){
    let indice=parseInt(Math.random()*colores.length)
    body.style.backgroundColor=colores[indice];
    cout()
    console.log(contador)
}