const redColor = document.querySelector('.red');
const greenColor = document.getElementsByClassName('green');
const blackColor = document.querySelector('.black');
const cartButton = document.getElementById('button');
const imgCard = document.querySelector('.product-img');
const feedbackBtn = document.querySelector('.feedback');
const itemTag = document.getElementsByTagName('h3')[0];
const iconRed = document.querySelector('.fa-gas-pump');
const textBattery = document.querySelector('.text-fuel');

const cambioColor = (color, text, icon, url) => {
	cartButton.style.background = `${color}`;
	itemTag.style.backgroundColor = `${color}`;
	textBattery.innerText = `${text}`;
	iconRed.setAttribute(`class`, `${icon}`);
	imgCard.style.backgroundImage = `url("${url}")`;
};

redColor.addEventListener('click', () => {
	cambioColor(
		'#ff0000',
		'Batería AA: 50m/1000mAh',
		'fa-solid fa-battery-half',
		'https://http2.mlstatic.com/D_NQ_NP_716051-MLM52548580348_112022-V.jpg'
	);
});

greenColor[0].addEventListener('click', () => {
	cambioColor(
		'#2d572c',
		'Fusión nuclear',
		'fa-solid fa-atom fa-spin',
		'https://i.pinimg.com/736x/22/60/40/226040597e216598c4be575f4c6f80ce.jpg'
	);
});

blackColor.addEventListener('click', () => {
	cambioColor(
		'#000',
		'Combustible: 25mpg',
		'fa-solid fa-gas-pump',
		'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_dfc5bc45064f4732a68e0bd28d39b6f5.jpg'
	);
});

const cart = () => {
	cartButton.style.display = 'none';
	feedbackBtn.style.display = 'block';
};
cartButton.addEventListener('click', cart);

const feedback = () => {
	cartButton.style.display = 'block';
	feedbackBtn.style.display = 'none';
};
cartButton.addEventListener('click', feedback);
