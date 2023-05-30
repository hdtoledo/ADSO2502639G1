//Rutas de las imágenes
var piedraPath = "ruta_a_la_imagen_de_piedra.jpeg";
var papelPath = "ruta_a_la_imagen_de_papel.jpeg";
var tijeraPath = "ruta_a_la_imagen_de_tijera.png";


var opciones = {
    "🪨": piedraPath,
    "🧻": papelPath,
    "✂️": tijeraPath
};

// Diccionario para mapear el resultado del juego a un mensaje
var resultadoMensajes = {
    "empate": "¡Es un empate!",
    "jugador": "¡Has ganado!",
    "maquina": "¡La máquina ha ganado!"
};

// Inicializar marcador
var marcador = { "jugador": 0, "maquina": 0 };

function mostrarImagen(ruta, elemento) {
    // Mostrar imagen en el elemento especificado
    // elemento.innerHTML = '<img src="' + ruta + '" alt="Resultado">';
}

function obtenerOpcionMaquina() {
    // Generar una opción aleatoria para la máquina
    var opciones = Object.keys(opcionesImagenes);
    var indice = Math.floor(Math.random() * opciones.length);
    return opciones[indice];
}

function jugar(opcionJugador) {
    // Obtener la opción de la máquina
    var opcionMaquina = obtenerOpcionMaquina();

    // Mostrar las opciones del jugador y la máquina
    var resultElement = document.getElementById("result");
    var scoreElement = document.getElementById("score");

    mostrarImagen(opcionesImagenes[opcionJugador], resultElement);

    setTimeout(function () {
        mostrarImagen(opcionesImagenes[opcionMaquina], resultElement);

        // Determinar el resultado del juego
        var resultado;
        if (opcionJugador === opcionMaquina) {
            resultado = "empate";
        } else if (
            (opcionJugador === "piedra" && opcionMaquina === "tijera") ||
            (opcionJugador === "papel" && opcionMaquina === "piedra") ||
            (opcionJugador === "tijera" && opcionMaquina === "papel")
        ) {
            resultado = "jugador";
        } else {
            resultado = "maquina";
        }

        var mensaje = resultadoMensajes[resultado];
        marcador[resultado] += 1;
        scoreElement.textContent = "Marcador: Jugador " + marcador["jugador"] + " - Máquina " + marcador["maquina"];
        resultElement.textContent = "Jugador: " + opcionJugador + " VS Máquina: " + opcionMaquina + " - " + mensaje;
      }, 1000); // Retrasar la muestra del resultado para dar una sensación de "elección" de la máquina
    }