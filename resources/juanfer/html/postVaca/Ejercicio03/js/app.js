const timer = document.getElementById('timer')

//? Time
let seg = 0
let min = 0
let hr = 0

setInterval(() => {
    seg++
    if(seg === 60){
        seg = 0
        min++
        if(min === 60){
            min = 0
            hr++
        }
    }
    timer.textContent = `Time: ${hr}:${min}:${seg}`
}, 1000)