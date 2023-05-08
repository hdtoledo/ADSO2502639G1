const input = document.querySelector('.myInput');
const showTextButton = document.querySelector('.showText');
const output = document.querySelector('.output');
const errorText = document.querySelector('.error');
const texto = document.getElementsByTagName('h3');

showTextButton.addEventListener('mousedown', () => {
	const text = input.value;
	if (text == '') {
		showTextButton.style.display = 'none';
		errorText.style.display = 'block';
		setTimeout(() => {
			errorText.style.display = 'none';
			showTextButton.style.display = 'block';
		}, 4000);
	} else {
		output.textContent = text;
		texto[0].style.display = 'block';
	}
	console.log(output);
});
