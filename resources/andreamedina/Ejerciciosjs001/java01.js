/*Ejercicios Prácticos: 
En estos ejercicios básicos realizaran las funciones y mostraran sus valores a través de la consola, Utilizaran ES6 y buenas prácticas en el código.*/

//* 1. Crea una función que reciba dos números y devuelva el mayor de ellos. */

const obtenerMayor=(numero1, numero2) => {
    if(numero1 > numero2) {
      return numero1
    } else {
      return numero2
    }
  }
  console.log(obtenerMayor(8, 15))
  
  /*2. Crea una función que reciba un número y devuelva true si es par y false si es impar.*/
  
const numpar = (num)=>{
  return num % 2 === 0
};
  console.log(numpar(7));
  console.log(numpar(6));
  
  /*3. Crea una función que reciba un número y devuelva su valor absoluto.*/
function valorAbsoluto(numero) {
  return Math.abs(numero);
}
  console.log(valorAbsoluto(-8));
  console.log(valorAbsoluto(9));

  /*4. Crea una función que reciba una cadena de texto y devuelva true si la cadena tiene más de 10 caracteres y false si no.*/
  
  function tiene10Caracteres(cadena) {
    if (cadena.length > 10){
      return true;
    }else {
      return false;
    }
  }
  console.log(tiene10Caracteres("enderdoscleomastoideo"));
  console.log(tiene10Caracteres("Hola"))

  /*5. Crea una función que reciba dos cadenas de texto y devuelva true si ambas cadenas tienen la misma longitud y false si no.*/
 
  function MismaLongitud(cadena1, cadena2){
    if (cadena1.length === cadena2.length){
      return true;
    } else {
      return false;
    }
  }
  console.log(MismaLongitud("Hola", "Mundo"));
  console.log(MismaLongitud("Hola", "Amigo"))
 
  /*6. Crea una función que reciba un número y devuelva true si está entre 20 y 50 (incluyendo ambos extremos) y false si no.*/
 
  function estaEntre20y50(numero) {
    if (numero >= 20 && numero <= 50) {
      return true
    }else{
      return false
    }
  }
  console.log(estaEntre20y50(15));
  console.log(estaEntre20y50(20));
  console.log(estaEntre20y50(50));
  console.log(estaEntre20y50(55));
 
  /*7. Crea una función que reciba un objeto con dos propiedades (name y age) y devuelva un mensaje de bienvenida que incluya el nombre y la edad.*/
 
  const bienvenida = (obj) => {
    let name = obj.name
    let age = obj.age

    console.log(`Bienvenida ${name} usted tiene ${age}`)
}
//* Creamos el objeto a recibir por la funcion
let obje01 = {
    name: 'Maria Paula',
    age: 18
}
console.log(bienvenida(obje01))

  /*8. Crea una función que reciba un array de números y devuelva la suma de todos ellos.*/

  const sumArray = (array) => {
    let contador = 0
    for(let i = 0; i < array.length; i++){
        contador = array[i] + contador
    }
    return contador
}
let miArray01 = [1,2,3,4,5,6,7]
console.log(sumArray(miArray01))

  /*9. Crea una función que reciba un array de números y devuelva true si todos son positivos y false si no.*/

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

  /*10. Crea una función que reciba un array de cadenas de texto y devuelva true si todas tienen más de 5 caracteres y false si no.*/
  
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

let miArray04 = ['Stella','Luis','Jorge','Meryda']
let miArray05 = ['Paula','Gildardo','Camilo','Camila']

console.log(cadenaTextoIgual(miArray04))
console.log(cadenaTextoIgual(miArray05))

  
  