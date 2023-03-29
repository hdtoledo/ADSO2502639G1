// Total de pregunta del juego

const TOTAL_PREGUNTAS = 10;

//Variable que me lleva lacantidad de preguntas respondidas correctamente
let cantidadAcertadas = 0;

//Variable que controla la pregunta actual.
//Comienza en -1 porque la primera pregunta es la 0
let preguntaActual = -1;

//Arreglo con los estados de las preguntas
let estadoPreguntas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];

//Base de datos para las preguntas del juego
const bd_juego = [
    {
        id: 'A',
        pregunta: "¿Empresa reconocida que se dedica a los servidores?",
        respuesta: "amazon"
    },
    {
        id: 'B',
        pregunta: " Termino en ingles que hace referencia a una copia de seguridad?",
        respuesta: "backup"
    },
    {
        id: 'C',
        pregunta: "¿Nombre de la memoria que almacena temporalmentelos datos de la computadora?",
        respuesta: "cache"
    },
    {
        id: 'D',
        pregunta: "¿Archivo que controla los perifericos que se conectan a la computadora?",
        respuesta: "driver"
    },
    {
        id: 'E',
        pregunta: "¿Mezclar los datos para protegerlos como medida de seguridad, es decir convertir texto normal a texto cifrado?",
        respuesta: "encriptar"
    },
    {
        id: 'F',
        pregunta: "¿Famosa red social creada por Mark Zuckerberg?",
        respuesta: "facebook"
    },
    {
        id: 'G',
        pregunta: "¿Lenguaje de programacion creado por Google?",
        respuesta: "go"
    },
    {
        id: 'H',
        pregunta: "¿Lenguaje utilizado para estructurar las paginas web?",
        respuesta: "html"
    },
    {
        id: 'I',
        pregunta: "¿Aspecto que presentan los programas tras su ejecucion mediante el cual ejercemos la comunicacion con estos?",
        respuesta: "interfaz"
    },
    {
        id: 'J',
        pregunta: "¿Lenguaje de programacion con el cual se diseño el sistema operativo android?",
        respuesta: "java"
    }

]

//Variables para controlar el tiempo 
const timer = document.getElementById('tiempo');
// Tiempo del juego en segundos
const TIEMPO_DEL_JUEGO = 60;
//Variable que indica el tiempo restante
let tiempoRestante = TIEMPO_DEL_JUEGO;
//variable que maneja el contador de tiempo
let countdown;


//Creamos las letras de la A a la J

const container = document.querySelector(".container");
for (let i = 1; i <= TOTAL_PREGUNTAS; i++){
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.textContent = String.fromCharCode(i + 96);
    circle.id =String.fromCharCode(i + 96).toUpperCase();
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

// Funcion para iniciar el contador de tiempo
function iniciarContador() {
    countdown = setInterval(()=>{
        //Restamos un segundo al tiempo restante
        tiempoRestante--;
        //Actualizamos el tiempo en el DOM
        timer.innerText = tiempoRestante;

        //Si el tiempo llega a 0, detiene el contador 
        if (tiempoRestante === 0) {
            clearInterval(countdown);
            mostrarPantallaFinal();
        }
    }, 1000);
}

// Funcion para cargar las preguntas
function cargarPreguntas() {
    preguntaActual++;
    //contolo si he llegado al final de las preguntas, para iniciar de nuevo.
    if (preguntaActual >= TOTAL_PREGUNTAS) {
        preguntaActual = 0;
    }
        //Controlo si la pregunta ya fue respondida
    if (estadoPreguntas.indexOf(0)>=0) {
        while (estadoPreguntas[preguntaActual] ===1) {
            preguntaActual++;
            if (preguntaActual >= TOTAL_PREGUNTAS) {
                preguntaActual = 0;
            }
        }
        //Ahora si buscamos la pregunra en la base de datos
        document.getElementById('letra-pregunta').textContent = bd_juego[preguntaActual].id;
        document.getElementById('pregunta').textContent = bd_juego[preguntaActual].pregunta;
        let letra = bd_juego[preguntaActual].id;
        document.getElementById(letra).classList.add('pregunta-actual');
    }else{
        //Si ya no hay preguntas sin responder, terminamos el juego
        clearInterval(countdown);
        mostrarPantallaFinal();
    }
}

//detectamos el cambio del input
let respuesta = document.getElementById("respuesta");
respuesta.addEventListener("keyup", function (event) {
    //Detecto si se presiona la tecla enter
    if (event.key === "Enter") {
        if (respuesta.value === "") {
            alert("Debe ingresar una respuesta");
            return;
        }
        //Obtenga la respuesta ingresada

        let respuestaIngresada = respuesta.value.toLowerCase();
        controlarRespuesta(respuestaIngresada);
    }
})

function controlarRespuesta(respuestaIngresada) {
    //Controlo la respuesta correcta
    if (respuestaIngresada == bd_juego[preguntaActual].respuesta){
        // alert("Respuesta Correcta");
        cantidadAcertadas++;

        //cambio el estado de la pregunta a 1
        estadoPreguntas[preguntaActual] = 1;

        let letra = bd_juego[preguntaActual].id;
        document.getElementById(letra).classList.remove("pregunta-actual");
        document.getElementById(letra).classList.add("bien-respondida");
    }else {
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

// Boton para pasar de pregunta sin contestar

let pasar = document.getElementById("pasar");
pasar.addEventListener("click", function () {
    let letra = bd_juego[preguntaActual].id;
    document.getElementById(letra).classList.remove("pregunta-actual");
    cargarPreguntas();
});
// Boton para responder la pregunta
let responder = document.getElementById("responder");
responder.addEventListener("click", function () {
    if (respuesta.value === "") {
        alert("Debe ingresar una respuesta");
        respuesta.focus();
        respuesta.value = "";
        return
    }
    let respuestaIngresada = respuesta.value.toLowerCase();
    controlarRespuesta(respuestaIngresada);
    respuesta.focus();
});
 
//Mostrar Pantalla Final
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

