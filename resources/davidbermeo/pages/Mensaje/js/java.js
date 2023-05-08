// Seleccionar los elementos HTML necesarios
const input = document.querySelector('input');
const btn = document.querySelector('.btn');
const error = document.querySelector('.error');
const mensaje = document.querySelector('.mensaje');

// Función que se ejecuta al hacer clic en el botón "Enviar"
function enviarMensaje() {
  // Obtener el valor del campo de entrada
  const texto = input.value.trim();

  // Verificar que el campo de entrada no está vacío
  if (texto === '') {
    error.style.display = 'block';
    mensaje.innerText = '';
  } else {
    // Ocultar el mensaje de error
    error.style.display = 'none';

    // Actualizar el elemento "mensaje" con el último mensaje enviado
    mensaje.innerText = texto;

    // Limpiar el campo de entrada
    input.value = '';
  }
}

// Agregar un evento "click" al botón "Enviar"
btn.addEventListener('click', enviarMensaje);