const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const grayColor = document.querySelector(".gray");
const imageCard = document.querySelector(".product-image");
const feedbackbtn = document.querySelector(".feedback");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3") [0];

redColor.addEventListener("click", function(){
    cartButton.style.background = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("https://www.bugatti.com/fileadmin/_processed_/sei/p54/se-image-bcae0f8a6d92bc768d0bf6b3eda08656.webp")';
});

grayColor.addEventListener("click", function(){
    cartButton.style.background = "blue";
    itemTag.style.backgroundColor = "blue";
    imageCard.style.backgroundImage = 'url("https://www.bugatti.com/fileadmin/_processed_/sei/p54/se-image-32fd2832c8155c24e0df0cd9f45c3f83.webp")';
});

blackColor.addEventListener("click", function(){
    cartButton.style.background = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("https://www.bugatti.com/fileadmin/_processed_/sei/p54/se-image-046ed220b34d92e4a15de42ce19b7658.webp")';
});

const cart = () => {
    cartButton.style.display = "none";
    feedbackbtn.style.display = "block";
};
cartButton.addEventListener("click", cart);

const feedback = () => {
    cartButton.style.display = "block";
    feedbackbtn.style.display = "none";
}
feedbackbtn.addEventListener("click", feedback);