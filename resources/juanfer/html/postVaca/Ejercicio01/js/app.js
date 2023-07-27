const inputEmail = document.getElementById('email')
const inputPass = document.getElementById('password')
const close = document.getElementById('close')

const alertModal = document.getElementById('alert')

const btnSubmit = document.getElementById('btn-submit')

btnSubmit.addEventListener('click', (e) => {
    if(inputEmail.textContent == '' || inputPass.textContent == ''){
        alertModal.style.visibility = 'visible'
    }
})

close.addEventListener('click', () => {
    alertModal.style.visibility = 'hidden'
})