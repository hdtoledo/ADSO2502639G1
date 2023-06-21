
//! Funcion que oculta o muerta el menu

let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById('nav').classList = '';
        menuVisible = false
    } else {
        document.getElementById('nav').classList = 'responsive';
        menuVisible = true;
    }
}
//! Funcion para animar las habilidades

function efectoHabilidades(){
    var skills = document.getElementById('skills');
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills >= 300){
        let habilidades = document.getElementsByClassName('progreso')
        habilidades[0].classList.add('javascript')
        habilidades[1].classList.add('htmlcss')
        habilidades[2].classList.add('photoshop')
        habilidades[3].classList.add('wordpress')
        habilidades[4].classList.add('react')
        habilidades[5].classList.add('comunicacion')
        habilidades[6].classList.add('equipo')
        habilidades[7].classList.add('creatividad')
        habilidades[8].classList.add('dedicacion')
        habilidades[9].classList.add('proyect')
    }
}

//! Detectamos el Scroll

window.onscroll = function(){
    efectoHabilidades();
}