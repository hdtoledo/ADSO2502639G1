function navBars(){
    document.getElementById('barsNav').classList.add('visibleNav')
}
function closeNavBars(){
    document.getElementById('barsNav').classList.remove('visibleNav')
    document.getElementById('barsNav').classList.remove('closeNav')
}

//! Variables
const titulos = document.getElementsByTagName('h2')
const paragraph = document.getElementsByTagName('p')

//! DarkMode
function darkMode(){
    //? DarkBody, MoonHiden, sunLogo
    document.querySelector('BODY').classList.add('darkBody')
    document.getElementById('darkMode').classList.add('moonHiden')
    document.getElementById('moon').classList.add('sunLogo')
    
    //? DarkTitles-h2
    for(let i = 0; i < titulos.length; i++){
        titulos[i].classList.add('darkH2')
    }
    //? DarkTitles-P
    for(let i = 0; i < paragraph.length; i++){
        paragraph[i].classList.add('darkP')
    }

    //? habilidadesDark
    document.getElementsByClassName('habilidades')[0].classList.add('darkUl')
    document.getElementsByClassName('habilidades')[1].classList.add('darkUl')

    titulos.classList.add('red')
}

function sunMode(){
    //? DarkBody, MoonHiden, sunLogo
    document.querySelector('BODY').classList.remove('darkBody')
    document.getElementById('darkMode').classList.remove('moonHiden')
    document.getElementById('moon').classList.remove('sunLogo')

    //? DarkTitles-h2
    for(let i = 0; i < titulos.length; i++){
        titulos[i].classList.remove('darkH2')
    }
    //? DarkTitles-p
    for(let i = 0; i < paragraph.length; i++){
        paragraph[i].classList.remove('darkP')
    }

    //? habilidadesDark
    document.getElementsByClassName('habilidades')[0].classList.remove('darkUl')
    document.getElementsByClassName('habilidades')[1].classList.remove('darkUl')
}


//! Contacto

function getContacto(){
    document.getElementById('getContacto').classList.add('contactoVisible')
}

function closeContacto(){
    document.getElementById('getContacto').classList.remove('contactoVisible')
}
