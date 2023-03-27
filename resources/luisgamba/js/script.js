
let menuVisible = false
function mostrarOcultarMenu(){
     if(menuVisible){
         document.getElementById("nav").classList = "";
         menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }

}
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
function efectoHabilidades(){
    var Skills = document.getElementById("Skills")
    var distancia_Skills = window.innerHeight - Skills.getBoundingClientRect().top;
     if(distancia_Skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss")
        habilidades[1].classList.add("coreldraw")
        habilidades[2].classList.add("comunicacion")
        habilidades[3].classList.add("trabajo en equipo")
        habilidades[4].classList.add("cratividad")
        habilidades[5].classList.add("dedicacion")
     }
}
window.onscroll = function(){
    efectoHabilidades();
}