//1. cambiamos el color del car y addToCart button cuando el color es seleccionado 
// - seleccionamos loe elementos 

const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const grayColor = document.getElementsByClassName("gray");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];

// Modificando elementos 
// - Add Event listeners
// - Red color 

redColor.addEventListener("click", function(){
    cartButton.style.background = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("https://img.remediosdigitales.com/aa6c6c/toyota-supra-heritage-edition-4-/1366_2000.jpg")';
});

grayColor[0].addEventListener("click", function(){
    cartButton.style.background = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("http://www.toyotasatelite.mx/images/Producto/132887/SUPRA-1-21218.jpg")';
});

blackColor.addEventListener("click", function(){
    cartButton.style.background = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("https://elcomercio.pe/resizer/fb8-bS6jRmDrs8M9-6vF0P_ZuH0=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/MEVHEVDZ6FCIDOFOGI6HN3YTHU.jpg")';
});

// - Cart Button 
const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart)

//- feedback button
const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);

