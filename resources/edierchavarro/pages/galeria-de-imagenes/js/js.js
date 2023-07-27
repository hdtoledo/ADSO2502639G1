const images = document.querySelectorAll('.image');
let index = 0;

function changeImage() {
  images.forEach((image, i) => {
    if (i === index) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });

  index = (index + 1) % images.length;
}

setInterval(changeImage, 3000);
