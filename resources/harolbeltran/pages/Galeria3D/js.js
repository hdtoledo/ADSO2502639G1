const imageContainerEL = document.querySelector(".image-container");
const prevEL = document.querySelector(".prev");
const nextEL = document.querySelector(".next");

let x=0;
let timer=0;

prevEL.addEventListener("click",()=>{
    x = x + 45;
    clearTimeout(timer);
    updateContainer();
})

nextEL.addEventListener("click",()=>{
    x = x - 45;
    clearTimeout(timer);
    updateContainer();
})

function updateContainer(){
    imageContainerEL.style.transform = `perspective(1000px) rotateY(${x}deg)`;

    timer = setTimeout(() => {
        x = x - 45;
        updateContainer();
    }, 2000);
}

updateContainer();