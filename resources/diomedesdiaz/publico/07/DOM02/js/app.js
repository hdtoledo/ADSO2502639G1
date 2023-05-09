
let btn_enviarMensaje = document.getElementById('btn-enviar')
let inputMensaje  = document.getElementById('mensaje')

let arrayMensajes = []
let contenedorMensajes = document.getElementById('mensajes')

btn_enviarMensaje.addEventListener('click', () => {
    if(inputMensaje.value != ''){
        mensajeInput()
        renderLista()
        limpiarInput()
    } else {
        alert('Ingrese un Mensaje')
    }
    console.log(arrayMensajes)
})


//TODO: Fn renderizar lista nueva
function renderLista(){
    let elementosHtml = arrayMensajes.map((elemento) => `<li>${elemento}</li>`);
    let listaHtml = elementosHtml.join("");
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

let eliminarMensajes = document.getElementById('btn-eliminarMens')

eliminarMensajes.addEventListener('click', () => {
    limpiarMensajes()
    renderLista()
})
