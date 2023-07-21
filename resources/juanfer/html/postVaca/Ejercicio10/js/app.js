const fichas = [
    {
        id: 1,
        ficha: './img/img_1.jpg'
    },
    {
        id: 1,
        ficha: './img/img_1.jpg'
    },
    {
        id: 2,
        ficha: './img/img_2.jpg'
    },
    {
        id: 2,
        ficha: './img/img_2.jpg'
    },
    {
        id: 3,
        ficha: './img/img_3.jpg'
    },
    {
        id: 3,
        ficha: './img/img_3.jpg'
    },
    {
        id: 4,
        ficha: './img/img_4.jpg'
    },
    {
        id: 4,
        ficha: './img/img_4.jpg'
    },
    {
        id: 5,
        ficha: './img/img_5.jpg'
    },
    {
        id: 5,
        ficha: './img/img_5.jpg'
    },
    {
        id: 6,
        ficha: './img/img_6.jpg'
    },
    {
        id: 6,
        ficha: './img/img_6.jpg'
    }
]

//? Vars | HTML
const main = document.getElementById('main')

//? Variables | Entorno
const arrFichas = fichas.map(e => {
    return(
        `
            <div class='ficha' id='${e.id}'>
                <img id='img_ficha' class='hidden' src='${e.ficha}'/>
            </div>
        `
    )
})

//? Functions
const getMethod = () => {
    main.innerHTML = arrFichas.join('')
}
getMethod()

function check(arr){
    if(arr[0].id === arr[1].id){
        console.log('son iguales')
    } else {
        const arr0 = document.getElementById(`${arr[0].id}`)
        const arr1 = document.getElementById(`${arr[1].id}`)
        
        arr1.innerHTML = `<img id='img_ficha' class='hidden' src='./img/img_${arr[1].id}.jpg'/>`
        arr0.innerHTML = `<img id='img_ficha' class='hidden' src='./img/img_${arr[0].id}.jpg'/>`
    }
}


const ficha = document.getElementsByClassName('ficha')
let moves = 0
let arrCheck = []

for(let i = 0; i < ficha.length; i++){
    ficha[i].addEventListener('click', (e) => {
        if(e.explicitOriginalTarget.firstElementChild === null){
            moves++
            if(moves == 2){
                (moves = 0)
                e.explicitOriginalTarget.classList.add('hidden')
                arrCheck.push(e.explicitOriginalTarget)
                check(arrCheck)
                arrCheck=[]
                console.log(arrCheck)
                return
            }
            
            arrCheck.push(e.explicitOriginalTarget)
        } else {
            moves++
            if(moves == 2){
                (moves = 0)
                e.explicitOriginalTarget.firstElementChild.classList.remove('hidden')
                arrCheck.push(e.explicitOriginalTarget)
                check(arrCheck)
                arrCheck=[]
                console.log(arrCheck)
                return
            }
            e.explicitOriginalTarget.firstElementChild.classList.remove('hidden')
            arrCheck.push(e.explicitOriginalTarget)
        }
        console.log(e.explicitOriginalTarget)
        console.log(arrCheck)
    })
}



