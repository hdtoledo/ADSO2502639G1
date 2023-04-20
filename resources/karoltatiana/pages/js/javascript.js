//Crea una función que tome dos números como argumentos y devuelva su suma
function sumar(num1, num2) {
  return num1 + num2;
}
console.log(sumar(55,67))

//Crea una función que tome una cadena como argumento y devuelva el número de caracteres que tiene.
function contarcaracteres(cadena) {
  return cadena.length;
}
console.log(contarcaracteres("aguapanela"));

//Crea una función que tome un array de números como argumento y devuelva el número más grande.
function encontrarnumeromayor(numeros){
    let maximo = numeros[0];
    for (let i = 1; i < numeros.length; i++){
      if(numeros[i] > maximo){
        maximo = numeros[i];
      }
    }
    return maximo;
  }
console.log(encontrarnumeromayor([16,28,3,73,5]));

//Crea una función que tome una cadena como argumento y devuelva la misma cadena pero con todas las letras en mayúsculas
function convertirmayus(cadena){
  return cadena.toUpperCase();
}
console.log(convertirmayus("tamal con chocolate"));

//Crea una función que tome un objeto como argumento y devuelva un array con todas las claves del objeto.
function objectoclave(obj) {
    return Object.keys (obj);
  }
  const objecto = {
    nombre:"Tatiana",
    apellido: "Angarita",
    email: "tatianaangarita150@gmail.com",
    edad: 19,
  }
console.log(objectoclave(objecto))