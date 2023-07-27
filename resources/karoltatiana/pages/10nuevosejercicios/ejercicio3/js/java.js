// Obtener referencia al elemento del temporizador
const timerElement = document.getElementById('timer');
const stopTimer = document.getElementById('stopButton');
const startTime = document.getElementById('starbtButton');

let seg = 0
let min = 0
let hrs = 0


let interval = setInterval(() => {
    seg++
    if(seg>60){
        min++
        if(min>60){
            hrs++
        }
    }
    timerElement.textContent = `${hrs}:${min}:${seg}`
}, 1000)


stopTimer.addEventListener('click', () => {
    clearInterval(interval)
}) 

startTime.addEventListener('click', () => {
 seg = 0
 min = 0
 hrs = 0

 interval = setInterval(() => {
    seg++
    if(seg>60){
        min++
        if(min>60){
            hrs++
        }
    }
    timerElement.textContent = `${hrs}:${min}:${seg}`
}, 1000)
})