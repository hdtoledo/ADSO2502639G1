
// Obtener los elementos del DOM
const input = document.querySelector('input[type="text"]');
const btnEnviar = document.querySelector('.btn');
const error = document.querySelector('.error');
const mensajeAnterior = document.querySelector('.mensaje');

// Manejar el evento de clic en el botón "Enviar"
btnEnviar.addEventListener('click', () => {
  // Obtener el valor del campo de texto
  const mensaje = input.value.trim();

  // Validar que se haya ingresado un mensaje
  if (mensaje.length > 0) {
    // Mostrar el mensaje en la página
    mensajeAnterior.textContent = mensaje;

    // Limpiar el campo de texto
    input.value = '';

    // Ocultar el mensaje de error (si estaba visible)
    error.classList.remove('visible');
  } else {
    // Mostrar mensaje de error
    error.classList.add('visible');
  }
});






