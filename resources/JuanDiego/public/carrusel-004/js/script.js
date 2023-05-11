const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const botones = document.querySelector('.btn');
const imagenes = document.querySelector('.images');

const style = () => {
	imagenes.style.backgroundPosition = 'center';
	imagenes.style.backgroundRepeat = 'no-repeat';
	imagenes.style.backgroundAttachment = 'fixed';
	imagenes.style.backgroundSize = 'cover';
};

imagenes.style.background = 'url(img/001.jpg)';
style();

let imgMuestra = ['001', '002', '003', '004', '005', '006'];

let contador = 0;

const derecha = () => {
	contador++;
	if (contador > imgMuestra.length - 1) {
		contador = 0;
		console.log(contador);
	}
	imagenes.style.background = `url(img/${imgMuestra[contador]}.jpg)`;
	style();
};
btnRight.addEventListener('click', derecha);

const izquierda = () => {
	contador--;
	if (contador < 0) {
		contador = 5;
	}
	imagenes.style.background = `url(img/${imgMuestra[contador]}.jpg)`;
	style();
};
btnLeft.addEventListener('click', izquierda);
