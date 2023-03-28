
const TOTAL_PREGUNTAS =10;

const timer = document.getElementById('tiempo');

const TIEMPO_DEL_JUEGO = 60;

let tiempoRestante = TIEMPO_DEL_JUEGO;

let countdown;

const container = document.querySelector('.container');
for (let i = 1; i <= TOTAL_PREGUNTAS; i++){
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.textContent = String.fromCharCode(i + 96);
    circle.id = String.fromCharCode(i + 96) .toUpperCase();
    container.appendChild(circle);

    const angle = ((i - 1) / TOTAL_PREGUNTAS) * Math.PI * 2 - (Math.PI / 2);
    const x = Math.round(95 + 120 * Math.cos(angle));
    const y = Math.round(95 + 120 * Math.sin(angle));
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
}
let comenzar = document.getElementById('comenzar');
comenzar.addEventListener('click' , ()=>{
    document.getElementById('Pantalla-inicial').style.display = 'none';
    document.getElementById('Pantalla-juego').style.display = 'block';

    iniciarContador();
});
function iniciarContador() {
    countdown = setInterval(()=>{
        tiempoRestante--;

        timer.innerText = tiempoRestante;

        if(tiempoRestante === 0){
            clearInterval(countdown);
        }
    } , 1000);
}