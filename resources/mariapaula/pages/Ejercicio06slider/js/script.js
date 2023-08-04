document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  const sliderItems = document.querySelectorAll('.slider img');

  let slideIndex = 0;
  const slideInterval = 3000; // Cambiar la imagen cada 3 segundos (3000 milisegundos)

  function nextSlide() {
    slideIndex = (slideIndex + 1) % sliderItems.length;
    updateSlider();
  }

  function updateSlider() {
    slider.style.transform = `translateX(-${slideIndex * 40}%)`;
  }

  // Iniciar el slider automático
  setInterval(nextSlide, slideInterval);
});

