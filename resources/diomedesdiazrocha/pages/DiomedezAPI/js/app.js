const btn = document.getElementById('btn')
const URL = 'https://api.nasa.gov/planetary/apod?api_key=L3QuzXbadL8eqzeixLf4tX2cd8tnD443rHz2ctyo&date=1996-06-16'
const dateInp = document.getElementById('date')
const containImg = document.getElementById('containImg')


// API key L3QuzXbadL8eqzeixLf4tX2cd8tnD443rHz2ctyo
// https://api.nasa.gov/planetary/apod?api_key=L3QuzXbadL8eqzeixLf4tX2cd8tnD443rHz2ctyo


async function getMethod(){
    const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=L3QuzXbadL8eqzeixLf4tX2cd8tnD443rHz2ctyo&date=${dateInp.value}`).then((e) => e.json())

    containImg.style.backgroundImage = `url("${data.hdurl}")`
    // containImg.innerHTML = `<img src='${data.hdurl}'></img>`
    console.log(data)
}

btn.addEventListener('click', getMethod)