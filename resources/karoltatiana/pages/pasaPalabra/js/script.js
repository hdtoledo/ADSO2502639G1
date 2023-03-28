//total de preguntas del juego

const TOTAL_PREGUNTAS = 10;

//creamos las letras de la A a la J

const container = document.querySelector('.container');
for (let i = 1; i < TOTAL_PREGUNTAS; i++) {
    const circule = document.createElement('div');
    circle.classList.add('circle');
    circle.textContent = string.fromCharCode(i+ 96);
    circle.id = string.fromCharCode(i + 96);
    container.appendChild(circle);
}