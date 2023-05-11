//* Variables
let containerImg = document.getElementById('containerImg')
const arrayImgs = ["url('../img/img-01.jpg')","url('../img/img-02.jpg')","url('../img/img-03.jpg')","url('../img/img-04.jpg')","url('../img/img-05.jpg')","url('../img/img-06.jpg')","url('../img/img-07.jpg')"]
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

