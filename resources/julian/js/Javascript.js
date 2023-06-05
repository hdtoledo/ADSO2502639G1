
//Funcion que oculta o muestra el menu
let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        manuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}
//funcion para darle el efecto de animacion a las habilidades 
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("Photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("react");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("equipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}
window.onscroll = function(){
    efectoHabilidades();
}
