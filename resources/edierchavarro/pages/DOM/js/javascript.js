const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const grayColor = document.getElementsByClassName("gray");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];

// -color

redColor.addEventListener("click", function(){
    cartButton.style.background = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("https://i.pinimg.com/originals/eb/8d/55/eb8d551b8efccec38a91563a54fa4327.jpg")';
});

grayColor[0].addEventListener("click", function(){
    cartButton.style.background = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("https://d3bmp4azzreq60.cloudfront.net/fit-in/2000x2000/vendetunave/images/vehiculos/64287fefa1c53.webp")';
});

blackColor.addEventListener("click", function(){
    cartButton.style.background = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("https://ag-spots-2020.o.auroraobjects.eu/2020/08/23/bmw-m5-f90-competition-2021-c620023082020144106_4.jpg")';
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