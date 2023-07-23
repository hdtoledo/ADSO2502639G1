const bars = document.getElementById('bars')
const closeBtn = document.getElementById('close')
const headerContain = document.getElementById('header__container')

bars.addEventListener('click', () => {
    headerContain.classList.remove('hidden')
})

const hiddenAdd = () => {
    headerContain.classList.add('hidden')
}

closeBtn.addEventListener('click', hiddenAdd)