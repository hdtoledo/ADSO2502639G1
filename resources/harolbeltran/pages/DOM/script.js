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
    imageCard.style.backgroundImage = 'url("https://stimg.cardekho.com/images/car-images/930x620/Mercedes-Benz/Mercedes-Benz-CLA/3798/1562917924060/Jupiter-Red_ff2124.jpg?tr=w-898")';
});

grayColor[0].addEventListener("click", function(){
    cartButton.style.background = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("https://www.mercedes-benz.de/passengercars/mercedes-benz-cars/compactcars/range-overview/_jcr_content/swipeableteaserbox/par/swipeableteaser_1706874858/asset.MQ6.12.20221215124011.jpeg")';
});

blackColor.addEventListener("click", function(){
    cartButton.style.background = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("https://imgd-ct.aeplcdn.com/1056x660/n/5va8vta_1511431.jpg?q=75")';
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
