document.addEventListener("DOMContentLoaded", function () {
    const testimonialSlides = document.querySelectorAll(".testimonial-slide");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
  
    let currentSlideIndex = 0;
  
    function showSlide(index) {
      testimonialSlides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }
  
    function showNextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % testimonialSlides.length;
      showSlide(currentSlideIndex);
    }
  
    function showPrevSlide() {
      currentSlideIndex = (currentSlideIndex - 1 + testimonialSlides.length) % testimonialSlides.length;
      showSlide(currentSlideIndex);
    }
  
    nextButton.addEventListener("click", showNextSlide);
    prevButton.addEventListener("click", showPrevSlide);
  
    // Mostrar el primer testimonio al cargar la página
    showSlide(currentSlideIndex);
  
    // Automáticamente cambia de testimonio cada 5 segundos
    setInterval(showNextSlide, 5000);
  });
  