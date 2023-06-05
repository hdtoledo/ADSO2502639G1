const input = document.querySelector("#input");
const result = document.querySelector(".data-section");
const btnAudio = document.createElement('button');
const texto = document.getElementById('text')

async function getResults() {
    let word = input.value.trim();
    let fetchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    let data = await fetch(fetchUrl).then((res) => res.json());
    try {
        result.innerHTML = `<h4>loading......</h4>`;
        

        result.innerHTML = `
        <h2>Word: ${data[0].word}</h2>
        <div id="sound"><i class="fas fa-volume-up"></i></div>
        <span>${data[0].phonetic}</span>
        <div class="data-wrapper">
        </div>
        <hr>
        <div class="data-wrapper">
            <h4>Significado:</h4>
            <span>${data[0].meanings[0].definitions[0].definition}</span>
        </div>
        <hr>
        <div class="data-wrapper">
            <h4>Sinónimo:</h4>
            <span>${data[0].meanings[1].synonyms[0]}</span>
        </div>
        <hr>
        <div class="data-wrapper">
            <h4>Más Información:</h4>
            <span>${data[0].meanings[0].definitions[0].example}</span>
        </div>`;


        input.value = '';

        const audioEl = document.createElement('audio');
        audioEl.src = `${data[0].phonetics[0].audio}`;
        const btnAudio = document.getElementById('sound');
        btnAudio.addEventListener('click', () => {
            audioEl.play();
            console.log('hola');
        });

    } catch (error) {
        if (word.length == 0) {
            console.log("Por favor, ingresa una palabra.");
        } else {
            console.log("Error al obtener los resultados.", error);
        }
    }
    
}
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
    texto.style.display = 'none'  
        event.preventDefault();
        getResults();
    }
});
