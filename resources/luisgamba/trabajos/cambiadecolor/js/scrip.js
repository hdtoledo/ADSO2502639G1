let colores = ["red", "yellow", "green", "blue"];
let indexColor = 0;
let contador = 0;

function cambiarColor() {
  document.body.style.backgroundColor = colores[indexColor];
  indexColor = (indexColor + 1) % colores.length;
  contador++;
  console.log("El botón ha sido presionado " + contador + " veces");
}
