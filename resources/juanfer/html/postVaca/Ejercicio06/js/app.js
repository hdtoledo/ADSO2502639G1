const containerImg = document.getElementById('imgContain')
const body = document.getElementById('body')

let count = 2

setInterval(() => {
    if(count > 8){
        count = 1
        body.style.backgroundImage = `url(./img/img_0${count}.jpg)`
        containerImg.style.backgroundImage = `url(./img/img_0${count}.jpg)`
    } else {
        containerImg.style.backgroundImage = `url(./img/img_0${count}.jpg)`
        body.style.backgroundImage = `url(./img/img_0${count}.jpg)`
        count++
    }
}, 5000);
