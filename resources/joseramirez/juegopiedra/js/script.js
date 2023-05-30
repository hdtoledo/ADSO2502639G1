const piedra = document.querySelector("#piedra");
const papel = document.querySelector("#papel");
const tijera = document.querySelector("#tijera");
const jugada = document.querySelector("#jugada");

let jugador = 0;
let pc = 0;

piedra.addEventListener("click", function(){
    jugador = 1;
    eleccion();
    pc = aleatorio(1, 3);
    mostrarJugadaPC(pc);
    triunfos()
    perdidas()
    empates()
});

papel.addEventListener("click", function(){
    jugador = 2;
    eleccion();
    pc = aleatorio(1, 3);
    mostrarJugadaPC(pc);
    triunfos()
    perdidas()
    empates()
});

tijera.addEventListener("click", function(){
    jugador = 3;
    eleccion();
    pc = aleatorio(1, 3);
    mostrarJugadaPC(pc);
    triunfos()
    perdidas()
    empates()
});

function eleccion() {
    if (jugador === 1) {
        jugada.textContent = "🥌";
    } else if (jugador === 2) {
        jugada.textContent = "🧻";
    } else if (jugador === 3) {
        jugada.textContent = "✂";
    }
}
const eleccionpc = document.querySelector("#eleccion-pc");

function mostrarJugadaPC(jugadaPC) {
    if (jugadaPC === 1) {
        eleccionpc.textContent = "🥌";
    } else if (jugadaPC === 2) {
        eleccionpc.textContent = "🧻";
    } else if (jugadaPC === 3) {
        eleccionpc.textContent = "✂";
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const ganada = document.querySelector("#resul-triunfo");
const perdi = document.querySelector("#perdida");
const empa = document.querySelector("#empate");
let triunfo = 0;
let empate = 0;
let perdida = 0;


function triunfos() {
    if(jugador == 1 && pc == 3){
        triunfo = triunfo + 1;
        ganada.textContent = triunfo;
     
    }else{
        if(jugador == 3 && pc == 2){
            triunfo = triunfo + 1;
        ganada.textContent = triunfo;

        }else{
            if(jugador == 2 && pc == 1){
                triunfo = triunfo + 1;
        ganada.textContent = triunfo;

            }
        }
    }
}
 function perdidas() {
    if(pc == 1 && jugador == 3){
        perdida = perdida + 1;
        perdi.textContent = perdida;
   
    }else{
        if(pc == 3 && jugador == 2){
            perdida = perdida + 1;
        perdi.textContent = perdida;

        }else{
            if(pc == 2 && jugador == 1){
                perdida = perdida + 1;
        perdi.textContent = perdida;
    
            }
        }
    }
 }

 function empates() {
    if(pc == jugador){
        empate = empate + 1 ;
        empa.textContent = empate;
    }
 }