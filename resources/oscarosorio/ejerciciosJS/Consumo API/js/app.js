const btnReir = document.getElementById('btn')
const textDeslizar = document.getElementById('broma')

var URL = 'https://v2.jokeapi.dev/joke/Any?lang=es&type=single'

btnReir.addEventListener('click', getMethod)

async function getMethod(){
    textDeslizar.classList.remove('deslizar')
    const data = await fetch(URL).then((e) => e.json())
    if(data){
        console.log(data)
        textDeslizar.innerHTML = data.joke
        textDeslizar.classList.add('deslizar')
    }
}