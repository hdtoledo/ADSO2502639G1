const redColor = document.querySelector('.red')
const blackColor = document.querySelector('.black')
const imageCard = document.querySelector('.product-image')
const feedbackBtn = document.querySelector('.feedback')
const grayColor = document.getElementsByClassName('gray')
const cartButton = document.getElementById('button')
const itemTag = document.getElementsByTagName('h3')[0]


redColor.addEventListener('click', () => {
    cartButton.style.background = 'red'
    itemTag.style.backgroundColor = 'red'
    imageCard.style.backgroundImage = 'url("https://www.chevrolet.com.ec/content/dam/chevrolet/south-america/ecuador/espanol/index/crossovers-and-suvs/blazer-rs/01-images/2020-blazer-mov-diseno-03.jpg?imwidth=960")'
})

grayColor[0].addEventListener('click', () => {
    cartButton.style.background = 'gray'
    itemTag.style.backgroundColor = 'gray'
    imageCard.style.backgroundImage = 'url("https://www.chevyblazer.org/cdn-cgi/image/format=auto,onerror=redirect,width=1920,height=1920,fit=scale-down/https://www.chevyblazer.org/attachments/20191222_143759-jpg.362/")'
})

blackColor.addEventListener('click', () => {
    cartButton.style.background = 'black'
    itemTag.style.backgroundColor = 'black'
    imageCard.style.backgroundImage = 'url("https://www.autoinfluence.com/wp-content/uploads/2021/02/2021-Chevy-Blazer-Black.jpg")'
})


const cart = () =>{
    cartButton.style.display = 'none'
    feedbackBtn.style.display = 'block'
};
cartButton.addEventListener('click', cart)

const feedback = () => {
    cartButton.style.display = 'block'
    feedbackBtn.style.display = 'none'
}
feedbackBtn.addEventListener('click', feedback)