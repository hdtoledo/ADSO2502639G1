const count = document.getElementById('count')
const inputText = document.getElementById('inputText')

let countLetters = 0

document.addEventListener('keyup', () => {
    countLetters = inputText.textLength
    count.textContent = `Count: ${countLetters}`
})