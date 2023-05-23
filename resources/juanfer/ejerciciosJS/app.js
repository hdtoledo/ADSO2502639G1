
//* Crea una función que tome dos números como argumentos y devuelva su suma.

function sumar(num1, num2){
    return num1 + num2
}

console.log(sumar(78,100))

//* Crea una función que tome una cadena como argumento y devuelva el número de 
//* caracteres que tiene.

function longString(string){
    return string.length
}

console.log(longString('Hola mundo'))

//* crea una función que tome un array de números como argumento y devuelva el número más grande.


function numMayor(array){
    let Mayor = array[0]

    for (let i = 0; i < array.length; i++){
        if (array[i] > Mayor){
            Mayor = array[i]
        }
    }
    return Mayor
}

let arrayNums = [1,2,3,4,5,5,24,7,8,15]

console.log(numMayor(arrayNums))

//* Crea una función que tome una cadena como argumento y devuelva la misma cadena pero con todas las letras en mayúsculas.

function mayus(string){
    return string.toUpperCase()
}

console.log(mayus('palabra'))

//* Crea una función que tome un objeto como argumento y devuelva un array con todas las claves del objeto

function arrayClaves(objeto) {
    return Object.keys(objeto);
}

const objecto = {
    nombre: 'Juan',
    apellido: 'Cruz',
    email: 'juan@gmail.com',
    edad: 39
}

console.log(arrayClaves(objecto))

//* Crea una función que tome un array de números como argumento y devuelva un nuevo array con los números ordenados de menor a mayor

function orderNumber(array) {
    return array.sort((a, b) => a - b)
}

const numbers = [3, 1, 4, 8, 4, 9, 2, 6, 7, 3, 5]
const orderNumbers = orderNumber(numbers)

console.log(orderNumbers)

//* Crea una función que tome dos fechas como argumentos y devuelva el número de días que hay entre ellas.

function calcularDiasEntreFechas(fecha1, fecha2) {

    const fecha1Ms = fecha1.getTime();
    const fecha2Ms = fecha2.getTime();

    const diferenciaMs = fecha2Ms - fecha1Ms;

    const dias = Math.round(diferenciaMs / 86400000);

    return dias;
}

const fecha1 = new Date('2021-01-01');
const fecha2 = new Date('2022-01-07');
const diasEntreFechas = calcularDiasEntreFechas(fecha1, fecha2);
console.log(diasEntreFechas);

//* Crea una función que tome un array de strings como argumento y devuelva un nuevo array con la longitud de cada string

function longArrays(array) {
    const arrayFinal = []
    for (let i = 0; i < array.length; i++) {
        arrayFinal.push(array[i].length)
    }
    return arrayFinal;
}

const arrayEjemplo = ["Hola", "buenos dias", "!."]
console.log(longArrays(arrayEjemplo))

//* Crea una función que tome un objeto como argumento y devuelva un nuevo objeto con las mismas claves pero con los valores invertidos.

const string = 'palabra'
console.log(string.split("").reverse())


function cambiaPropObjeto(object) {
    const Miobj = {
        name: object.name.split("").reverse().join(""),
        lastName: object.lastName.split("").reverse().join("")
    }
    return Miobj
}
const objetoPrueba = {
    name: 'Juan',
    lastName: 'Calderon'
}
const objetoPrueba02 = {
    name: 'Carlos',
    lastName: 'Suarez'
}

console.log(cambiaPropObjeto(objetoPrueba))
console.log(cambiaPropObjeto(objetoPrueba02))

//* Crea una función que tome un número como argumento y devuelva un array con todos los números enteros desde 1 hasta ese número.

function longArrayX(x) {
    const miArray = []

    for (let i = 1; i <= x; i++) {
        miArray.push(i)
    }

    return miArray;
}

const longitudArray = 10;
console.log(longArrayX(longitudArray))

//* Crea una función que tome un array de strings como argumento y devuelva un nuevo array con todas las strings en mayúsculas.

function arraysUpper(array) {
    const miArray = []

    for (let i = 0; i < array.length; i++) {
        miArray.push(array[i].toUpperCase())
    }

    return miArray

}

const arrayPalabras = ["holaa", "mundo", "en javascript"]
console.log(arraysUpper(arrayPalabras))

//* Crea una función que tome dos strings como argumentos y devuelva true si son iguales (sin importar mayúsculas o minúsculas) o false si son diferentes.

function twoStrings(str01, str02) {

    if (str01.toUpperCase() === str02.toUpperCase()) {
        return true
    } else {
        return false
    }
}

const string01 = 'hola mundo'
const string02 = 'HOla MuNdO'
const string03 = 'Soy diferente'

console.log(twoStrings(string01, string02))
console.log(twoStrings(string01, string03))

//*  Crea una función que tome un array de objetos y un string como argumentos y devuelva un nuevo array con todos los objetos que contienen una propiedad con ese string como clave.

function stringObject(arrayObjc, clave) {
    const miArray = []

    for (let i = 0; i < arrayObjc.length; i++) {
        miArray.push(arrayObjc[i])
    }

    for (let i = 0; i < miArray.length; i++) {
        miArray[i].lastName = clave
    }

    return miArray

}

const arrayObjetos = [{ name: 'Luis', lastName: 'Cruz' }, { name: 'Lucho', lastName: 'Estefano' }, { name: 'Lucho', lastName: 'Tijeras' }]
const clave = 'Fajardo'

console.log(stringObject(arrayObjetos, clave))


//* Crea una función que tome un array de números como argumento y devuelva true si todos los números son pares o false si alguno es impar

function esPar(array) {
    let miBool = true 
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 2) === 0) {
            miBool = true
        } else {
            return false
            break;
        }
    }
    return miBool
}

const arrayNumeros = [2, 4, 6, 18, 22, 80, 48, 74]
const arrayNumeros2 = [2, 3, 6, 7, 10, 18]

console.log(esPar(arrayNumeros))
console.log(esPar(arrayNumeros2))