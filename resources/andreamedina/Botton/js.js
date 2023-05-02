
const boton = document.getElementById("miButton") 
let background = document.querySelector("body")
const colores = ["yellow", "green", "blue","red","purple","pink"]

boton.addEventListener('click', () => {
    let ramdom0 = parseInt(Math.random() * colores.length);
    background.style.backgroundColor = colores[ramdom0]
})
