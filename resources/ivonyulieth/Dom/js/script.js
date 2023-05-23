let btn_enviarMensaje = document.getElementById('btn-enviar')
let inputMensaje  = document.getElementById('mensaje')

let arrayMensajes = []
let contenedorMensajes = document.getElementById('mensajes')

let ContainerMensajeError = document.getElementById('mensajeError')

//TODO Evento CLick
document.addEventListener('keyup', function (event) {
    if (event.code === 'Enter') {
        if(inputMensaje.value != ''){
            mensajeInput()
            renderLista()
            limpiarInput()
            ContainerMensajeError.innerHTML = ''
        } else {
            ContainerMensajeError.innerHTML = '<p id="error">Digite un mensaje !</p>'
        }
    }
})

btn_enviarMensaje.addEventListener('click', () => {
    if(inputMensaje.value != ''){
        mensajeInput()
        renderLista()
        limpiarInput()
        ContainerMensajeError.innerHTML = ''
        
    } else {
        ContainerMensajeError.innerHTML = '<p id="error">Digite un mensaje !</p>'
    }
    console.log(arrayMensajes)
})

//TODO: Fn renderizar lista nueva
function renderLista(){
    let elementosHtml = arrayMensajes.map((elemento) => `<li>${elemento}</li>`)
    let listaHtml = elementosHtml.join("")
    contenedorMensajes.innerHTML = listaHtml
}

//TODO: Fn Capturar input
function mensajeInput(){
    arrayMensajes.push(inputMensaje.value)
}
//TODO: Fn Limpiar Input
function limpiarInput(){
    inputMensaje.value = ''
}

//TODO: Fn limpiar mensajes
function limpiarMensajes(){
    arrayMensajes = []
}

//? Limpiar Mensajes
let eliminarMensajes = document.getElementById('btn-eliminarMens')

eliminarMensajes.addEventListener('click', () => {
    limpiarMensajes()
    renderLista()
    ContainerMensajeError.innerHTML = ''
})