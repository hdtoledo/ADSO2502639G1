const buscador = document.querySelector("#buscador")

async function getResults(){
    let word = buscador.value;
        
    
try{
    result.innerHTML = `<h2 class= "loading">Cargando resultados...</h2>`;
    let fetchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    let = await fetch(fetchUrl).then((res) => res.json())


    result.innerHTML =   [
        {
          "word": "",
          "phonetic": "həˈləʊ",
          "phonetics": [
            {
              "text": "həˈləʊ",
              "audio": "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"
            },
            {
              "text": "hɛˈləʊ"
            }
          ],
          "origin": "early 19th century: variant of earlier hollo ; related to holla.",
          "meanings": [
            {
              "partOfSpeech": "exclamation",
              "definitions": [
                {
                  "definition": "used as a greeting or to begin a phone conversation.",
                  "example": "hello there, Katie!",
                  "synonyms": [],
                  "antonyms": []
                }
              ]
            },
            {
              "partOfSpeech": "noun",
              "definitions": [
                {
                  "definition": "an utterance of ‘hello’; a greeting.",
                  "example": "she was getting polite nods and hellos from people",
                  "synonyms": [],
                  "antonyms": []
                }
              ]
            },
            {
              "partOfSpeech": "verb",
              "definitions": [
                {
                  "definition": "say or shout ‘hello’.",
                  "example": "I pressed the phone button and helloed",
                  "synonyms": [],
                  "antonyms": []
                }
              ]
            }
          ]
        }
      ]
}

catch(error) {
    if(word.length == 0){
        result.innerHTML = `<h3>El campo no puede estar vacio !</h3>`;
    }else{
        result.innerHTML = `<h3>Por favor ingrese la palabra correcta. </h3>`;
    }
}
}


buscador.addEventListener("keydown", getResults);