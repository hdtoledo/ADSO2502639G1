// Fecha objetivo (año, mes [0-11], día, hora, minuto, segundo)
const fechaObjetivo = new Date('2023-12-31T23:59:59');
    
function actualizarTemporizador() {
    const ahora = new Date().getTime();
    const tiempoRestante = fechaObjetivo - ahora;

    // Calculamos días, horas, minutos y segundos restantes
    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    // Mostramos el temporizador en el elemento 'temporizador'
    const temporizadorElemento = document.getElementById('temporizador');
    temporizadorElemento.textContent = `Faltan: ${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;

    // Si el tiempo restante es mayor que 0, actualizamos el temporizador cada segundo
    if (tiempoRestante > 0) {
        setTimeout(actualizarTemporizador, 1000);
    } else {
        temporizadorElemento.textContent = "¡Tiempo terminado!";
    }
}

// Iniciamos el temporizador
actualizarTemporizador();