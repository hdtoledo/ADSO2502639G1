const myInput = document.getElementById('input');
const esperaTxt = document.getElementById('texto');
const result = document.getElementById('resultado');

const getResultado = async () => {
	let wordInp = myInput.value;
	result.innerHTML = `
	<h2 class="loanding">
	Cargando Resultados...
	</h2>`;
	try {
		let fetchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInp}`;
		let data = await fetch(fetchUrl).then(res => res.json());

		let clave = 'text';
		for (let i = 0; i < data[0].phonetics.length; i++) {
			let objeto = data[0].phonetics[i];
			if ('text' in objeto) {
				var prueba = objeto[clave];
			}
		}

		result.innerHTML = `
			<div class="word">
				<div class="text-word">
					<h2>Word: ${data[0].word}</h2>
					<span>${data[0].meanings[0].partOfSpeech} /${prueba}/</span>
				</div>
				<div id="sound">
					<i class="fa-solid fa-volume-high"></i>
				</div>
			</div>
			<hr>
			<div class="definition ">
				<h2>Significado:</h2>
				<span>${data[0].meanings[0].definitions[0].definition}</span>
			</div>
			<hr>
			<div class="sinonimo ">
				<h2>Sinónimo:</h2>
				<span>${data[0].meanings[0].synonyms}</span>
			</div>
			<hr>
			<div class="sourceUrl">
				<h2>Más Información:</h2>
				<span> <a href="https://en.wiktionary.org/wiki/${wordInp}" target="_blank">https://en.wiktionary.org/wiki/${wordInp}</a></span>
			</div>
			`;

		const audioEl = document.createElement('audio');
		audioEl.src = `${data[0].phonetics[0].audio}`;
		const btnAudio = document.getElementById('sound');
		btnAudio.addEventListener('click', () => {
			audioEl.play();
			console.log('Hola');
		});
	} catch (err) {
		if (err instanceof TypeError) {
			let fetchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInp}`;
			let data = await fetch(fetchUrl).then(res => res.json());
			if ('message' in data) {
				result.innerHTML = `
				<p id="texto">${data.message}</p>
				`;
				console.log('F');
			}
			console.log('Error de tipo', err);
		} else if (err instanceof RangeError) {
			console.log('Error de rango', err);
		} else if (err instanceof ReferenceError) {
			console.log('Error de referencia', err);
		} else {
			console.log('Error desconocido', err);
		}
	}
};

myInput.addEventListener('keyup', event => {
	if (event.key === 'Enter' && myInput.value !== '') {
		esperaTxt.style.display = 'none';
		// containerTxt.style.display = 'flex';
		getResultado();
	}
});
