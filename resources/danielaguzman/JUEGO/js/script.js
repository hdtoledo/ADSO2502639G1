const numero = document.querySelector(".num");
const aumentar = document.querySelector(".aum");
const disminuir = document.querySelector(".dis");
const resetear = document.querySelector(".rest");
let resultado = 0;
aumentar.addEventListener("click", function (){
    resultado = resultado + 1;
    numero.textContent = resultado;
    if(resultado > 0 ){  
        numero.style.color = "green";

    }
});
disminuir.addEventListener("click", function (){
    resultado = resultado - 1;
    numero.textContent = resultado;
    if(resultado < 0 ){
        numero.style.color = "red";
    }
});
resetear.addEventListener("click", function (){
    resultado = 0;
    numero.textContent = resultado;
    if(resultado === 0 ){
        numero.style.color = "black";
    }

});