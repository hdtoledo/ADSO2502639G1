// FUNCION QUE OCULTA O MUESTRA EL MENU

let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive"; 
        menuVisible = true
    }
}

// FUNCION QUE OCULTA EL MENU CUANDO SE HACE CLICK EN UN ELEMENTO

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false
}

// FUNCION PARA DARLE EL EFECTO DE ANIMACION A LAS HABILIDADES

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect("progreso");
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript")
        habilidades[1].classList.add("htmlcss")
        habilidades[2].classList.add("photoshop")
        habilidades[3].classList.add("wordpress")
        habilidades[4].classList.add("react")
        habilidades[5].classList.add("comunicacion")
        habilidades[6].classList.add("equipo")
        habilidades[7].classList.add("creatividad")
        habilidades[8].classList.add("dedicacion")
        habilidades[9].classList.add("proyect")
    }
}

// DETECTAMOS EL SCROLLING MEDIANTE EL EVENTO SCROLL

window.onscroll = function(){
    efectoHabilidades();
}