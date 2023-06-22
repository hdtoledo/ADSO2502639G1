// TODO Variables
let span = document.getElementById('btn-click')
let body = document.querySelector('body')
let countHTML = document.getElementById('count')
let contador = 0
let colors  = ['red','blue','orange','cyan','aquamarine','burlywood','chocolate','darkorchid']

// TODO btns-interactive
let increment = document.getElementById('increment')
let disminuir = document.getElementById('disminuir')
let reset = document.getElementById('reset')

// TODO Evento click
span.addEventListener('click', () => {
    count()
    changeColor()
    console.log(contador)
    countHTML.textContent = `contador: ${contador}`
})
//? Functon count
const count = () => {contador++}

//? Functon changeColor
const changeColor = () => {
    //* generar numero random
    let numRadom = parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[numRadom]
}

//? BTN-Interactive
increment.addEventListener('click', () => {contador++;countHTML.textContent = `contador: ${contador}`})
disminuir.addEventListener('click', () => {contador--;countHTML.textContent = `contador: ${contador}`})
reset.addEventListener('click', () => {contador = 0;countHTML.textContent = `contador: ${contador}`})

// TODO Eventos Teclas
//* KeyCode space: 32, up arrow: 38, down arrow:40
//? EventTecla increment
document.addEventListener('keydown', (event) => {
    if (event.keyCode ==  38) {
        contador++;countHTML.textContent = `contador: ${contador}`
    }
}, false);
//? EventTecla disminuir
document.addEventListener('keydown', (event) => {
    if (event.keyCode ==  40) {
        contador--;countHTML.textContent = `contador: ${contador}`
    }
}, false);
//? EventTecla resert
document.addEventListener('keydown', (event) => {
    if (event.keyCode ==  32) {
        contador = 0;countHTML.textContent = `contador: ${contador}`
    }
}, false);
//? EventTecla colorRandom
document.addEventListener('keydown', (event) => {
    if (event.keyCode ==  17) {
        count()
        changeColor()
        console.log(contador)
        countHTML.textContent = `contador: ${contador}`
    }
}, false);

let dateHTML = document.getElementById('date')

//TODO Clock
setInterval(() => {
    let date = new Date
    let hrs = date.getHours()
    let min = date.getMinutes()
    let segs = date.getSeconds()

    dateHTML.textContent = `${hrs}:${min}:${segs}`
}, 1000)