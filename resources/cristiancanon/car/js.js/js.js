const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");

const grayColor = document.getElementsByClassName("gray");

const cartButton = document.getElementById("button");

const itemTag = document.getElementsByTagName("h3")[0];

redColor.addEventListener("click",function(){
    cartButton.style.background = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = "url(https://www.ford.com.co/content/dam/Ford/website-assets/latam/co/nameplate/raptor/2023/colorizer/naranja-metalico/fco-f150-raptor-colorizer-naranja-metalico.jpg.dam.full.high.jpg/1684866271523.jpg)"

});

grayColor[0].addEventListener("click",function(){
    cartButton.style.background = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = "url(https://www.ford.com.co/content/dam/Ford/website-assets/latam/co/nameplate/raptor/2023/colorizer/gris-azulado/fco-f150-raptor-colorizer-gris-azulado.jpg.dam.full.high.jpg/1684866278181.jpg)";
});

blackColor.addEventListener("click",function(){
    cartButton.style.background = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = "url(https://www.ford.com.co/content/dam/Ford/website-assets/latam/co/nameplate/raptor/2023/colorizer/negro-agata/fco-f150-raptor-colorizer-negro-agata.jpg.dam.full.high.jpg/1684866214793.jpg)";
});

const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);

const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);