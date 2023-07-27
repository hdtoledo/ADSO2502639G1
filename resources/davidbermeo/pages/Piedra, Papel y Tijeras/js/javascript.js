function playGame(userChoise){
    const choises = ['piedra', 'papel', 'tijeras'];
    const randomIndex = Math.floor(Math.random()*3);
    const computerChoise = choises[randomIndex];

    let result ="";

    if(userChoise === computerChoise){
        result = "¡Empate!";
    }else if(
        (userChoise === 'piedra' && computerChoise === 'tijeras')||
        (userChoise === 'papel' && computerChoise === 'piedra')||
        (userChoise === 'tijeras' && computerChoise === 'papel')
    ){
        result = "¡Ganaste!";
    }else {
        result = "¡Perdiste!";
    }

    let puntosUsuario = 0;
    let puntosPC = 0;
    
    let instrucciones =
    document.querySelector("instrucciones");
    let contenedorPuntosUsuario =
    document.querySelector("#puntos-usuarios");
    let contenedorPuntosPC =
    document.querySelector("#puntos-computadora");
    let mensaje = document.querySelector("#mensaje");
    let contenedorGanaPunto =
    document.querySelector("#gana-punto");
    let elegiTuArma =
    document.querySelector("#elegi-tu-arma");

    document.getElementById('result').innerText =
    `Elegiste ${userChoise}. La computadora eligio $ {computerChoise}.${result}`;
}

let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones =
document.querySelector("#instrucciones");
let contenedorPuntosUsuario =
document.querySelector("#puntos-usuario");
let contenedorPuntosPC =
document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto =
document.querySelector("#gana-punto");
let elegiTuArma =
document.querySelector("#elegi-tu-arma");

let contenedorEleccionUsuario =
document.querySelector("#eleccion-usuario");
botonesArmas.forEach(boton =>{
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {

    let eleccionPC = Math.floor(Math.random () *3);
    let eleccionUsuario = e.currentTarget.id;

    //piedra => 0
    //papel => 1
    //tijera => 2

    if (eleccionPC === 0){
        eleccionPC = "piedra🗿";
    }else if (eleccionPC === 1){
        eleccionPC = "papel📜"
    }else if(eleccionPC === 2){
        eleccionPC = "tijera✂️"
    }

    //piedra vence a tijera
    //tijera vence a papel
    //papel vence a piedra
    //si son iguales es empate

    if(
        (eleccionUsuario === "piedra🗿" && eleccionPC === "tijera✂️")||
        (eleccionUsuario === "tijera✂️" && eleccionPC === "papel📜")||
        (eleccionUsuario === "papel📜" && eleccionPC === "piedra🗿")
    ){
        ganaUsuario();
    }else if(
        (eleccionUsuario === "piedra🗿" && eleccionPC === "tijera✂️")||
        (eleccionUsuario === "tijera✂️" && eleccionPC === "papel📜")||
        (eleccionUsuario === "papel📜" && eleccionPC === "piedra🗿")
    ){
        ganaPC();
    }else{
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText =
    eleccionUsuario;
    contenedorEleccionPC.innerText = eleccionPC;

    if(puntosUsuario === 5 || puntosPC === 5){

        if(puntosUsuario === 5){
            instrucciones.innerText = "🍀 ¡Ganaste el juego! 🍀"
            }
            if(puntosPC === 5){
                instrucciones.innerText = "☠️ ¡La computadora gano el juego! ☠️"
                }
                elegiTuArma.classList.add("disabled");
                reiniciar.classList.remove("disableb");
                reiniciar.addEventListener("click", reiniciarJuego);
        }
}

function ganaUsuario(){
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "¡ganaste un punto!🍀"
}

function ganaPC(){
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "¡La computadora gano un punto!☠️"
}

function empate(){
    contenedorGanaPunto.innerText = "¡Empate! 😱"
}

function reiniciarJuego(){
    reiniciar.classList.add("disableb");
    elegiTuArma.classList.remove("disableb");
    mensaje.classList.add("disableb");

    puntosUsuario = 0;
    puntosPC = 0;

    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;

    instrucciones.innerText = "El primero en llegar a 5 puntos gana."
}