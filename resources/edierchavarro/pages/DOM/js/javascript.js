// 1. Cambiamos el color del car y addToCart button cuando el color es seleccionado
// - Seleccionamos los elementos

const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const grayColor = document.getElementsByClassName("gray");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];

// Modificacion Elementos
// -Add Event Listeners
// -Red color

redColor.addEventListener("click", function(){
    cartButton.style.background = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("https://images.dealer.com/autodata/us/640/color/2022/USD20MBC891A0/996.jpg")';
});

grayColor[0].addEventListener("click", function(){
    cartButton.style.background = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("https://images.dealer.com/autodata/us/640/color/2022/USD20MBC891A0/922.jpg")';
});

blackColor.addEventListener("click", function(){
    cartButton.style.background = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("../img/bmw-i8-coupe-681x454.jpg")';
});

// -Cart Button

const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);

// - feedback Button

const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
}
feedbackBtn.addEventListener("click", feedback);