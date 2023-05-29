//TODO Variables de entorno
let torre1 = []
let torre2 = []
let torre3 = []
let fichaSelect = null
let countMoves = 1
let torreWin = []
let player
let playerWins = []
let min = 00
let seg = 00
let interTime

//TODO Variables HTML
//* Torres
const torre_1 = document.getElementById('torre-1')
const torre_2 = document.getElementById('torre-2')
const torre_3 = document.getElementById('torre-3')
//* Movimientos
const moves = document.getElementById('moves')
//* Contidad Fichas
const cantFichas = document.getElementById('cantFichas')
//* btn iniciar
const start = document.getElementById('start')
//* container config
const config = document.getElementById('config')
const main = document.getElementById('main')
const namePlayer = document.getElementById('namePlayer')
const time = document.getElementById('time')
//* Botones Juego
const btnsGame = document.getElementById('btnsGame')
const nuevo = document.getElementById('nuevo')
const pause = document.getElementById('pause')
//* Table ganadores
const tablePlayers = document.getElementById('tablePlayers')

//* Function mover ficha
torre_1.addEventListener('click', () => {
    if(fichaSelect == null){
        //? Select first element of tower_1
        fichaSelect = torre_1.firstElementChild
        //? Delete first array element 
        torre1.shift()
        //? New Render tower_1
        torre_1.innerHTML = torre1.join('')
        moves.innerText = `Movimientos: ${countMoves++}`
    } else {
        //? FichaSelect
        if(torre_1.firstElementChild === null){
            torre1.unshift(fichaSelect.outerHTML)
            torre_1.innerHTML = torre1.join('')
            fichaSelect = null
        } else if (fichaSelect.id < torre_1.firstElementChild.id){
            torre1.unshift(fichaSelect.outerHTML)
            torre_1.innerHTML = torre1.join('')
            fichaSelect = null
        } else {
            console.log('movimiento Erroneo')
        }
    }
})
torre_2.addEventListener('click', () => {
    if(fichaSelect == null){
        //? Select first element of tower_1
        fichaSelect = torre_2.firstElementChild
        //? Delete first array element 
        torre2.shift()
        //? New Render tower_1
        torre_2.innerHTML = torre2.join('')
        moves.innerText = `Movimientos: ${countMoves++}`
    } else {
        //? FichaSelect
        if(torre_2.firstElementChild === null){
            torre2.unshift(fichaSelect.outerHTML)
            torre_2.innerHTML = torre2.join('')
            fichaSelect = null
        } else if (fichaSelect.id < torre_2.firstElementChild.id){
            torre2.unshift(fichaSelect.outerHTML)
            torre_2.innerHTML = torre2.join('')
            fichaSelect = null
        } else {
            console.log('movimiento Erroneo')
        }
    }
})
torre_3.addEventListener('click', () => {
    if(fichaSelect == null){
        //? Select first element of tower_1
        fichaSelect = torre_3.firstElementChild
        //? Delete first array element 
        torre3.shift()
        //? New Render tower_1
        torre_3.innerHTML = torre3.join('')
        moves.innerText = `Movimientos: ${countMoves++}`
    } else {
        //? FichaSelect
        if(torre_3.firstElementChild === null){
            torre3.unshift(fichaSelect.outerHTML)
            torre_3.innerHTML = torre3.join('')
            fichaSelect = null
        } else if (fichaSelect.id < torre_3.firstElementChild.id){
            torre3.unshift(fichaSelect.outerHTML)
            torre_3.innerHTML = torre3.join('')
            fichaSelect = null
        } else {
            console.log('movimiento Erroneo')
        }
    }

    if(torre3.length == torreWin.length){
        namePlayer.value = ''
        alert('You Win')
        config.style.display = 'flex'
        main.style.display = 'none'
        btnsGame.style.display = 'none'
        tablePlayers.style.display = 'none'

        //! Agregar el registro a la tabla

        let timePlayer = (min + ':' + seg)

        let html = `<div><b>Player:</b> ${player}, <b>Time:</b> ${timePlayer} <b>Moves:</b> ${countMoves}</div> `
        playerWins.push(html)
        tablePlayers.innerHTML = playerWins.join('')
    }
})

//* Function que genera las fichas
function crearFichas(numFichas){
    let array = []
    for(let i = 1; i <= numFichas; i++){
        let ficha = `<div class="ficha${i} ficha" id=${i}></div>`
        array.push(ficha)
    }
    torre1 = array
    torreWin = [...array]
    torre_1.innerHTML = torre1.join('')
}

//* Evento enter
document.addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        if(namePlayer.value == ''){
            return alert('Digite su Nombre')
        } else {
            player = namePlayer.value
            torre_1.innerHTML = ''
            torre_2.innerHTML = ''
            torre_3.innerHTML = ''
            torre1 = []
            torre2 = []
            torre3 = []
            fichaSelect = null
            countMoves = 1
            config.style.display = 'none'
            main.style.display = 'flex'
            btnsGame.style.display = 'flex'
            tablePlayers.style.display = 'flex'
            crearFichas(cantFichas.value)
            clearInterval(interTime)
            min = 0
            seg = 0
            startTime()
        }
    }
})
//* Start Game
start.addEventListener('click', () => {
    if(namePlayer.value == ''){
        return alert('Digite su Nombre')
    } else {
        player = namePlayer.value
        torre_1.innerHTML = ''
        torre_2.innerHTML = ''
        torre_3.innerHTML = ''
        torre1 = []
        torre2 = []
        torre3 = []
        fichaSelect = null
        countMoves = 1
        config.style.display = 'none'
        main.style.display = 'flex'
        btnsGame.style.display = 'flex'
        tablePlayers.style.display = 'flex'
        crearFichas(cantFichas.value)
        clearInterval(interTime)
        min = 0
        seg = 0
        startTime()
    }
})

//TODO btns Game
nuevo.addEventListener('click', () => {
    config.style.display = 'flex'
    main.style.display = 'none'
    btnsGame.style.display = 'none'
})

//TODO Pause
let interval = false
pause.addEventListener('click', () => {
    if (interval == false){
        clearInterval(interTime)
        interval = true
        main.style.display = 'none'
        pause.textContent = 'Reanudar'
    } else {
        interval = false
        main.style.display = 'flex'
        pause.textContent = 'Pausa'
        interTime = setInterval(() => {
            seg++
            if(seg >= 60){
                min++
                time.textContent = `${min}:${seg}`
                seg = 0
            } else {
                time.textContent = `${min}:${seg}`
            }
        }, 1000);
    }
})

//* Tiempo del Juego
function startTime(){
        min = 0
        seg = 0
        interTime = setInterval(() => {
            seg++
            if(seg >= 60){
                min++
                time.textContent = `${min}:${seg}`
                seg = 0
            } else {
                time.textContent = `${min}:${seg}`
            }
        }, 1000);
}




//* Ejecucion de funciones