// 1. cambiamos el color del car y addtocart button cuando el color es seleccionado
// - seleccionamos los elementos
const redcolor = document.querySelector(".red");
const blackcolor = document.querySelector(".black");
const imagecard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const graycolor = document.getElementsByClassName("gray");
const cartbutton = document.getElementById("button");
const itemtag = document.getElementsByTagName("h3")[0];
// modificando elementos
// -add event listeners
// - red color

//red
redcolor.addEventListener("click", () => {
cartbutton.style.background = "red";
itemtag.style.backgroundColor = "red";
imagecard.style.backgroundImage = 'url("https://s.car.info/image_files/1920/mercedes-benz-g-class-lwb-front-side-0-697528.jpg")';
});

//gray
graycolor[0].addEventListener("click", () => {
cartbutton.style.background = "gray";
itemtag.style.backgroundColor = "gray";
imagecard.style.backgroundImage = 'url("https://hips.hearstapps.com/hmg-prod/images/2019-mercedes-benz-g550-357-1570533121.jpg?crop=0.635xw:0.777xh;0.0561xw,0.223xh&resize=640:*")';
});

//black
blackcolor.addEventListener("click", () => {
cartbutton.style.background = "black";
itemtag.style.backgroundColor = "black";
imagecard.style.backgroundImage = 'url("https://hips.hearstapps.com/hmg-prod/images/2019-mercedes-benz-g-class-211-1525365204.jpg?crop=1.00xw:0.822xh;0,0.153xh&resize=1200:*")';
});

 //- cart button 

const cart = () => {
    cartbutton.style.display = "none";
    feedbackBtn.style.display = "block";
};
cartbutton.addEventListener("click", cart);

//-feefback button

const feedback = () => {
    cartbutton.style.display ="block";
    feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);
