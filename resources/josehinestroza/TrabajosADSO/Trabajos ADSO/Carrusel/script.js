var currentImageIndex = 0;
var images = ["001.jpg", "002.jpg", "003.jpg", "004.jpg"]; // Agrega aquí las rutas de tus imágenes

function changeImage(direction) {
  currentImageIndex += direction;

  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  var imageElement = document.getElementById("current-image");
  imageElement.src = images[currentImageIndex];
}
