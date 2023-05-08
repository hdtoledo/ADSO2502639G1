const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const botones = document.querySelector(".btn");
const imagenes = document.querySelector(".images");

let imgMuestra = ["foto1","foto2","foto3","foto4","foto5","foto5"];

let contador = 0;

btnLeft.addEventListener("click",izquierda);
btnRight.addEventListener("click",derecha);

function derecha(){
    contador++;
    if(contador>imgMuestra.length-1){
        contador = 0;
    }
    imagenes.style.background = `url("img/${imgMuestra[contador]}.jpg")`;
}

function izquierda(){
    contador--;
    if(contador<0){
        contador = imgMuestra.length-1;
    }
    imagenes.style.background = `url("img/${imgMuestra[contador]}.jpg")`;
}