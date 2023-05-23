const input = document.querySelector('input');
const btn = document.querySelector('.btn');
const error = document.querySelector('.error');
const mensaje = document.querySelector('.mensaje');


function enviarMensaje() {
  
  const texto = input.value.trim();

  
  if (texto === '') {
    error.style.display = 'block';
    mensaje.innerText = '';
  } else {
    
    error.style.display = 'none';

    
    mensaje.innerText = texto;

  
    input.value = '';
  }
}


btn.addEventListener('click', enviarMensaje);