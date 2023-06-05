// Instancias botones
const btnPiedra = document.getElementById('piedra');
const btnPapel = document.getElementById('papel');
const btnTijeras = document.getElementById('tijeras');

// Instancias opciones
const optUser = document.getElementById('user');
const optMachine = document.getElementById('machine');

// -------- Instancias de interfaces --------
/* Opciones */
const guiOptions = document.getElementsByClassName('container-option');

/* Victoria messages */
const guiWin = document.getElementById('resultado');

/* Score messages*/
const guiScore = document.getElementById('score')
const userScore = document.getElementById('userScore');
const machineScore = document.getElementById('machineScore');


//  -------- Opciones machine --------
const machineTurn = () => {
	let turn = Math.floor(Math.random() * (4 - 1) + 1);

	if (turn == 1) {
		turn = 'piedra';
		optMachine.src = './img/piedra.png';
	} else if (turn == 2) {
		turn = 'papel';
		optMachine.src = './img/papel.png';
	} else if (turn == 3) {
		turn = 'tijeras';
		optMachine.src = './img/tijeras.png';
	}
	return turn;
};

// -------- Victorias --------
const win = (userTurn, turn) => {
	if (
		(userTurn == 'piedra') & (turn == 'papel') ||
		(userTurn == 'papel') & (turn == 'tijeras') ||
		(userTurn == 'tijeras') & (turn == 'piedra')
	) {
		guiWin.textContent = 'Perdido';
		guiWin.style.display = 'block';
		guiWin.style.color = '#fc4f4f';
        guiScore.style.display = 'flex';
        machineScore.innerText ++;
	} else if (
		(userTurn == 'piedra') & (turn == 'tijeras') ||
		(userTurn == 'papel') & (turn == 'piedra') ||
		(userTurn == 'tijeras') & (turn == 'papel')
	) {
		guiWin.textContent = 'Ganado';
		guiWin.style.display = 'block';
		guiWin.style.color = '#36d436';
        guiScore.style.display = 'flex';
        userScore.innerText ++;
	} else {
		guiWin.textContent = 'Empatado';
		guiWin.style.display = 'block';
		guiWin.style.color = '#ffa600';
	}
};

btnPiedra.addEventListener('click', () => {
	guiOptions[0].style.display = 'flex';
	optUser.src = './img/piedra.png';
	win('piedra', machineTurn());
});

btnPapel.addEventListener('click', () => {
	guiOptions[0].style.display = 'flex';
	optUser.src = './img/papel.png';
	win('papel', machineTurn());
});

btnTijeras.addEventListener('click', () => {
	guiOptions[0].style.display = 'flex';
	optUser.src = './img/tijeras.png';
	win('tijeras', machineTurn());
});
