const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");

let currentIndex = 0;
const totalImages = imageContainerEl.children.length;

prevEl.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateImage();
});

nextEl.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateImage();
});

function updateImage() {
    const angle = currentIndex * -45;
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${angle}deg)`;
}

updateImage();
