const btnColor = document.querySelector('.btn');
const cambiabody = document.querySelector('body');

const colores = ['red', 'gray', 'yellow', 'blue', 'green', 'purple'];
let contador = 0;

btnColor.addEventListener('click', fondo);

function fondo(){
    const color = parseInt(Math.random()*colores.length);
    cambiabody.style.backgroundColor = colores[color];
    contador++;
    console.log(contador);
}

