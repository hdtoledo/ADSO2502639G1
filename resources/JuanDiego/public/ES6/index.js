// ---------------------------------------------------------

function suma1(num1, num2) {
    return console.log("La suma de", num1, "y", num2, "es:", num1 + num2);
}

suma1(5, 6);

//---------------------------------------------------------

function str2(strings2) {
    return console.log(strings2.length);
}

str2("Hola");

// ---------------------------------------------------------

function maxNumber3(arr3) {
    return console.log(Math.max(...arr3));
}

let array3 = [0, 2, 4, 5, 1, 3];

maxNumber3(array3);

function maxNum3(arr3) {
    let max3 = arr3[0];
    for (let i = 1; i < arr3.length; i++) {
        if (arr3[i] > max3) {
            max3 = arr3[i];
        }
    }
    return max3;
}

array3 = [4, 10000];
console.log(maxNum3(array3));

// // ---------------------------------------------------------

function upper4(str4) {
    return str4.toUpperCase();
}

console.log(upper4("hola"));

// // ---------------------------------------------------------

function array5(objet5) {
    return Object.keys(objet5);
}

let objeto5 = {
    nombre: "Juan",
    edad: 20,
};

console.log(array5(objeto5));

// // ---------------------------------------------------------

function order(arr6) {
    return arr6.sort((a, b) => a - b);
}

let num6 = [7, 2, 10, 1, 5, 6, 3, 4, 11, 9, 8];
console.log(order(num6));

// // ---------------------------------------------------------

function days7(date71, date72) {
    const diff7 = new Date(date72).getTime() - new Date(date71).getTime();

    return diff7 / (1000 * 60 * 60 * 24);
}

console.log(days7("2023-03-14", "2023-03-15"));

// // ---------------------------------------------------------

function length8(arr8) {
    return arr8.map((str) => str.length);
}

let arr8 = ["Yo", "estudio", "ADSO", "en", "el", "SENA"];
console.log(length8(arr8));

// // ---------------------------------------------------------

let objet9 = {
    nombre: "Juan",
    edad: "20",
};

function invertir(objet9) {
    const miObjet = {
        nombre: objet9.nombre.split("").reverse().join(""),
        edad: objet9.edad.split("").reverse().join(""),
    };
    return miObjet;
}

console.log(invertir(objet9));

// console.log(Object.keys);

// // ---------------------------------------------------------

function entero10(num10) {
    const arr10 = [];
    for (let i = 1; i <= num10; i++) {
        arr10.push(i);
    }
    return arr10;
}

console.log(entero10(3));

// // ---------------------------------------------------------

function upper11(arr11) {
    return arr11.map((str) => str.toUpperCase());
}

let text = ["Yo", "estudio", "adso", "en", "el", "sena"];
console.log(upper11(text));

// // ---------------------------------------------------------

function com12(str121, str122) {
    return str121.toLowerCase().trim() == str122.toLowerCase().trim();
}

console.log(com12("HOLA MUNDO", "hola mundo    "));

// // ---------------------------------------------------------

function filtro(arr13, clave13) {
    return arr13.filter((obj) => obj.hasOwnProperty(clave13));
}
const arr = [
    { name: "Juan" },
    { age: 20 },
    { name: "Diego", email: "arenas@gmail.com" },
];

const resultado = filtro(arr, "name");
console.log(resultado);

// // ---------------------------------------------------------

function par13(arr13) {
	for (let i = 0; i < arr.length; i++) {
		if (arr13[i] % 2 !== 0) {
			return false;
		}
	}
	return true;
}

let par = [2, 4, 6, 8];
let impar = [1, 2, 3, 4];

console.log(par13(par));
console.log(par13(impar));
