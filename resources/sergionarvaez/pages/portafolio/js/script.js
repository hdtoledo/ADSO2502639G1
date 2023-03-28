//funcion que oculta o muestra el menu//
let menuVisible =false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }   
}

//Funcion de Ocultar menu cuando se selecciona una seccion//
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible =false;
}

//Funcion para darle efecto de animacion a las habilidades//
function efectoHabilidades(){
    var skills = document.getElementById("skills")
    var distancia_skills = Window.innerheight - skills.getBoundingClientRect().top;
     if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso")
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("diseño");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("equipo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
     }
}

//detectamos el scrolling de la pagina mediante el evento scroll//
window.onscroll = function(){
    efectoHabilidades();
}