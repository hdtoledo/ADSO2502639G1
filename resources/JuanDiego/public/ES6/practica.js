// // 4. Bucles
// for (let i = 0; i <= 1; i++) {
// 	console.log(i);
// }

// // 5. Function
// function suma(num1, num2) {
// 	return console.log('la suma de', num1, 'y', num2, 'es:', num1 + num2);
// }

// suma(5, 7);

// // 6. Arrays
// let numbers = [1, 2, 3, 4];
// for (let i = 0; i < numbers.length; i++) {
// 	console.log(numbers[i]);
// }

// // 7. Objet
// let people = {
// 	name: 'Juan Diego',
// 	age: '20',
// 	genero: 'man',
// };

// console.log(people.name, people.age);
// console.log(people);

// // ? 8. Arrays methods pendiente
// let number = [1, 2, 3];
// number.forEach(function (numero) {
// 	console.log(numero);
// });

// // 10. Events
// let button = document.getElementById('buttons');
// button.addEventListener('click', function () {
// 	console.log('Se hizo click en el botón');
// });
let nombre = 'Juan Diego';
let edad = 20;

console.log(nombre, 'tine', edad, 'años');

const usuarios = ['tina', 'danny', 'mark', 'bolaji'];
const lista = usuarios.map(elem => {
	return '<li>' + elem + '</li>';
});

const render = '<ul>' + lista.join('') + '</ul>';

document.write(render);