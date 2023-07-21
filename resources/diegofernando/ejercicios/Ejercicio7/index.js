const testimonials = document.querySelectorAll('.testimonial');
let activeIndex = 0;

function showTestimonial(index) {
  testimonials.forEach(testimonial => testimonial.classList.remove('active'));
  testimonials[index].classList.add('active');
}

function nextTestimonial() {
  activeIndex++;
  if (activeIndex >= testimonials.length) {
    activeIndex = 0;
  }
  showTestimonial(activeIndex);
}

function prevTestimonial() {
  activeIndex--;
  if (activeIndex < 0) {
    activeIndex = testimonials.length - 1;
  }
  showTestimonial(activeIndex);
}

document.querySelector('.next-btn').addEventListener('click', nextTestimonial);
document.querySelector('.prev-btn').addEventListener('click', prevTestimonial);

showTestimonial(activeIndex);
