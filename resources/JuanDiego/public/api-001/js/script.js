const btnReir = document.querySelector('.btn');
const txtDeslizar = document.querySelector('.broma');

let URL = 'https://v2.jokeapi.dev/joke/Dark?type=single';

const opacidad = valor => {
	txtDeslizar.style.opacity = valor;
	txtDeslizar.style.transition = 'opacity 0.4s';
};

const getMethod = async () => {
	opacidad(0);

	const data = await fetch(URL).then(e => e.json());
	setTimeout(() => {
		if (data) {
			console.log(data);
			txtDeslizar.innerHTML = data.joke;
			opacidad(1);
		}
	}, 400);
};

btnReir.addEventListener('click', getMethod);
