let menuVisible = false;

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habiladades = document.getElementsByClassName("progreso");
        habiladades[0].classList.add("javascript")
        habiladades[1].classList.add("htmlcss")
        habiladades[2].classList.add("photoshop")
        habiladades[3].classList.add("wordpress")
        habiladades[4].classList.add("react")
        habiladades[5].classList.add("comunicacion")
        habiladades[6].classList.add("equipo")
        habiladades[7].classList.add("creatividad")
        habiladades[8].classList.add("dedicacion")
        habiladades[9].classList.add("proyect")

    }
}