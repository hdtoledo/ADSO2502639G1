/**
 * TODO: 1. Crea una función que reciba dos números y devuelva el mayor de ellos.
 */

const numMayor = (num01, num02) => num01 > num02 ? `El numero mayor es: ${num01}` : `El numero mayor es: ${num02}`;
console.log(numMayor(7,10))

/**
 * TODO: 2. Crea una función que reciba un número y devuelva true si es par y false si es impar
 */

const isPar = (num) => num % 2 == 0 ? `El numero ${num} es par` : `el numero ${num} es impar`
console.log(isPar(7))

/**
 * TODO: 3. Crea una función que reciba un número y devuelva su valor absoluto.
 */

const valAbsolute = (num) => Math.abs(num)
console.log(valAbsolute(-6))

/**
 * TODO: 4. Crea una función que reciba una cadena de texto y devuelva true si la cadena tiene más de 10 caracteres y false si no.
 */

const textMayor = (text) => {
    let contador = 0 
    let Logtexto = text.split('')
    for (let i = 0; i < Logtexto.length; i++){
        contador = contador + 1
    }
    if (contador < 10){
        return true
    } else {
        return false
    }
}

    console.log(textMayor('aaaaaaaa'))
    console.log(textMayor('aaaaaaaaaaaaa'))

/**
 * TODO: 5. Crea una función que reciba dos cadenas de texto y devuelva true si ambas cadenas tienen la misma longitud y false si no.
 */

const twoTextMayor = (text01, text02) => {
    let longText01 = text01.split('').length
    let longText02 = text02.split('').length

    return longText01 === longText02 ? true : false
}

console.log(twoTextMayor('Juan','juan'))
console.log(twoTextMayor('juan','juanCarlos'))

/**
 * TODO: 6. Crea una función que reciba un número y devuelva true si está entre 20 y 50 (incluyendo ambos extremos) y false si no
 */

const numEntre = (num) => num >= 20 && num <=50 ? true : false

console.log(numEntre(29))
console.log(numEntre(51))

/**
 * TODO: 7.Crea una función que reciba un objeto con dos propiedades (name y age) y devuelva un mensaje de bienvenida que incluya el nombre y la edad
 */

const bienvenida = (obj) => {
    let name = obj.name
    let age = obj.age

    console.log(`Bienvenid@ ${name} usted tiene ${age}`)
}
//* Creamos el objeto a recibir por la funcion
let obje01 = {
    name: 'Luis',
    age: 18
}

console.log(bienvenida(obje01))

/**
 * TODO: 8. Crea una función que reciba un array de números y devuelva la suma de todos ellos.
 */

const sumArray = (array) => {
    let contador = 0
    for(let i = 0; i < array.length; i++){
        contador = array[i] + contador
    }
    return contador
}
let miArray01 = [1,2,3,4,5,6,7]
console.log(sumArray(miArray01))

/**
 * TODO: 9.Crea una función que reciba un array de números y devuelva true si todos son positivos y false si no.
 */

const allPositive = (array) => {
    let state = true
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0){
            state = true
        } else {
            state = false
        }
    }
    return state
}

let miArray02 = [1,2,3,4,5]
let miArray03 = [1,2,3,-4,5]
console.log(allPositive(miArray02))
console.log(allPositive(miArray03))

/**
 * TODO: 10. . Crea una función que reciba un array de cadenas de texto y devuelva true si todas tienen más de 5 caracteres y false si no.
 */

const cadenaTextoIgual = (array) => {
    let state = true
    for(let i = 0; i < array.length; i++){
        if(array[i].length > 5){
            state = true
        } else {
            state = false
            break
        }
    }
    return state
}

let miArray04 = ['Juan','Luis','Ana','Mery']
let miArray05 = ['Paulina','Rosario','Luisaa','Camila']

console.log(cadenaTextoIgual(miArray04))
console.log(cadenaTextoIgual(miArray05))

