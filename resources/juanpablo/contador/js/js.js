let contador = 0;
const contadorHTML = document.getElementById("valor")

function actualizarContador() {
    contadorHTML.textContent = contador;

     if (contador > 0) {
        valor.style.color= "green";
      } else if (contador == 0){
        valor.style.color= "white";
      }
       else {
        valor.style.color= "red";
      }
    }


  

function incrementar(){
    contador++
    actualizarContador()
   
   
    
}
function resetear(){
    contador = 0
    actualizarContador(contador)
    
    
}
function decrementar(){
    contador--
    actualizarContador()
  
    
    
}

const btnIncrementar = document.getElementById("btn-incrementar");
const btnResetear = document.getElementById("btn-resetear");
const btnDecrementar = document.getElementById("btn-decrementar");


btnIncrementar.addEventListener("click", incrementar);
btnResetear.addEventListener("click", resetear);
btnDecrementar.addEventListener("click", decrementar);
