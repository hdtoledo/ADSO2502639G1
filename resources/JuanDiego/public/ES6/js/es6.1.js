// 1. Crear una función que tome un array de números y devuelva un array con solo los números pares.
console.log('// 1.');
const par1 = (array1) => {
    const pares = [];
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] % 2 == 0) {
            pares.push(array1[i]);
        }
    }
    return pares;
};

console.log(par1([1, 2, 9, 8, 5, 6, 10]));
console.log('');

// 2. Crear una función que tome un objeto y devuelva un array de sus valores.
console.log('// 2.');
const array2 = (obj2) => {
    let { name, age, country } = obj2;
    return [name, age, country];
};

const person2 = {
    name: 'Juan',
    age: '20',
    country: 'Colombia',
};

console.log(array2(person2));
console.log('');

// 3. Crear una función que tome un array de strings y devuelva un objeto que tenga como claves cada una de las palabras y como valor la cantidad de veces que aparece esa palabra en el array.
// console.log('// 3.');
// const objetoString = (array3) => {
//     let arr3 = [];
//     return Object.keys(array3).forEach;
// };

// console.log(objetoString(['nombre', 'clave']));

// 4. Crear una función que tome un array de objetos y devuelva un array con solo los objetos que tengan una propiedad específica.
console.log('// 4.');
const arrObj4 = [
    (peroson4 = {
        name: 'John',
        age: 20,
    }),
    (pet4 = {
        type: 'cat',
        name: 'Oliver',
        age: 4,
    }),
    (car4 = {
        color: 'red',
        type: 'nimivan',
        capacity: 7,
    }),
]

const arrayObj4 = (arrayObj4) =>
    arrayObj4.filter((arrayObj4) => arrayObj4.type);

console.log(arrayObj4(arrObj4));
console.log('');

// 5. Crear una función que tome un array de strings y devuelva un array con las mismas palabras, pero en orden alfabético.
console.log('// 5.');
array5 = ['SENA', 'ADSO', 'Juan Diego', 'zorro', 'John', 'Beats', 'aac', 'aab'];

const order5 = (arr5) => arr5.sort();

console.log(order5(array5));
console.log('');

// 6. Crear una función que tome dos objetos y devuelva un objeto con las propiedades de ambos objetos.
console.log('// 6.');
const person6 = { name: 'John', age: 20 },
    pet6 = { type: 'cat', name: 'Oliver' };
const join = (obj61, obj62) => (obj63 = { ...obj61, ...obj62 });

console.log(join(person6, pet6));
console.log('');

// 7. Crear una función que tome un array de números y devuelva la suma de todos los números.
console.log('// 7.');
const arr7 = [1, 2, 3, 4, 5];

const suma7 = (array7) =>
    array7.reduce((acumulador, valorActual) => acumulador + valorActual);

console.log(suma7(arr7));
console.log('');

// 8. Crear una función que tome un array de números y devuelva un array con los mismos números, pero multiplicados por un valor dado.
console.log('// 8.');
const arr8 = [8, 16, 32, 4];

const multiplication8 = (array8, valor) => array8.map((elem) => elem * valor);

console.log(multiplication8(arr8, 2));
console.log('');

// 9. Crear una función que tome una cadena de texto y devuelva la misma cadena en orden inverso.
console.log('// 9.');
const invertir = (text) => text.split('').reverse().join('');

console.log(invertir('Hola Mundo!'));
console.log('');

// 10. Crear una función que tome un objeto y devuelva un array de sus claves.
console.log('// 10.');
const person10 = {
    name: 'John',
    age: 20,
};

const clave10 = (obj10) => Object.keys(obj10);

console.log(clave10(person10));
console.log('');
