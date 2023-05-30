const boton = document.querySelector('#boton');
const body = document.querySelector('body');
const colores = [];

boton.addEventListener('click', function() {
   
    const color = generarColorAleatorio();
    body.style.backgroundColor = color;
    colores.push(color);
    console.log(`El botón ha sido presionado ${colores.length} veces`);
  });
  
  function generarColorAleatorio() {
   
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  }