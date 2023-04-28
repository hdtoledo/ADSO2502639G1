//* 1. crea una funcion que tome dos numeros y devuelva el mayor de ellos.

console.log('//1')
const obtenerMayor = (numero1, numero2) => {
    if(numero1 > numero2) {
        return numero1
    } else {
        return numero2
    }
}

console.log(obtenerMayor(8, 15))

//2. Crea una función que reciba un número y devuelva true si es par y false si es impar.
console.log('//2')
const numImpar = (num) =>{
    return num % 2 === 0
};
console.log(numImpar(7)); false
console.log(numImpar(6)); true
//3. Crea una función que reciba un número y devuelva su valor absoluto.
console.log('//3')
function valorAbsoluto(numero) {
    return Math.abs(numero);
};

console.log(valorAbsoluto(-5));
console.log(valorAbsoluto(3));
//4. Crea una función que reciba una cadena de texto y devuelva true si la cadena tiene más de 10 caracteres y false si no.
console.log('//4')
function tiene10Caracteres(cadena) {
    if (cadena.length > 10) {
        return true;
    } else {
        return false;
    }
}
console.log(tiene10Caracteres("enderosCleomastoideo")); 
console.log(tiene10Caracteres("hola"));
//5. Crea una función que reciba dos cadenas de texto y devuelva true si ambas cadenas tienen la misma longitud y false si no.
console.log('//5')
function mismaLongitud(cadena1, cadena2) {
    if (cadena1.length === cadena2.length) {
        return true;
    } else {
        return false;
    }
}
//6. Crea una función que reciba un número y devuelva true si está entre 20 y 50 (incluyendo ambos extremos) y false si no.
console.log('//6')
function estaEntre20y50(numero) {
    if (numero >= 20 && numero <= 50) {
        return true
    } else {
        return false;
    }
}

console.log(estaEntre20y50(15));
console.log(estaEntre20y50(20));
console.log(estaEntre20y50(50));
console.log(estaEntre20y50(55));
//7. Crea una función que reciba un objeto con dos propiedades (name y age) y devuelva un mensaje de bienvenida que incluya el nombre y la edad.
console.log('//7')
//8. Crea una función que reciba un array de números y devuelva la suma de todos ellos.
console.log('//8')
//9. Crea una función que reciba un array de números y devuelva true si todos son positivos y false si no.
console.log('//9')
//10. Crea una función que reciba un array de cadenas de texto y devuelva true si todas tienen más de 5 caracteres y false si no
console.log('//10')