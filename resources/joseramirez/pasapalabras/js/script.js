//total de preguntas del juego

const TOTAL_PREGUNTAS = 10;

//Variable que me lleva la cantidad de preguntas respondidas correctamente
let cantidadAcertadas = 0;

//variable que controla la pregunta actual.
//Comienza en -1 porque la primera pregunta es la 0
let preguntaActual = -1;

//Arreglo con los estados de las preguntas
let estadoPreguntas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//base de datos para las preguntas del juego
const bd_juego = [
    {
        id: 'A' ,
        pregunta:"¿Qué nombre recibe el conjunto de caracteres utilizado por los sistemas informáticos para representar letras, números y símbolos?",
        respuesta:"ascii"
    },
    {
        id: 'B',
        pregunta:"¿Cuál es el término que se utiliza para describir la técnica de programación que consiste en la repetición de un conjunto de instrucciones hasta que se cumple una determinada condición?",
        respuesta:"bucle"
    },
    {
        id: 'C',
        pregunta:"¿Qué es lo que se utiliza para definir la apariencia y el diseño de un sitio web en programación?",
        respuesta:"css"
    },
    {
        id: 'D',
        pregunta:"¿Cuál es el término que se utiliza para describir el proceso de identificar y corregir errores en un programa?",
        respuesta:"depuracion"
    },
    {
        id: 'E',
        pregunta:"¿Cuál es el término que se utiliza para transformar información legible en un formato ilegible y seguro para su transmisión o almacenamiento en programación?",
        respuesta:"encriptar"
    },
    {
        id: 'F',
        pregunta:"¿Qué es lo que se crea cuando se define una función en programación?",
        respuesta:"funcion"
    },
    {
        id: 'G',
        pregunta:"¿Cuál es el lenguaje de programación que fue creado por Google y se utiliza para desarrollar aplicaciones web y de sistema?",
        respuesta:"go"
    },
    {
        id: 'H',
        pregunta:"¿Cómo se llama el lenguaje de programación utilizado para crear páginas web estáticas?",
        respuesta:"html"
    },
    {
        id: 'I',
        pregunta:"¿Cuál es el término que se utiliza en programación para describir el conjunto de elementos gráficos que permiten a un usuario interactuar con un software o aplicación?",
        respuesta:"interfaz"
    },
    {
        id: 'J',
        pregunta:"¿Cómo se llama el lenguaje de programación utilizado para crear páginas web interactivas y dinámicas?",
        respuesta:"javascript"
    },
]

//Variables para controlar el tiempo
const timer = document.getElementById('tiempo');

//tiempo del juego en segundos
const TIEMPO_DEL_JUEGO = 60;

//variable que indica el tiempo restante
let tiempoRestante = TIEMPO_DEL_JUEGO;

//variable que maneja el contador de tiempo 
let countdown;

//creamos las letras de la A a la J

const container = document.querySelector(".container");
for (let i = 1; i <= TOTAL_PREGUNTAS; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
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

    //iniciamos el contador de tiempo
    iniciarContador();
    //cargamos las preguntas
    cargarPreguntas();
});

//funcion para inicar el contador de tiempo
function iniciarContador() {
    countdown = setInterval(() => {
        //restamos un segundo al tiempo restante
        tiempoRestante--;
        //actualizamos el tiempo en el DOM
        timer.innerText = tiempoRestante;

        //si el tiempo llega a 0, detiene el contador
        if(tiempoRestante === 0) {
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
    if (estadoPreguntas.indexOf(0) >= 0) {
        while (estadoPreguntas[preguntaActual] === 1){
            preguntaActual++;
            if (preguntaActual >= TOTAL_PREGUNTAS){
                preguntaActual = 0;
            }
        }

        //ahora si buscamos la pregunta en la base de datos
        document.getElementById('letra-pregunta').textContent = bd_juego[preguntaActual].id;
        document.getElementById('pregunta').textContent = bd_juego[preguntaActual].pregunta;
        let letra = bd_juego[preguntaActual].id;
        document.getElementById(letra).classList.add('pregunta-actual');
    }else{
        //si ya no hay preguntas sin responder, terminamos el juego
        clearInterval(countdown);
        mostrarPantallaFinal();
    }
}

//detectamos el cambio del input
let respuesta = document.getElementById("respuesta");
respuesta.addEventListener("keyup", function (event){
    //detecto si se presiona la tecla enter
    if (event.key === "Enter") {
        if (respuesta.value === "") {
            alert("Debe ingresar una respuesta");
            return;
        }
        //respuesta ingresada

        let respuestaIngresada = respuesta.value.toLowerCase();
        controlarRespuesta(respuestaIngresada)
    }
} );

function controlarRespuesta(respuestaIngresada){
    //controlo la respuesta correcta
    if(respuestaIngresada == bd_juego[preguntaActual].respuesta){
        //alert("Respuesta Correcta");
        cantidadAcertadas++;

        //cambio el estado de la pregunta a 1
        estadoPreguntas[preguntaActual] = 1;

        let letra = bd_juego[preguntaActual].id;
        document.getElementById(letra).classList.remove("pregunta-actual");
        document.getElementById(letra).classList.add("bien-respondida");
    } else {
        estadoPreguntas[preguntaActual] = 1;
        let letra = bd_juego[preguntaActual].id;
        document.getElementById(letra).classList.remove("pregunta-actual");
        document.getElementById(letra).classList.add("mal-respondida");
    }
    //limpio el input
    respuesta.value = "";
    //cargo la siguiente pregunta
    cargarPreguntas();
}

//Boton para pasar de pregunta sin contestar
let pasar = document.getElementById("pasar");
pasar.addEventListener("click", function (){
    let letra = bd_juego[preguntaActual].id;
    document.getElementById(letra).classList.remove("pregunta-actual");
    cargarPreguntas();
})

//Boton para responder la pregunta
let responder = document.getElementById("responder");
responder.addEventListener("click", function (){
    if(respuesta.value === "") {
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
    document.getElementById("puntaje").textContent = (cantidadAcertadas * 100) / TOTAL_PREGUNTAS + "% de aciertos";
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
}

//Boton para reiniciar el juego
let reiniciar = document.getElementById("reiniciar");
reiniciar.addEventListener("click", function () {
    // Reiniciamos las variables
    cantidadAcertadas = 0;
    preguntaActual = -1;
    tiempoRestante = TIEMPO_DEL_JUEGO;
    timer.innerText = tiempoRestante;
    estadoPreguntas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    //Quitamos las clases de los circulos
    let circulos = document.getElementsByClassName("circle");
    for (i=0; i<circulos.length; i++) {
        circulos[i].classList.remove("pregunta-actual");
        circulos[i].classList.remove("bien-respondida");
        circulos[i].classList.remove("mal-respondida");
    }
    //Mostramos la pantalla inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    respuesta.value = "";
    respuesta.focus();
    iniciarContador();
    cargarPreguntas();
});