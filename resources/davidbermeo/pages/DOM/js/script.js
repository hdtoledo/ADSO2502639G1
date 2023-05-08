 

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
    imageCard.style.backgroundImage = 'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.purosautos.com%2Fnovedades%2Fel-urus-el-suv-de-lamborghini-alcanza-un-importante-hito%2F&psig=AOvVaw3jRwGlsOwgjV23LOKjlgYU&ust=1683296613264000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLjIp9ju2_4CFQAAAAAdAAAAABAV")';
});

grayColor[0].addEventListener("click", function(){
    cartButton.style.background = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elcarrocolombiano.com%2Fautos-del-mundo%2Flamborghini-urus-mas-radical-y-poderoso-que-nunca-780-hp-de-poder%2F&psig=AOvVaw29qVwvY7DDrYr59HZ8utO2&ust=1683296565981000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCNCHgsHu2_4CFQAAAAAdAAAAABBn")';
});

blackColor.addEventListener("click", function(){
    cartButton.style.background = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lamborghini.com%2Fes-en%2Fmodelos%2Furus%2Furus-s&psig=AOvVaw29qVwvY7DDrYr59HZ8utO2&ust=1683296565981000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCNCHgsHu2_4CFQAAAAAdAAAAABBt")';
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

