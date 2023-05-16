// 1. Cambiamos color del car y addToCart button cuando el color es seleccionado
// -Seleccionamos los elementos
const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const grayColor = document.getElementsByClassName("gray");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];

// Modificando Elementos
// - Add Event Listeners
// - Red Color

redColor.addEventListener("click", () => {
    cartButton.style.background = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("img/_.jpeg")';
});

grayColor[0].addEventListener("click", () => {
    cartButton.style.background = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("img/Chevrolet Corvette C8 Stingray White Vossen HF-5.jpeg")';
});

blackColor.addEventListener("click", () => {
    cartButton.style.background = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("img/Corvette C8.jpeg")';
});

// -Cart Button
const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);

// - Feedback Button
const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);