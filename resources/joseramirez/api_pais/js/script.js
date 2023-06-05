const inputEL = document.querySelector("#nombre-pais");
const searchBtnEL = document.querySelector(".btnBusqueda");
const result = document.querySelector(".resultado")

async function getResults() {
    let countryName = inputEL.value;
    try {
        result.innerHTML = `<h2 class="loading">Cargando Resultados...</h2>`;
        let fetchUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
        let data = await fetch(fetchUrl).then((res) => res.json());

        result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
<div class="wrapper">
    <div class="data-wrapper">
        <h4>Capital: </h4>
        <span>${data[0].capital[0]}</span>
    </div>
</div>
<div class="wrapper">
    <div class="data-wrapper">
        <h4>Poblacion: </h4>
        <span>${data[0].population}</span>
    </div>
</div>
<div class="wrapper">
    <div class="data-wrapper">
        <h4>Moneda: </h4>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name
            } - ${Object.keys(data[0].currencies)[0]}</span>
    </div>
</div>
<div class="wrapper">
    <div class="data-wrapper">
        <h4>Idioma: </h4>
        <span>${Object.values(data[0].languages)
                .toString()
                .split(",")
                .join(", ")}</span>
    </div>  
</div>
 `;
    }
    catch (error){
        if (countryName.length == 0) {
        result.innerHTML = `<h3>El campo no puede estar vacio !</h3>`;
        }else {
            result.innerHTML = `<h3>Por favor ingrese un pais en ingles</h3>`
        }
    }
}
searchBtnEL.addEventListener("click", getResults);