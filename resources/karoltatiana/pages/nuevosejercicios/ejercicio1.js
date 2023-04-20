/*EJERCICIOS 1*/
/*1. Crea una función que reciba dos números y devuelva el mayor de ellos.*/
const NumMayor = (num1, num2) => {
    if(num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
  console.log(NumMayor(4, 9))

  /*2. Crea una función que reciba un número y devuelva true si es par y false si es impar.*/
const espar = (num) => {
    return num % 2 === 0
};
  console.log(espar(7));
  console.log(espar(6));

  /*3. Crea una función que reciba un número y devuelva su valor absoluto.*/
  function valorAbsoluto(numero) {
    return Math.abs(numero);
  };
 
  console.log(valorAbsoluto(-5));
  console.log(valorAbsoluto(3));
  
  /*4. Crea una función que reciba una cadena de texto y devuelva true si la cadena tiene más
  de 10 caracteres y false si no.*/
  function tiene10Caracteres(cadena) {
    if (cadena.length > 10) {
      return true;
    } else {
      return false;
    }
  }
  console.log(tiene10Caracteres("enderdoscleomastoideo"));
  console.log(tiene10Caracteres("Hola"));
  /*5. Crea una función que reciba dos cadenas de texto y devuelva true si ambas cadenas tienen
  la misma longitud y false si no.*/
  function MismaLongitud(cadena1, cadena2) {
    if (cadena1.length === cadena2.length) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(MismaLongitud("Hola", "Mundo"));
  console.log(MismaLongitud("Hola", "Amigo"));
  
  /*6. Crea una función que reciba un número y devuelva true si está entre 20 y 50 (incluyendo
  ambos extremos) y false si no.*/
  function estaEntre20y50(numero) {
    if (numero >= 20 && numero <= 50) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(estaEntre20y50(15));
  console.log(estaEntre20y50(20));
  console.log(estaEntre20y50(50));
  console.log(estaEntre20y50(55));
  /*7. Crea una función que reciba un objeto con dos propiedades (name y age) y devuelva un
  mensaje de bienvenida que incluya el nombre y la edad.*/
  
  /*8. Crea una función que reciba un array de números y devuelva la suma de todos ellos.*/
  /*9. Crea una función que reciba un array de números y devuelva true si todos son positivos y
  false si no.*/
  /*10. Crea una función que reciba un array de cadenas de texto y devuelva true si todas tienen
  más de 5 caracteres y false si no.*/