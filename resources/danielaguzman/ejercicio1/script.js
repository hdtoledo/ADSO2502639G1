function sumar(num1, num2) {
  return num1 + num2;
}
console.log(`la suma es ${sumar(20, 58)}`); 



function contarCaracteres(cadena) {
    return cadena.length;
}
console.log(contarCaracteres ("Aguapanela"))



function encontrarNumeroMayor(numeros){
    let maximo = numeros[0];
    for (let i =1; i < numeros.length; i++){
      if (numeros[i] > maximo){
        maximo = numeros [i];
      }
    }
    return maximo;
  }
    console.log(encontrarNumeroMayor([21, 2, 54, 50, 80]));
    


  function convertirMayuscula(cadena){
    return cadena.toUpperCase();
  }
  console.log(convertirMayuscula("hola mundo"))



function objectoClave(obj) {
  return Object.keys (obj);
}
const objecto = {
  nombre: "Tatiana",
  apellido: "Angarita",
  email: "tatianaangarita150@gmail.com",
  edad: 19,
}
console.log(objectoClave(objecto))


function ordenNumero(array) {
  return array.sort((a, b) => a - b)
}

const numbers = [3, 1, 4, 8, 4, 9, 2, 6, 7, 3, 5]
const ordenNumeros = orderNumero(numbers)

console.log(ordenNumeros)


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


function longArrays(array) {
  const arrayFinal = []
  for (let i = 0; i < array.length; i++) {
      arrayFinal.push(array[i].length)
  }
  return arrayFinal;
}

const arrayEjemplo = ["Hola", "buenos dias", "!."]
console.log(longArrays(arrayEjemplo))


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
    name: 'Daniel',
    lastName: 'Florez'
}
const objetoPrueba02 = {
    name: 'Samuel',
    lastName: 'Zuñiga'
}

console.log(cambiaPropObjeto(objetoPrueba))
console.log(cambiaPropObjeto(objetoPrueba02))


function longArrayX(x) {
  const miArray = []

  for (let i = 1; i <= x; i++) {
      miArray.push(i)
  }

  return miArray;
}

const longitudArray = 10;
console.log(longArrayX(longitudArray))


function arraysUpper(array) {
  const miArray = []

  for (let i = 0; i < array.length; i++) {
      miArray.push(array[i].toUpperCase())
  }

  return miArray

}

const arrayPalabras = ["hola", "mundo", "en javascript"]
console.log(arraysUpper(arrayPalabras))


function twoStrings(str01, str02) {

  if (str01.toUpperCase() === str02.toUpperCase()) {
      return true
  } else {
      return false
  }
}

const string01 = 'hola mundo'
const string02 = 'HOla MuNdO'
const string03 = 'Soy unico'

console.log(twoStrings(string01, string02))
console.log(twoStrings(string01, string03))


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

const arrayObjetos = [{ name: 'Daniela', lastName: 'Hernandez' }, { name: 'Angel', lastName: 'Herrera' }, { name: 'Michaelle', lastName: 'Smith' }]
const clave = 'Fajardo'

console.log(stringObject(arrayObjetos, clave))


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