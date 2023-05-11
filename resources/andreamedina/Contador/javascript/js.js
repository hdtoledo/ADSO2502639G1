const contador = document.querySelector('.contador');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', e => {
    if(e.target.classList.contains('Agregar')){
        contador.innerHTML++;
        setColor();
      }
    if(e.target.classList.contains('Quitar')){
      contador.innerHTML--;
        setColor();  
      }
    
    if(e.target.classList.contains('Resetear')){
        contador.innerHTML = 0;
        setColor();
      }

    });

function setColor(){

    if(contador.innerHTML > 0){
        contador.style.color = "yellow";
    }else if( contador.innerHTML < 0){
        contador.style.color = "red";
    }else{
        contador.style.color = "#fff";
    }
}