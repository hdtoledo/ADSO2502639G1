// Total de preguntas

const TOTAL_PREGUNTAS = 10;

let cantidadAcertadas = 0;

let preguntaActual = -1;

let estadoPreguntas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const bd_juego = [
    {
        id: 'a',
        pregunta: "¿En que año se creo Minecraft?",
        respuesta: "2009"
    },
    {
        id: 'b',
        pregunta: "¿Que poder tiene el enderman?",
        respuesta: "teletransportarse"
    },
    {
        id: 'c',
        pregunta: "¿Que bloque se forma cuando el agua choca con una fuente principal de lava?",
        respuesta: "obsidiana"
    },
    {
        id: 'd',
        pregunta: "¿Como se llama el creador de Minecraft?",
        respuesta: "markus persson"
    },
    {
        id: 'e',
        pregunta: "¿Cual es el principal genero de videojuegos al que pertenece Minecraft?",
        respuesta: "sandbox"
    },
    {
        id: 'f',
        pregunta: "¿Que compañia a compro Mojang por 2.500 millones de dolares?",
        respuesta: "microsoft"
    },
    {
        id: 'g',
        pregunta: "¿Que lenguaje de programacion se utilizo para la primera version de Minecraft?",
        respuesta: "java"
    },
    {
        id: 'h',
        pregunta: "¿En que mob hubo un error que le dio origen al creeper?",
        respuesta: "cerdo"
    },
    {
        id: 'i',
        pregunta: "¿Cuantas diemensiones tiene Minecraft?",
        respuesta: "3"
    },
    {
        id: 'j',
        pregunta: "¿Cuantos bloques mide un chunk en Minecraft?",
        respuesta: "16"
    },
]

const timer = document.getElementById('tiempo');
const TIEMPO_DEL_JUEGO = 65;
let tiempoRestante = TIEMPO_DEL_JUEGO;
let countdown;

const container = document.querySelector('.container');
for (let i = 1; i <= TOTAL_PREGUNTAS; i++){
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.textContent = String.fromCharCode(i + 96);
    circle.id = String.fromCharCode(i + 96);
    container.appendChild(circle);

    const angle = ((i -1)/TOTAL_PREGUNTAS) * Math.PI * 2 - (Math.PI / 2);
    const x = Math.round(95 + 120 * Math.cos(angle));
    const y = Math.round(95 + 120 * Math.sin(angle));
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
}

let comenzar = document.getElementById('comenzar');
comenzar.addEventListener('click', () => {
    document.getElementById('pantalla-inicial').style.display = 'none';
    document.getElementById('pantalla-juego').style.display = 'block';

    iniciarContador();

    cargarPreguntas();
})

function iniciarContador() {
    countdown = setInterval(()=>{
        tiempoRestante--;
        timer.innerText = tiempoRestante;

        if(tiempoRestante === 0){
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
    if (estadoPreguntas.indexOf(0)>=0){
        while (estadoPreguntas[preguntaActual] === 1) {
            preguntaActual++;
            if (preguntaActual >= TOTAL_PREGUNTAS) {
                preguntaActual = 0;
            }
        }
        document.getElementById('letra-pregunta').textContent = bd_juego[preguntaActual].id;
        document.getElementById('pregunta').textContent = bd_juego[preguntaActual].pregunta;
        let letra = bd_juego[preguntaActual].id;
        document.getElementById(letra).classList.add('pregunta-actual');
    }else{
        clearInterval(countdown);
        mostrarPantallaFinal()
    }
}

let respuesta = document.getElementById("respuesta");
respuesta.addEventListener("keyup", function (event) {

    if (event.key === "Enter") {
        if (respuesta.value === "") {
            alert("Debe ingresar una respuesta");
            return;
        }

        let respuestaIngresada = respuesta.value.toLowerCase();
        controlarRespuesta(respuestaIngresada);
    }
}); 

function controlarRespuesta(respuestaIngresada){

    if (respuestaIngresada == bd_juego [preguntaActual].respuesta){
        //alert("Respuesta Correcta");
        cantidadAcertadas++;

        estadoPreguntas[preguntaActual] = 1;

        let letra = bd_juego[preguntaActual].id;
        document.getElementById(letra).classList.remove("pregunta-actual");
        document.getElementById(letra).classList.add("bien-respondida")
    } else {
        estadoPreguntas[preguntaActual] = 1;
        let letra = bd_juego[preguntaActual].id;
        document.getElementById(letra).classList.remove("pregunta-actual");
        document.getElementById(letra).classList.add("mal-respondida");
    }
    respuesta.value = "";

    cargarPreguntas();
}

let pasar = document.getElementById("pasar");
pasar.addEventListener("click", function () {
    let letra = bd_juego[preguntaActual].id;
    document.getElementById(letra).classList.remove("pregunta-actual");
    cargarPreguntas();
});

let responder = document.getElementById("responder");
responder.addEventListener("click", function () {
    if (respuesta.value === "") {
        alert("Debe ingresar una respuesta");
        respuesta.focus();
        respuesta.value = "";
        return;
    }
    let respuestaIngresada = respuesta.value.toLowerCase();
    controlarRespuesta(respuestaIngresada);
    respuesta.focus();
})

function mostrarPantallaFinal() {
    document.getElementById("acertadas").textContent = cantidadAcertadas;
    document.getElementById("puntaje").textContent = (cantidadAcertadas * 100) / TOTAL_PREGUNTAS + "% de aciertos";
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
}

let reiniciar = document.getElementById("reiniciar");
reiniciar.addEventListener("click", function (){
    cantidadAcertadas = 0;
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




