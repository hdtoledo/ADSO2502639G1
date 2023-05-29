let puntoUsuario = 0;
let puntosPc = 0;

let contenedorPuntoUsuario = document.querySelector("#puntos-usuario")
let contenedorPuntoPc = document.querySelector("#puntos-computadora")
let mensaje = document.querySelector("#mensaje")
let contenedorGanaPunto = document.querySelector("#gana-punto")
let elegiTuArma = document.querySelector("#elige-tu-arma")
let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario")
let contenedorEleccionPc = document.querySelector("#eleccion-computadora")


let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
})

function iniciarTurno(e){
    let eleccionPc = Math.floor(Math.random() * 3)
    let eleccionUsuario =e.currentTarget.id;
    console.log(eleccionUsuario)

    if (eleccionPc === 0){
        eleccionPc = "piedra🪨"
    }else if(eleccionPc === 1){
        eleccionPc = "papel📋"
    } else if ( eleccionPc === 2){
        eleccionPc = "tijera✂️"
    }



    if(
    (eleccionUsuario ==="piedra🪨" && eleccionPc === "tijera✂️")|| 
    (eleccionUsuario ==="tijera✂️" && eleccionPc === "papel📋")|| 
    (eleccionUsuario ==="papel📋" && eleccionPc === "piedra🪨")
    ){
        ganaUsuario();
    }else if(
        (eleccionPc ==="piedra🪨" && eleccionUsuario === "tijera✂️")|| 
        (eleccionPc ==="tijera" && eleccionUsuario=== "papel📋")|| 
        (eleccionPc ==="papel📋" && eleccionUsuario === "piedra🪨")
    ){
        ganaPc();
    }else{
        empate();
    }
    reiniciar.addEventListener("click", reiniciarJuego);

    mensaje.classList.remove("disable")
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPc.innerText= eleccionPc;
    

    function ganaUsuario (){
    puntoUsuario++;
    contenedorPuntoUsuario.innerText = puntoUsuario;
    contenedorGanaPunto.innerText = "!Ganaste un punto"
   
    }

    function ganaPc (){
        puntosPc++;
        contenedorPuntoPc.innerText = puntosPc;
        contenedorGanaPunto.innerText = "!Gana un punto la computadora"
       
        }

    function empate (){
        
            contenedorGanaPunto.innerText = "!Empate"
           
            }
   
    function reiniciarJuego(){
        puntoUsuario = 0;
        puntosPc= 0;

        contenedorPuntoUsuario.innerText = puntoUsuario;
        contenedorPuntoPc.innerText = puntosPc;
    }
    
  




    
    
}

