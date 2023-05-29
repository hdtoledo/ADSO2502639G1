let puntosUsusario = 0;
let puntosPC = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-pc");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegirArma = document.querySelector("#elegir-arma");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-pc");

// contenedorEleccionUsuario.innerText = "hola";
// contenedorEleccionPC.innerText = "hola";
// contnedorGanarPunto.innerText = "si";
// mensaje.classList.add("disabled");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
    // contenedorPuntosUsuario.innerText = 1;

    let eleccionPC = Math.floor(Math.random() * 3);
    // console.log(eleccionPC);
    let eleccionUsuario = e.currentTarget.id;
    // console.log(eleccionUsuario);
    
    // piedra => 0
    // papel => 1
    // tijera => 2

    if (eleccionPC === 0) {
        eleccionPC = "piedra🥌";
    } else if (eleccionPC === 1) {
        eleccionPC = "papel🧻"
    } else if (eleccionPC === 2) {
        eleccionPC = "tijera✂️"
    }
    console.log("Usuario: " + eleccionUsuario);
    console.log("PC: " + eleccionPC);

    // piedra vence tijera
    // tijera vence papel
    // papel vence a piedra
    // si son iguales empate

    if (
        (eleccionUsuario === "piedra🥌" && eleccionPC === "tijera✂️") ||
        (eleccionUsuario === "tijera✂️" && eleccionPC === "papel🧻") ||
        (eleccionUsuario === "papel🧻" && eleccionPC === "piedra🥌") 
    ) {
        ganaUsuario();
    } else if (
        (eleccionPC === "piedra🥌" && eleccionUsuario === "tijera✂️") ||
        (eleccionPC === "tijera✂️" && eleccionUsuario === "papel🧻") ||
        (eleccionPC === "papel🧻" && eleccionUsuario === "piedra🥌")
    ) {
        ganaPC();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPC.innerText = eleccionPC;

    if (puntosUsusario === 5 || puntosPC == 5) {
        if (puntosUsusario === 5) {
            instrucciones.innerText = "🥳 ¡Ganaste el Juego! 🥳"
        }
        if (puntosPC === 5) {
            instrucciones.innerText = "😭 ¡La computadora ganó el Juego! 😭"
        }

        elegirArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }
}

function ganaUsuario() {
    puntosUsusario++;
    contenedorPuntosUsuario.innerText = puntosUsusario;
    contenedorGanaPunto.innerText = "¡Ganaste un punto! 🔥"
}

function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "¡La computadora gana un punto! 😢"
}

function empate() {
    contenedorGanaPunto.innerText = "¡Empate! 😲"
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    elegirArma.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsusario = 0;
    puntosPC = 0;

    contenedorPuntosUsuario.innerText = puntosUsusario;
    contenedorPuntosPC.innerText = puntosPC;

    instrucciones.innerText = "El que obtenga 5 puntos gana el juego"
}
// contenedorPuntosUsuario.innerText = 3

