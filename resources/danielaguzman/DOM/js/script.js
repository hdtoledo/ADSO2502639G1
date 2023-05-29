const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const grayColor = document.getElementsByClassName("blue");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];



redColor.addEventListener("click", function(){
    cartButton.style.background = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("../img/rojo.jpeg")';
});

blueColor.addEventListener("click", function(){
    cartButton.style.background = "blue";
    itemTag.style.backgroundColor = "blue";
    imageCard.style.backgroundImage = 'url("../img/azul.jpeg")';
});

blackColor.addEventListener("click", function(){
    cartButton.style.background = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("../img/negro.jpeg")';
});



const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);



const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
}
feedbackBtn.addEventListener("click", feedback);