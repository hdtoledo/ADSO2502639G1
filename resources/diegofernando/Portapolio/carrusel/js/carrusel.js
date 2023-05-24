const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const botones = document.querySelector(".btn");
const imagenes = document.querySelector(".images");

let imgMuestra = ["001","002","003","004","005","006","007","008","009"];

let contador = 0;

btnLeft.addEventListener("click",izquierda);
btnRight.addEventListener("click",derecha);

const style = () => {
    imagenes.style.backgroundAttachment= "fixed";
    imagenes.style.backgroundPosition= "center";
    imagenes.style.backgroundSize= "1400px 820px";
    imagenes.style.backgroundRepeat= "no-repeat";
}

style();

function derecha(){
    contador++;
    if(contador>imgMuestra.length-1){
        contador = 0;
    }
    imagenes.style.background = `url("img/${imgMuestra[contador]}.jpg")`; 
    style();
}


function izquierda(){
    contador--;
    if(contador<0){
        contador = 8;
    }
    imagenes.style.background = `url("img/${imgMuestra[contador]}.jpg")`;
    style();
}

