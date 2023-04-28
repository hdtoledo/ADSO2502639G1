const numeros = document.querySelector('.numeros');
const btnDisminuir = document.querySelector('.disminuir');
const btnAumento = document.querySelector('.aumento');
const btnReinicio = document.querySelector('.reinicio');


let contador = 0;

btnDisminuir.addEventListener('click', () => {
  contador--;
  numeros.textContent = contador;
  if (contador < 0) {
      numeros.style.color = "red";
  } else if (contador == 0) {
    numeros.style.color = "black"
  }
});

btnAumento.addEventListener('click', () => {
  contador++;
  numeros.textContent = contador;
  if (contador > 0) {
    numeros.style.color = "green";
} else if (contador == 0) {
  numeros.style.color = "black"
}
});

btnReinicio.addEventListener('click', () => {
  contador = 0;
  numeros.textContent = contador;
  numeros.style.color = "black"
});
