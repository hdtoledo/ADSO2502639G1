
const piedraBtn = document.querySelector('.piedra');
const papelBtn = document.querySelector('.papel');
const tijeraBtn = document.querySelector('.tijera');
const resultadoText = document.querySelector('.resultado h3');
const usuarioEleccion = document.querySelector('.usuario h2');
const maquinaEleccion = document.querySelector('.maquina h2');
const puntajeUsuario = document.querySelector('.r-usuario p');
const puntajeMaquina = document.querySelector('.r-maquina p');


const opciones = ['piedra', 'papel', 'tijera'];

// generar la elección aleatoria de la máquina
function generarEleccionMaquina() {
  const indice = Math.floor(Math.random() * opciones.length);
  return opciones[indice];
}

//determinar el resultado del juego
function determinarResultado(eleccionUsuario, eleccionMaquina) {
  if (eleccionUsuario === eleccionMaquina) {
    return 'Empatado';
  } else if (
    (eleccionUsuario === 'piedra' && eleccionMaquina === 'tijera') ||
    (eleccionUsuario === 'papel' && eleccionMaquina === 'piedra') ||
    (eleccionUsuario === 'tijera' && eleccionMaquina === 'papel')
  ) {
    return 'Ganado';
  } else {
    return 'Perdido';
  }
}

// Función para manejar la elección del usuario
function manejarEleccionUsuario(eleccion) {
  const eleccionMaquina = generarEleccionMaquina();
  const resultado = determinarResultado(eleccion, eleccionMaquina);

  usuarioEleccion.textContent = `El usuario eligió: ${eleccion}`;
  maquinaEleccion.textContent = `La máquina eligió: ${eleccionMaquina}`;
  resultadoText.textContent = resultado;

}
