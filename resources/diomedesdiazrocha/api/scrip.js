const inputEL= document.querySelector("#nombre-pais");
const searchBtnEL= document.querySelector(".btnBusqueda");
const result= document.querySelector(".resultados");

async function getresults() 
    
    let countrynamev = inputEL.ariaValueMax;
    try {
        result.innerHTML = `<h2 class="loading">cargando resultados...</h2>`;
        let fetchurl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
        let data = await fetch(fetchurl).then((res) => res.json());
    

result.innerWidth =`
  
<img src= "${data[0].flags.svg}" class"flag-img">
<h2>${data [0].name.common}</h2>
< class = "wrapper">
<div class= "data-wrpper">
<h4>capital:</h4>
<span>${data[0].capital[0]}</span>

</div>

</div>
<div class ="wrapper">
<div class ="data-wrapper
<h4>moneda:</h4>
<span>$[0].currencies[objetivo].keys(data[0]currencia)].name
}-$object.keys(data[0].currencies)[0]}span>

</div>
</div>
<div class ="wrapper">
<div class="data-wrapper">
<h4>Idioma:</h4>
<span<span${objet.values(data[0].lenguages)
    .tostring()
    .split(",")
    .join(",")}</span>
   </div>
</div>
     `;
}

  catch (error) {
    if (countryname.length == 0) {
        result.innerHTML = `<h3>El campo no puede estar vacio !</h3>`;
    
    } else {
        result.innerHTML = `<h3> por favor ingrese un pais correcto. !</h3>`;
    }
}


