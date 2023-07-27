const containerImg = document.getElementById('imgContain')
const body = document.getElementById('body')

let count = 2

setInterval(() => {
    if(count > 8){
        count = 1
        body.style.backgroundImage = `url(../ejercicio6/img/1${count}.jpg)`
        containerImg.style.backgroundImage = `url(../ejercicio6/img/1${count}.jpg)`
    } else {
        containerImg.style.backgroundImage = `url(../ejercicio6/img/1${count}.jpg)`
        body.style.backgroundImage = `url(../ejercicio6/img/1${count}.jpg)`
        count++
    }
}, 5000);
