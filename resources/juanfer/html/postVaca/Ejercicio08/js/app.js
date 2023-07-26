const count = document.getElementById('count')
const inputText = document.getElementById('inputText')

let countLetters = 0

document.addEventListener('keyup', () => {
    countLetters = inputText.value.split('').length
    count.textContent = `Count: ${countLetters}`
})