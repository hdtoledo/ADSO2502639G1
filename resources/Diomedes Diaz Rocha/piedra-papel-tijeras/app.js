let userScore= 0;
let compScore= 0;
const userScore_span= document.getElementById('user-score');
const compScore_span= document.getElementById('comp-score');
const scoreBoard_div= document.querySelector('marcador');
const result_div= document.querySelector('.result p');
const piedra_div= document.getElementById('r');
const papel_div= document.getElementById('p');
const tijera_div= document.getElementById('t');

function movidaComp(){
  const opciones= ['r','p','t'];
  const random= Math.floor(Math.random() * 3);
  const movida= opciones[random];
  return (movida);
}
function convertirLetra(opcion){
  if (opcion == 'r'){
    return "Piedra ✊";
  }else if (opcion == 'p') {
    return "Papel 🤚";
  }else {
    return "Tijeras ✌";
  }
}

function ganar(opcionUser, opcionPc){
  userScore++;
  userScore_span.innerHTML= userScore;
  const smallUser= "(USER)".fontsize(2);
  const smallPc= "(PC)".fontsize(2);
  result_div.innerHTML= convertirLetra(opcionUser)+smallUser+" le gana a "+convertirLetra(opcionPc)+smallPc+".<br> Tu ganaste!!";
  const userChoice_div= document.getElementById(opcionUser);
  const pcChoice_div= document.getElementById(opcionPc);
  userChoice_div.classList.add('verde');
  pcChoice_div.classList.add('rojo');
  setTimeout(function(){
    userChoice_div.classList.remove("verde");
    pcChoice_div.classList.remove("rojo");
  }, 2000);
}

function pierda(opcionUser, opcionPc){
  compScore++;
  compScore_span.innerHTML= compScore;
  const smallUser= "(USER)".fontsize(2);
  const smallPc= "(PC)".fontsize(2);
  result_div.innerHTML= convertirLetra(opcionPc)+smallPc+" le gana a "+convertirLetra(opcionUser)+smallUser+".<br> Tu perdiste";
  const userChoice_div= document.getElementById(opcionUser);
  const pcChoice_div= document.getElementById(opcionPc);
  userChoice_div.classList.add('rojo');
  pcChoice_div.classList.add('verde');
  setTimeout(function(){
    userChoice_div.classList.remove("rojo");
    pcChoice_div.classList.remove("verde");
  }, 2000);
}

function empate(opcionUser){
  result_div.innerHTML= "Ambos eligierón "+convertirLetra(opcionUser)+".<br> Es un empate!!";
  const opcion_div= document.getElementById(opcionUser);
  opcion_div.classList.add('gris');
  setTimeout(function(){
    opcion_div.classList.remove("gris");
  }, 2000);
}

function game(opcion){
  const movidaPc= movidaComp();
  const movidaUser= opcion;
  switch (movidaUser+movidaPc) {
    case 'rt':
    case 'pr':
    case 'tp':
      ganar(movidaUser, movidaPc);
    break;
    case 'rp':
    case 'pt':
    case 'tr':
      pierda(movidaUser, movidaPc);
    break;
    case 'rr':
    case 'pp':
    case 'tt':
      empate(movidaUser);
    break;
  }
}

function main(){
  piedra_div.addEventListener('click', () => game("r"));
  papel_div.addEventListener('click', () => game("p"));
  tijera_div.addEventListener('click', () => game("t"));
}
main();
