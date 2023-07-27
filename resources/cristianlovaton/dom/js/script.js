const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const grayColor = document.getElementsByClassName("gray");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];
const yelowColor = document.querySelector(".yelow");


redColor.addEventListener("click", function(){
    cartButton.style.background = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOB7V60KBxVWTQOBBaif8261BDTnnqZ8fPLUSkMLBCrGN8uzvTLk6paV1maolzX2c7Llev1fUOwU7iVgxt%25MXl7pHOCT75WfjE")';
});

grayColor[0].addEventListener("click", function(){
    cartButton.style.background = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOB7V60KBxVWTQOBBaif8261BDTnnqZ8fPLUSkMQBCrP1tZouAsk6paV1maolzX2c7Llev1fUOwU7iVgxt%25MXl7pHOCT75WfjE")';
});

blackColor.addEventListener("click", function(){
    cartButton.style.background = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOB7V60KBxVWTQOBBaif8261BDTnnqZ8fPLUSkRLBCrGN8uzvTLk6paV1maolzX2c7Llev1fUOwU7iVgxt%25MXl7pHOCT75WfjE")';
});
yelowColor.addEventListener("click", function(){
    cartButton.style.background = "yelow";
    itemTag.style.backgroundColor = "yelow";
    imageCard.style.backgroundImage = 'url("https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOB7V60KBxVWTQOBBaif8261BDTnnqZ8fPLUSkMQBCrP1tZounGk6paV1maolzX2c7Llev1fUOwU7iVgxt%25MXl7pHOCT75WfjE")';
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