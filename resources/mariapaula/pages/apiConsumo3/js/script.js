const inputEl = document.querySelector("#razas");
const searchBtbEl = document.querySelector(".btnBusqueda");
const result = document.querySelector(".resultado");

async function getMethod(){
    let fetchUrl = 'https://dog.ceo/api/breeds/image/random'
    let data = await fetch(fetchUrl).then((res)=> res.json());
    result.innerHTML = `<img src='${data.message}'></img>`;
    console.log(data.message)
}

searchBtbEl.addEventListener('click', getMethod)
