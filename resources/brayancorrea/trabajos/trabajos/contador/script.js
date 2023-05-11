const btnAumentar = document.querySelector('.aumento');
const btnDisminuir = document.querySelector('.disminuir');
const btnReiniciar = document.querySelector('.reinicio');
const numeros = document.querySelector('.numeros');

let contador = 0;

btnAumentar.addEventListener('click', () => {
  contador++;
  numeros.textContent = contador;
  numeros.style.textAlign = 'center';
  numeros.style.marginTop = '20px';
});

btnDisminuir.addEventListener('click', () => {
  contador--;
  numeros.textContent = contador;
});

btnReiniciar.addEventListener('click', () => {
  contador = 0;
  numeros.textContent = contador;
});
