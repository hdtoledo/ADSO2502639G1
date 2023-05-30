const piedraBtn = document.querySelector('.piedra');
const papelBtn = document.querySelector('.papel');
const tijeraBtn = document.querySelector('.tijera');
const resultadoText = document.querySelector('.resultado h3');
const usuarioEleccion = document.querySelector('.usuario h2');
const maquinaEleccion = document.querySelector('.maquina h2');
const puntajeUsuario = document.querySelector('.r-usuario p');
const puntajeMaquina = document.querySelector('.r-maquina p');
const opcMachineHtml = document.getElementById('opcMachine');
const opcUser = document.getElementById('opcUser');
const resultado = document.getElementById('resultado');
const contadorUsuarioHtml = document.getElementById('contadorUsuario');
const contadorMaquinaHtml = document.getElementById('contadorMaquina');


let contadorUsuario = 0
let contadorMaquina = 0
let opciones = ['piedra', 'papel', 'tijera'];

piedraBtn.addEventListener("click", () => {
    let opc = opciones[0]
    let opcMachine = opciones[Math.floor(Math.random() * opciones.length)]

    opcUser.style.backgroundImage = 'url("./img/piedra.png")'
    
    if (opcMachine == 'piedra'){
        opcMachineHtml.style.backgroundImage = 'url("./img/piedra.png")'
    } else if (opcMachine == 'papel') {
        opcMachineHtml.style.backgroundImage = 'url("./img/papel.png")'
    } else if (opcMachine == 'tijera') {
        opcMachineHtml.style.backgroundImage = 'url("./img/tijera.png")'
    }

    if (opcMachine == opc ){
        resultado.innerText = 'empate'
    } else if (opcMachine == 'papel'){
        resultado.innerText = 'pierdes'
        contadorMaquina++
        contadorMaquinaHtml.textContent = `Maquina: ${contadorMaquina}`
    } else if (opcMachine == 'tijera'){
        resultado.innerText = 'ganas'
        contadorUsuario++
        contadorUsuarioHtml.textContent = `Usuario: ${contadorUsuario}`
    }



});
papelBtn.addEventListener("click", () => {
    let opc = opciones[1]
    let opcMachine = opciones[Math.floor(Math.random() * opciones.length)]

    opcUser.style.backgroundImage = 'url("./img/papel.png")'
    
    if (opcMachine == 'piedra'){
        opcMachineHtml.style.backgroundImage = 'url("./img/piedra.png")'
    } else if (opcMachine == 'papel') {
        opcMachineHtml.style.backgroundImage = 'url("./img/papel.png")'
    } else if (opcMachine == 'tijera') {
        opcMachineHtml.style.backgroundImage = 'url("./img/tijera.png")'
    }

    if (opcMachine == opc ){
        resultado.innerText = 'empate'
    } else if (opcMachine == 'piedra'){
        resultado.innerText = 'ganas'
        contadorUsuario++
        contadorUsuarioHtml.textContent = `Usuario: ${contadorUsuario}`
    } else if (opcMachine == 'tijera'){
        resultado.innerText = 'pierdes'
        contadorMaquina++
        contadorMaquinaHtml.textContent = `Maquina: ${contadorMaquina}`
    }
 

});

tijeraBtn.addEventListener("click", () => {
    let opc = opciones[2]
    let opcMachine = opciones[Math.floor(Math.random() * opciones.length)]

    opcUser.style.backgroundImage = 'url("./img/tijera.png")'
    
    if (opcMachine == 'piedra'){
        opcMachineHtml.style.backgroundImage = 'url("./img/piedra.png")'
    } else if (opcMachine == 'papel') {
        opcMachineHtml.style.backgroundImage = 'url("./img/papel.png")'
    } else if (opcMachine == 'tijera') {
        opcMachineHtml.style.backgroundImage = 'url("./img/tijera.png")'
    }

    if (opcMachine == opc ){
        resultado.innerText = 'empate'
    } else if (opcMachine == 'papel'){
        resultado.innerText = 'ganas'
        contadorUsuario++
        contadorUsuarioHtml.textContent = `Usuario: ${contadorUsuario}`
    } else if (opcMachine == 'piedra'){
        resultado.innerText = 'pierdes'
        contadorMaquina++
        contadorMaquinaHtml.textContent = `Maquina: ${contadorMaquina}`
    }
    
});




    
