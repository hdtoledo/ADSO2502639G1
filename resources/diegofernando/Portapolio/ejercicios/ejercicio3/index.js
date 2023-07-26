const color_fondo=document.getElementById('color-fondo')
const numero=document.getElementById('numero')
let cantidad=0

let tiempo=setInterval(() => {
    cantidad+=1
    color_fondo.style.height=`${cantidad}`
    numero.textContent=cantidad

    if(cantidad===Infinity)
    {
        clearInterval(tiempo)
    }
}, 1000);