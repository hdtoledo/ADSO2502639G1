const btn = document.getElementById('btn')

// Variables HTML
const urlIMG = document.getElementById('urlIMG')
const title = document.getElementById('title')
const resume = document.getElementById('resume')
const fecha = document.getElementById('fecha')


async function getMethod(){
    const data = await fetch(`https://api.themoviedb.org/3/movie/${parseInt(Math.floor(Math.random() * 550))}?api_key=83f306c47065c18c987e852022b702fb`).then((e) => e.json())
    console.log(data)

    urlIMG.style.backgroundImage = `url("https://image.tmdb.org/t/p/w500${data.backdrop_path}")`
    title.textContent = `Title: ${data.original_title}`
    resume.textContent = `Resume: ${data.overview}`
    fecha   .textContent = `Date: ${data.release_date}`


    console.log(data.backdrop_path)
    console.log(data.original_title)
    console.log(data.overview)
    console.log(data.release_date)
    console.log()
}



btn.addEventListener('click', getMethod)