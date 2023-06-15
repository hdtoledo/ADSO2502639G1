/**
 * * 1. Crear una función que tome un array de números y devuelva un array con solo los números pares.
 */

const numsPar = (array) => {
    let miArray = []
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 2) == 0) {
            miArray.push(array[i])
        }
    }
    return miArray
}

const Nums = [12, 25, 33, 42, 5, 6, 7, 8, 20, 17, 40]

console.log(numsPar(Nums))

/**
 * * 2. Crear una función que tome un objeto y devuelva un array de sus valores
 */

const valuesObject = (obj) => {
    return Object.values(obj)
}

const miObjeto = {
    name: 'Carlos',
    lastName: 'Cruz',
    email: 'email@gmail.com'
}

console.log(valuesObject(miObjeto))

/**
 * * 3. Crear una función que tome un array de strings y devuelva un objeto que tenga como 
 * * claves cada una de las palabras y como valor la cantidad de veces que aparece esa palabra
 * * en el array.
 */

const contarPalabras = (array) => {
    const contador = {};
    for (let palabra of array) {
        contador[palabra] ? contador[palabra]++ : contador[palabra] = 1
    }
    return contador;
}

const palabras = ["hola", "mundo", "hola", "adios", "mundo", "hola", "hola"];
const contador = contarPalabras(palabras);
console.log(contador)

/**
 * * 4. Crear una función que tome un array de objetos y devuelva un array con solo los objetos que tengan una propiedad específica
 */

class objectoP {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}
// ? creamos los objetos con el lastName en comun
const obj01 = new objectoP('Pedro', 'Ramirez')
const obj02 = new objectoP('Mario', 'Ramirez')
const obj03 = new objectoP('Camila', 'Ramirez')
const obj04 = new objectoP('Luisa', 'Cruz')
const obj05 = new objectoP('Tatiana', 'Calderon')


const propIdent = (array) => {
    let miArray = []

    for (let i = 0; i < array.length; i++) {
        if (array[i].lastName === 'Ramirez') {
            miArray.push(array[i])
        }
    }
    return miArray
}

const arrayPersonas = [obj01, obj02, obj03, obj04, obj05]


console.log(propIdent(arrayPersonas))

/**
 * * 5. Crear una función que tome un array de strings y devuelva un array con las mismas palabras, pero en orden alfabético
 */

const orderWords = (array) => {
    return array.sort()
}

var frutas = ['guindas', 'manzanas', 'bananas', 'arandano'];

console.log(orderWords(frutas))

/**
 * * 6. Crear una función que tome dos objetos y devuelva un objeto con las propiedades de ambos objetos
 */

const objCombi = (obj1, obj2) => {
    const miObj = {
        name: obj1.name,
        lastName: obj1.lastName,
        email: obj2.email,
        conectado: obj2.conectado
    }
    return miObj
}

let obje01 = { name: 'Juan', lastName: 'Ramirez' }
let obje02 = { email: 'Juan@gamil.com', conectado: true }

console.log(objCombi(obje01, obje02))

obje02.conectado = false
console.log(`su nombre es ${obj01.name} y su estado es ${obje02.conectado ? 'Conectado' : 'Desconectado'}`)

/**
 * * 7. Crear una función que tome un array de números y devuelva la suma de todos los números
 */

const sumArray = (array) => {
    let count = 0

    for (let i = 0; i < array.length; i++) {
        count = count + array[i]
    }
    return count
}

const arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(sumArray(arrayNums))

/**
 * * 8. Crear una función que tome un array de números y devuelva un array con los mismos números, pero multiplicados por un valor dado.
 */

const arrayMulti = (array, valorMulti) => {
    let miArray = []
    for (let i = 0; i < array.length; i++) {
        miArray.push(array[i] * valorMulti)
    }
    return miArray
}

const arrayNumsMulti = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arrayMulti(arrayNumsMulti, 2))

/**
 * * 9. Crear una función que tome una cadena de texto y devuelva la misma cadena en orden inverso
 */

const orderInver = (text) => {
    return text.split('').reverse().join('')
}

console.log(orderInver('palabra'))

/**
 * * 10. Crear una función que tome un objeto y devuelva un array de sus claves
 */


const keysObjects = (obj) => Object.keys(obj)

console.log(keysObjects(miObjeto))