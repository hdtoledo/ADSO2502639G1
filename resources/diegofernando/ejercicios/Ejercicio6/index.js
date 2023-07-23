// Obtener las imágenes del slider
const sliderImages = document.querySelectorAll('.slider img');

// Inicializar el índice de la imagen activa
let activeIndex = 0;

// Función para mostrar la siguiente imagen en el slider
function showNextImage() {
  // Ocultar la imagen actual
  sliderImages[activeIndex].classList.remove('active');
  
  // Incrementar el índice de la imagen activa
  activeIndex++;
  
  // Si se alcanza el final del slider, volver al principio
  if (activeIndex >= sliderImages.length) {
    activeIndex = 0;
  }
  
  // Mostrar la siguiente imagen
  sliderImages[activeIndex].classList.add('active');
}

// Mostrar la primera imagen
sliderImages[activeIndex].classList.add('active');

// Establecer el intervalo para mostrar automáticamente las imágenes
setInterval(showNextImage, 3000); // Cambia de imagen cada 3 segundos (ajusta el tiempo según tus necesidades)
