
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
//Funcion que oculta el menu cuando se hace click en un elemento
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion para darle el efecto de animacion a las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
     if(distance_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("react");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("equipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("Proyect-Management");
    }
}
//Detectamos el scrolling de la pagina mediante el evento scroll
window.onscroll = function(){
    efectoHabilidades();
} 