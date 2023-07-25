const inputEl = document.querySelector("#buscador")
const result = document.querySelector(".resultado")
const parrafo = document.querySelector(".disable")

async function getResults (){


let word = inputEl.value;
  result.innerHTML = `<h2 class= "loading">Cargando resultados...</h2>`;
  let fetchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  let data = await fetch(fetchUrl).then((res) => res.json())

result.innerHTML = `
<div class = "data-wrapper1">
<h2> Word: ${data[0].word}</h2>
<div class ="sound"><button>${data[0].phonetics[0].audio}🔈</button>
</div>
</div>
<span>noun ${data[0].phonetics[0].text}</span>
<div class = "data-wrapper">

</div>
<hr>
<div class="data-wrapper">
<h4>Significado:</h4>
<span>${data[0].meanings[0].definitions[0].definition}</span>
</div>
<hr>
<h4>Sinonimo:</h4>
<span>${data[0].meanings[0].definitions[0].synonyms[1]}</span>



`









}


inputEl.addEventListener("keydown",
function(event){
  if(event.key === "Enter"){
    event.preventDefault();
    getResults();
    
    
  }

})