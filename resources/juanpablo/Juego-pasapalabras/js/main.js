const TOTAL_PREGUNTAS = 10;
let cantidadAcertadas = 0;
let preguntaActual = -1;
let estadoPreguntas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


const bd_juego = [{
        id :"A",
        pregunta: "¿Empresa reconocida que se dedica a los servidores?",
        respuesta: "amazon"

    }, {
        id:"B",
        pregunta: "¿Termino en inlgles que hace referencia a una copia de seguridad?",
        respuesta: "backup"

    },
    {
        id: "C",
        pregunta: "¿Nombre de la memoria que alamacena temporalmente los de la computadora",
        respuesta: "cache"

    }, {
        id : "D",
        pregunta: "¿Archico que controla los perifericos que se conectan a la computadora?",
        respuesta: "driver"

    }, {
        id: "E",
        pregunta: "¿Mezclar los daos para protegerlos omo medidad,seguridad, es decir convertir texto normal a texto cifrado?",
        respuesta: "encriptar"

    }, {
        id: "F",
        pregunta: "¿Famosa red social cread por Mark Zuckerberg?",
        respuesta: "facebook"

    }, {
        id: "G",
        pregunta: "¿Lenguaje de programacion creado por goggle?",
        respuesta: "go"

    }, {
        id: "H",
        pregunta: "¿Lenguaje utilizado ara estructurar las paginas web",
        respuesta: "html"

    }, {
        id: "I",
        pregunta: "¿Aspecto que presentan los programas tras su ejecucion mediante el cual ejercemos la comunicacion de estos",
        respuesta: "interfaz"

    }, {
        id: "J",
        pregunta: "¿Lenguaje de programacion con el cual se diseño el sistema operativo android?",
        respuesta: "java"

    }


];

const timer = document.getElementById("tiempo")
const TIEMPO_DEL_JUEGO = 60;
let tiempoRestante = TIEMPO_DEL_JUEGO;
let countdown;


const container = document.querySelector(".container");
for (let i = 1; i <= TOTAL_PREGUNTAS; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.textContent = String.fromCharCode(i + 96);
    circle.id = String.fromCharCode(i + 96).toUpperCase();
    container.appendChild(circle)

    const angle = ((i - 1) / TOTAL_PREGUNTAS) * Math.PI * 2 - (Math.PI / 2);
    const x = Math.round(95 + 120 * Math.cos(angle));
    const y = Math.round(95 + 120 * Math.sin(angle));
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
}


let comenzar = document.getElementById("comenzar");
comenzar.addEventListener("click", () => {
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";

    iniciarContador();
    cargarPreguntas();
});

function iniciarContador() {
    countdown = setInterval(() => {
        tiempoRestante--;
        timer.innerText = tiempoRestante;

        if (tiempoRestante == 0) {
            clearInterval(countdown);
            mostrarPantallaFinal();

        }
    }, 1000);
}

function cargarPreguntas() {
    preguntaActual++;

    if (preguntaActual >= TOTAL_PREGUNTAS) {
        preguntaActual = 0;
    }

    if (estadoPreguntas.indexOf(0) >= 0) {
        while (estadoPreguntas[preguntaActual] == 1) {
            preguntaActual++;
            if (preguntaActual >= TOTAL_PREGUNTAS) {
                preguntaActual = 0;
            }

        }
        document.getElementById("letra-pregunta").textContent = bd_juego[preguntaActual].id;
        document.getElementById("pregunta").textContent = bd_juego[preguntaActual].pregunta;
        let letra = bd_juego[preguntaActual].id
        document.getElementById(letra).classList.add("pregunta-actual");
    } else {
        clearInterval(countdown);
        mostrarPantallaFinal();
    }
}

let respuesta = document.getElementById("respuesta");
respuesta.addEventListener ("keyup", function(event) {
    if (event.key == "Enter"){
        if(respuesta.value == ""){
            alert("Debe ingresar una respuesta");
            return;
        }

        let respuestaIngresada = respuesta.value.toLowerCase();
        controlarRespuesta(respuestaIngresada);
    }
    

});

function controlarRespuesta(respuestaIngresada){
    if(respuestaIngresada == bd_juego[preguntaActual].respuesta){
       // alert("Respuesta correcta");
       cantidadAcertadas++;

       estadoPreguntas[preguntaActual] = 1;
       let letra = bd_juego[preguntaActual].id;
       document.getElementById(letra).classList.remove("pregunta-actual");
       document.getElementById(letra).classList.add("bien-respondida");
    } else {
        estadoPreguntas[preguntaActual]= 1;
        let letra = bd_juego[preguntaActual].id;
        document.getElementById(letra).classList.remove("pregunta-actual");
        document.getElementById(letra).classList.add("mal-respondida");

    }
    respuesta.value = "";
    cargarPreguntas();
}

let pasar = document.getElementById("pasar");
pasar.addEventListener("click", function (){
    let letra = bd_juego[preguntaActual].id;
    document.getElementById(letra).classList.remove("pregunta-actual");
    cargarPreguntas();
});

let responder = document.getElementById("responder");
responder.addEventListener("click", function (){
    if( respuesta.value == ""){
        alert("Debe ingresar una respuesta");
        respuesta.focus();
        respuesta.value ="";
        return;
    }
    let respuestaIngresada = respuesta.value.toLowerCase();
    controlarRespuesta(respuestaIngresada);
});

function mostrarPantallaFinal(){
    document.getElementById("acertadas").textContent = cantidadAcertadas;
    document.getElementById("puntaje").textContent = (cantidadAcertadas * 100) / TOTAL_PREGUNTAS + "% de aciertos";
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
}

let reiniciar = document.getElementById("reiniciar");
reiniciar.addEventListener("click", function (){

    cantidadAcertadas =  0;
    preguntaActual = -1;
    tiempoRestante = TIEMPO_DEL_JUEGO;
    timer.innerText = tiempoRestante;
    estadoPreguntas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    let circulos = document.getElementsByClassName("circle");
    for (i=0; i<circulos.length; i++) {
        circulos[i].classList.remove("pregunta-actual");
        circulos[i].classList.remove("bien-respondida");
        circulos[i].classList.remove("mal-respondida");
    }
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    respuesta.value = "";
    respuesta.focus();
    iniciarContador();
    cargarPreguntas();

});

