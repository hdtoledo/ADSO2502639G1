//* Variables
let containerImg = document.getElementById('containerImg')
const arrayImgs = ["url('./img/imagen1.jpg')","url('./img/paisaje-2.webp')","url('./img/foto-3.jpg')","url('./img/imagen-4.avif')","url('./img/imagen-5.jpg')","url('./img/imagen-6.avif')","url('./img/imagen-7.jpg')"]
let iterator = 0

//* Btns
let btn_right = document.getElementById('btn-right')
let btn_left = document.getElementById('btn-left')

btn_right.addEventListener('click', () => {
    if(iterator < (arrayImgs.length - 1)){
        iterator++
        containerImg.style.backgroundImage = arrayImgs[iterator]
    } else {
        containerImg.style.backgroundImage = arrayImgs[0]
        iterator = 0
    }
})

btn_left.addEventListener('click', () => {
    if(iterator <= 0 ){
        iterator = (arrayImgs.length - 1)
        containerImg.style.backgroundImage = arrayImgs[iterator]
    } else{
        iterator--
        containerImg.style.backgroundImage = arrayImgs[iterator]
    }
    console.log(iterator)
})

