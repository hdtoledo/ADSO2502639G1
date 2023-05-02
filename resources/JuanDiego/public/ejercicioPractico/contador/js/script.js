// Instancias HTML
let numero = document.querySelector('.numero');
const decrementoBtn = document.querySelector('.decremento');
const incrementoBtn = document.querySelector('.incremento');
const resetBtn = document.querySelector('.reset');
let contador = 0;


decrementoBtn.addEventListener('click',() => {
    contador --;
    numero.textContent = contador;
    if (contador < 0) {
        numero.style.color = 'red';
    } else if ( contador == 0) {
        numero.style.color = 'black';
    }
});

incrementoBtn.addEventListener('click',() => {
    contador ++;
    numero.textContent = contador;
    if (contador > 0) {
        numero.style.color = 'green';
    } else if (contador == 0) {
        numero.style.color = 'black';
    }
});

resetBtn.addEventListener('click', () => {
    contador = 0
    numero.textContent = contador;
    numero.style.color = 'black';
});

