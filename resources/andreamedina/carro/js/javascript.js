const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const grayColor = document.getElementsByClassName("gray");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];


redColor.addEventListener("click", function(){
    cartButton.style.background = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2018/08/18/12/56/mercedes-benz-3614727_1280.jpg")';
});

grayColor[0].addEventListener("click", function(){
    cartButton.style.background = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2016/06/22/21/57/mercedes-benz-1474196_1280.jpg")';
});

blackColor.addEventListener("click", function(){
    cartButton.style.background = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2022/09/19/08/36/mercedes-benz-7464999_1280.jpg")';
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