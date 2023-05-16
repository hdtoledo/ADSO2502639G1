// Total de preguntas del juego
const TOTAL_PREGUNTAS = 10;

let cantidadAcertada = 0;

let preguntaActual = -1;

let estadoPreguntas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Segundos del juego
const TIEMPO_DEL_JUEGO = 60;

// Tiempo restante
let tiempoRestante = TIEMPO_DEL_JUEGO;

// Contador de tiempo
let countdown;

// Referencias del DOM
const container = document.querySelector('.container');
const comenzar = document.getElementById('comenzar');
const timer = document.getElementById('tiempo');
const salir = document.getElementById('salir');

// Base de datos del juego
const bd_juego = [
	{
		id: 'A',
		pregunta: '¿Empresa reconocida que se dedica a los servidores?',
		respuesta: 'amazon',
	},
	{
		id: 'B',
		pregunta:
			'¿Termino en ingles que hace referencia a una copia de seguridad?',
		respuesta: 'backup',
	},
	{
		id: 'C',
		pregunta:
			'¿Nombre de la memoria que almacena temporalmente los datos de la computadora?',
		respuesta: 'cache',
	},
	{
		id: 'D',
		pregunta:
			'¿Archivo que controla los periféricos que se conectan a la computadora?',
		respuesta: 'drive',
	},
	{
		id: 'E',
		pregunta:
			'¿Mezclar los datos para protegerlos como medida de seguridad, es decir convertir texto normal a texto cifrado?',
		respuesta: 'encriptar',
	},
	{
		id: 'F',
		pregunta: '¿Famosa red social creada por Mark Zuckerberg?',
		respuesta: 'facebook',
	},
	{
		id: 'G',
		pregunta: '¿Lenguaje de programación creado por Google?',
		respuesta: 'go',
	},
	{
		id: 'H',
		pregunta: 'Lenguaje utilizado para estructurar paginas web',
		respuesta: 'html',
	},
	{
		id: 'I',
		pregunta:
			'¿Aspecto que presentan los programas tras su ejecución mediante el cual ejercemos la comunicación con estos?',
		respuesta: 'interfaz',
	},
	{
		id: 'J',
		pregunta:
			'¿Lenguaje de programación con le cual se diseño el sistema operativo android?',
		respuesta: 'java',
	},
];

// Creamos las letras de la A a la J

for (let i = 1; i <= TOTAL_PREGUNTAS; i++) {
	const circle = document.createElement('div');
	circle.classList.add('circle');
	circle.textContent = String.fromCharCode(i + 96);
	circle.id = String.fromCharCode(i + 96).toUpperCase();
	container.appendChild(circle);

	const angel = ((i - 1) / TOTAL_PREGUNTAS) * Math.PI * 2 - Math.PI / 2;
	const x = Math.round(95 + 120 * Math.cos(angel));
	const y = Math.round(95 + 120 * Math.sin(angel));
	circle.style.left = `${x}px`;
	circle.style.top = `${y}px`;
}

const iniciarContador = () => {
	countdown = setInterval(() => {
		// Restamos 1 segundo
		tiempoRestante--;
		// Actualizamos el tiempo en el DOM
		timer.innerText = tiempoRestante;

		// Si el tiempo llega a 0, se detiene el contador
		if (tiempoRestante === 0) {
			clearInterval(countdown);
			mostrarPantallaFinal();
		}
	}, 1000);
};

const cargarPreguntas = () => {
	preguntaActual++;

	if (preguntaActual >= TOTAL_PREGUNTAS) {
		preguntaActual = 0;
	}

	// Control si la pregunta ya fue respondida
	if (estadoPreguntas.indexOf(0) >= 0) {
		while (estadoPreguntas[preguntaActual] === 1) {
			preguntaActual++;
			if (preguntaActual >= TOTAL_PREGUNTAS) {
				preguntaActual = 0;
			}
		}

		// Ahora buscamos la pregunta en la DB
		document.getElementById('letra-pregunta').textContent =
			bd_juego[preguntaActual].id;
		document.getElementById('pregunta').textContent =
			bd_juego[preguntaActual].pregunta;
		let letra = bd_juego[preguntaActual].id;
		document.getElementById(letra).classList.add('pregunta-actual');
	} else {
		clearInterval(countdown);
		mostrarPantallaFinal();
	}
};

comenzar.addEventListener('click', () => {
	document.getElementById('pantalla-inicial').style.display = 'none';
	document.getElementById('pantalla-juego').style.display = 'block';

	// Iniciamos a contar el tiempo
	iniciarContador();
	// Cargamos las preguntas
	cargarPreguntas();
});

let respuesta = document.getElementById('respuesta');
respuesta.addEventListener('keyup', event => {
	// Detectamos si se presiona enter
	if (event.key === 'Enter') {
		if (respuesta.value === '') {
			alert('Debe ingresar una respuesta ⌨️');
			return;
		}

		// Obtengo la respuesta ingresada
		let respuestaIngresada = respuesta.value.toLowerCase();
		controlarRespuesta(respuestaIngresada);
	}
});

salir.addEventListener('click', () => {
	document.getElementById('pantalla-inicial').style.display = 'block';
	document.getElementById('pantalla-juego').style.display = 'none';

	location.reload();
});

const controlarRespuesta = respuestaIngresada => {
	if (respuestaIngresada == bd_juego[preguntaActual].respuesta) {
		cantidadAcertada++;

		estadoPreguntas[preguntaActual] = 1;
		let letra = bd_juego[preguntaActual].id;
		document.getElementById(letra).classList.remove('pregunta-actual');
		document.getElementById(letra).classList.add('bien-respondida');
	} else {
		estadoPreguntas[preguntaActual] = 1;
		let letra = bd_juego[preguntaActual].id;
		document.getElementById(letra).classList.remove('pregunta-actual');
		document.getElementById(letra).classList.add('mal-respondida');
	}

	// Limpiar el input
	respuesta.value = '';
	// Cargamos la siguiente pregunta
	cargarPreguntas();
};

// Boton para pasar de pregunta sin contestar
let pasar = document.getElementById('pasar');
pasar.addEventListener('click', () => {
	let letra = bd_juego[preguntaActual].id;
	document.getElementById(letra).classList.remove('pregunta-actual');
	cargarPreguntas();
});

// Boton para responder la pregunta
let responder = document.getElementById('responder');
responder.addEventListener('click', () => {
	if (respuesta.value === '') {
		alert('Debe ingresar una respuesta ⌨️');
		respuesta.focus();
		respuesta.value = '';
		return;
	}
	let respuestaIngresada = respuesta.value.toLowerCase();
	controlarRespuesta(respuestaIngresada);
	respuesta.focus();
});

// Mostrar pantalla final
const mostrarPantallaFinal = () => {
	document.getElementById('acertadas').textContent = cantidadAcertada;
	document.getElementById('puntaje').textContent =
		(cantidadAcertada * 100) / TOTAL_PREGUNTAS + '% de aciertos';
	document.getElementById('pantalla-juego').style.display = 'none';
	document.getElementById('pantalla-final').style.display = 'block';
};

// Boton para reiniciar el juego
let reiniciar = document.getElementById('reiniciar');
reiniciar.addEventListener('click', () => {
	// Reiniciamos las variables
	cantidadAcertada = 0;
	preguntaActual = -1;
	tiempoRestante = TIEMPO_DEL_JUEGO;
	timer.innerText = tiempoRestante;
	let estadoPreguntas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	// Quitamos las clases de los círculos
	let circulos = document.getElementsByClassName('circle');
	for (i = 0; i < circulos.length; i++){
		circulos[i].classList.remove('pregunta-actual');
		circulos[i].classList.remove('bien-respondida');
		circulos[i].classList.remove('mal-respondida');
	}

	// Mostramos la pantalla inicial
	document.getElementById('pantalla-final').style.display = 'none';
	document.getElementById('pantalla-juego').style.display = 'block';
	respuesta.value = '';
	respuesta.focus();
	iniciarContador();
	cargarPreguntas();
});
