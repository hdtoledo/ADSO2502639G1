const dark = document.querySelector(".dark");
const light = document.querySelector(".light");

// dark.addEventListener("click", function () {
//     document.querySelector("body").classList.add("darkMode");
//     light.classList.remove("active");
//     dark.classList.add("active");
// });

function darkMode(){
    document.querySelector("body").classList.add("darkMode");
    document.querySelector("ul").classList.add("darkModeUl");
    document.getElementsByTagName("hr")[0].classList.add("darkModeHr");
    document.getElementsByTagName("hr")[1].classList.add("darkModeHr");
    document.getElementsByTagName("hr")[2].classList.add("darkModeHr");
    document.getElementsByTagName("hr")[3].classList.add("darkModeHr");
    document.getElementById("contacto").classList.add("darkModeContac")
}

function darkModeOff(){
    document.querySelector("body").classList.remove("darkMode");
    document.querySelector("ul").classList.remove("darkModeUl");
    document.getElementsByTagName("hr")[0].classList.remove("darkModeHr");
    document.getElementsByTagName("hr")[1].classList.remove("darkModeHr");
    document.getElementsByTagName("hr")[2].classList.remove("darkModeHr");
    document.getElementsByTagName("hr")[3].classList.remove("darkModeHr");
    document.getElementById("contacto").classList.remove("darkModeContac")
}

// light.addEventListener("click", function () {
//     document.querySelector("body").classList.remove("darkMode");
//     dark.classList.remove("active");
//     light.classList.add("active");
// });
