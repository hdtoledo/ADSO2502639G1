const input = document.querySelector('.myInput');
const showTextButton = document.querySelector('.showText');
const output = document.querySelector('.output');
const errorText = document.querySelector('.error');
const texto = document.getElementsByTagName('h3');

showTextButton.addEventListener('mousedown', () => {
	const text = input.value;
	if (text == '') {
		showTextButton.style.display = 'none';
		input.style.display = 'none';
		errorText.style.display = 'block';
		setTimeout(() => {
			errorText.style.display = 'none';
			input.style.display = 'block';
			showTextButton.style.display = 'block';
		}, 3000);
	} else {
		output.textContent = text;
		texto[0].style.display = 'block';
	}
	input.value = '';
});
