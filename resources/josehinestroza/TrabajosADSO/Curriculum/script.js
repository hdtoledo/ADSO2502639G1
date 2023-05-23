// Funcion que oculta o muestra el menu
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

// Funcion que oculta el menu cuando se hace click en un elemento
function selectionar(){
    document.getElementById("nav").classList = "";
    menuVisible =false
}

// Funcion para darle el efecto de animacion a las habilidades 
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills= window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso")
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("medibang");
        habilidades[4].classList.add("diseño");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("equipo");
        habilidades[7].classList.add("dedicacion");
        habilidades[0].classList.add("proyect");
    }
}

//Detectamos el Scrolling de la pagina mediante el evento scroll
// window.onscroll = function(){
//     efectoHabilidades();
// }