//Total preguntas del juegos 

const TOTAL_PREGUNTAS = 10;

//Variable que me lleva la cantidad de preguntas respondidas correctamente
let cantidadAcertadas = 0;

//variable que controla la pregunta actual.
//comienza en -1 por que la primera pregunta es la 0
let preguntaActual = -1;

//arreglo con los estados de las preguntas
let estadoPreguntas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Total de preguntas del juego 

const bd_juego = [
    {
        id: 'A',
        pregunta: "¿Marca de autos con 4 circulos en su logo?",
        respuesta: "audi"
    },
    {
        id: 'B',
        pregunta: "¿Significado de RPM?",
        respuesta: "revoluciones por minuto"
    },
    {
        id: 'C',
        pregunta: "¿Como se traduce HP cuando hablamos de un motor de un auto?",
        respuesta: "torque"
    },
    {
        id: 'D',
        pregunta: "¿Reconocida marca de autos electricos?",
        respuesta: "tesla"
    },
    {
        id: 'E',
        pregunta: "¿Siglas que se dan cuando un vehiculo tiene traccion en sus 4 ruedas?",
        respuesta: "4x4"
    },
    {
        id: 'F',
        pregunta: "¿Marca con en auto mas rapido del mundo?",
        respuesta: "bugatti"
    },
    {
        id: 'G',
        pregunta: "¿Pick up mas potente del mundo?",
        respuesta: "ram 1500 trx"
    },
    {
        id: 'H',
        pregunta: "¿Motor que utiliza como combustible ACPM?",
        respuesta: "diesel"
    },
    {
        id: 'I',
        pregunta: "¿Auto con super cargador de la marca Dodge?",
        respuesta: "charger"
    },
    {
        id: 'J',
        pregunta: "¿Auto iconico de la marca Toyota, protagonista en Rapidos y Furiosos?",
        respuesta: "supra"
    },
]

// Variables para controlar el tiempo
const timer = document.getElementById('tiempo');
//tiempo del juego en segundos 
const TIEMPO_DEL_JUEGO = 60;
//Variable que indica el tiempo restante 
let tiempoRestante = TIEMPO_DEL_JUEGO;
//Variable que maneja el contador de tiempo
let countdown;

//Creamos las letras de la A a la J

const container = document.querySelector('.container');
for (let i = 1; i <= TOTAL_PREGUNTAS; i++){
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.textContent = String.fromCharCode(i + 96);
    circle.id = String.fromCharCode(i + 96).toUpperCase();
    container.appendChild(circle);

    const angle = ((i - 1) / TOTAL_PREGUNTAS) * Math.PI * 2 - (Math.PI / 2);
    const x = Math.round(95 + 120 * Math.cos(angle));
    const y = Math.round(95 + 120 * Math.sin(angle));
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
}

let comenzar = document.getElementById('comenzar');
comenzar.addEventListener('click', () => {
    document.getElementById('pantalla-inicial').style.display = 'none';
    document.getElementById('pantalla-juego').style.display = 'block';

    //Iniciamos el contador de tiempo
    iniciarContador();
    //Cargamos las preguntas
    cargarPreguntas();
});

//Funcion para iniciar el contador de tiempo
function iniciarContador() {
    countdown = setInterval(() => {
        //restamos en segundos al tiempo restante 
        tiempoRestante--;
        //Actualizamos el tiempo en el DOM
        timer.innerText = tiempoRestante;

        //si el tiempo llega a 0, detiene el contador 
        if(tiempoRestante === 0){
            clearInterval(countdown);
            mostrarPantallaFinal();
        }
    }, 1000);
}

//Funcion para cargar las preguntas
function cargarPreguntas() {
    preguntaActual++;
    //controlo si he llegado al final de las preguntas, para iniciar de nuevo.
    if (preguntaActual >= TOTAL_PREGUNTAS) {
        preguntaActual = 0;
    }
    //controlo si la pregunta ya fue respondida
    if (estadoPreguntas.indexOf(0)>=0){
        while (estadoPreguntas[preguntaActual] ===1 ) {
            preguntaActual++;
            if (preguntaActual >= TOTAL_PREGUNTAS) {
                preguntaActual = 0;
            }
        }
        //Ahora si buscamos la pregunta en la base de datos
        document.getElementById('letra-pregunta').textContent = bd_juego[preguntaActual].id;
        document.getElementById('pregunta').textContent = bd_juego[preguntaActual].pregunta;
        let letra = bd_juego[preguntaActual].id;
        document.getElementById(letra).classList.add('pregunta-actual');
    }else{
        //si ya no hay preguntas por responder, terminamos juego
        clearInterval(countdown);
        mostrarPantallaFinal();
    }
}

//detectamos el cambio del imput 
let respuesta = document.getElementById("respuesta");
respuesta.addEventListener("keyup", function (event) {
    //detecto si se presiona la tecla enter
    if (event.key === "Enter") {
        if (respuesta.value === "") {
            alert("Debe ingresar una respuesta");
            return;
        }
        //obtengo la respuesta ingresada

        let respuestaIngresada = respuesta.value.toLowerCase();
        controlarRespuesta(respuestaIngresada);
    }
});

function controlarRespuesta(respuestaIngresada){
    //controlar respuesta correcta
    if (respuestaIngresada == bd_juego[preguntaActual].respuesta){
        alert("Respuesta correcta");
    }
}

function controlarRespuesta(respuestaIngresada){
    //controla la respuesta correcta
    if (respuestaIngresada == bd_juego[preguntaActual].respuesta){
        //alert("respuesta corrrecta");
        cantidadAcertadas++;

        //cambio el estado de la pregunta a 1
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
    //limpio el input
    respuesta.value ="";
    //cargo la siguiente pregunta
    cargarPreguntas();
}

//Boton para pasar de pregunta sin contestar
let pasar = document.getElementById("pasar");
pasar.addEventListener("click", function () {
    let letra = bd_juego[preguntaActual].id;
    document.getElementById(letra).classList.remove("pregunta-actual");
    cargarPreguntas();
})

//Boton para responder pregunta 
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
});

//Mostrar pantalla final 
function mostrarPantallaFinal() {
    document.getElementById("acertadas").textContent = cantidadAcertadas;
    document.getElementById("puntaje").textContent =(cantidadAcertadas * 100) / TOTAL_PREGUNTAS + "% de aciertos";
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
}

//Boton para reinciar el juego
let reiniciar = document.getElementById("reiniciar");
reiniciar.addEventListener("click", function () {
    //Reiniciar la variables
    cantidadAcertadas = 0;
    preguntaActual = -1;
    tiempoRestante = TIEMPO_DEL_JUEGO;
    timer.innerText = tiempoRestante;
    estadoPreguntas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    //Quitamos la clases de circulos
    let circulos = document.getElementsByClassName("circle");
    for (i=0; i<circulos.length; i++) {
        circulos[i].classList.remove("pregunta-actual");
        circulos[i].classList.remove("bien-respondida");
        circulos[i].classList.remove("mal-respondida");
    }
    //mostrar pantalla inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    respuesta.value = "";
    respuesta.focus();
    iniciarContador();
    cargarPreguntas();
});