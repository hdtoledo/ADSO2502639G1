// Instancias HTML
const btn = document.querySelector('.boton');
const fondo = document.body;

// Cambio de color
const colors = ['#DA70D6', '#FAEBD7', '#e3a8a8', '#89aac7', '#F08080', '#f5f5b3', '#f29dba']
let contador = 1;
btn.addEventListener('click', () => {
    let i = Math.floor(Math.random() * 6) + 0;
    fondo.style.backgroundColor = colors[i]
    console.log(contador++);
});


