// Variables url de api y boton
const URL = 'https://randomuser.me/api/?results=100'
const btn = document.getElementById('btn')

// variables donde colocaremos la infomacion obtenida de la api
const imgUser = document.getElementById('imgUser')
const nameUser = document.getElementById('nameUser')
const emailUser = document.getElementById('emailUser')


// Fnncion async getMethod
async function getMethod(){
    // la peticion de la URL
    const data = await fetch(`https://randomuser.me/api/?results=${Math.floor(Math.random() * 5000)}`).then((e) => e.json())

    // Asignamos las variables necesarias y las cargamos al HTML
    imgUser.style.backgroundImage = `url("${data.results[0].picture.large}")`
    nameUser.textContent = `NameUser: ${data.results[0].name.title}.${data.results[0].name.first} ${data.results[0].name.last}`
    emailUser.textContent = `Email: ${data.results[0].email}`

    // Resultados queridos mostrado por consola
    console.log(data.results[0].picture.large)
    console.log(`${data.results[0].name.title}.${data.results[0].name.first} ${data.results[0].name.last}`)
    console.log(data.results[0].email)
    console.log('____________________________')
}   

// evento de escucha que ejecuta el getMethod
btn.addEventListener('click', getMethod)