let colores = ["red","green","blue","yellow","purple","gray","orange"];
let indexcolor = 0;
let contador = 0;

function cambiarColor() {
    document.body.style.backgroundColor = colores[indexcolor];
    indexcolor = (indexcolor + 1) % colores.length;
    contador++;
    console.log("el boton ha sido presionado" + contador + "veces");
}