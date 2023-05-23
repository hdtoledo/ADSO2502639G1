const tarea = document.querySelector('#task');
const lista = document.querySelector('.lists');

const clicked = () => {
	if (tarea.value === '') {
		alert('La tarea no debe estar vacía');
	} else {
		let li = document.createElement('li');
		li.innerHTML = tarea.value;
		lista.appendChild(li);
		tarea.value = '';
		let span = document.createElement('span');
		span.innerHTML = '\u00d7';
		li.appendChild(span);
	}
	guardar();
};

lista.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
    guardar();
});

const guardar = () => {
    localStorage.setItem('data', lista.innerHTML);
}

const getData = () => {
    lista.innerHTML = localStorage.getItem('data');
}

guardar();