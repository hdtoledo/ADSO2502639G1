//! Ejercicios js
//* 1. Crear una función que tome un array de números y devuelva un array con solo los números pares.
function obtenerNumerosPares(numeros) {
    // Creamos un array vacío para almacenar los números pares
    const numerosPares = [];
  
    // Iteramos sobre cada número en el array de entrada
    for (let i = 0; i < numeros.length; i++) {
      // Comprobamos si el número actual es par (si el resto de su división por 2 es 0)
      if (numeros[i] % 2 === 0) {
        // Si es par, lo agregamos al array de números pares
        numerosPares.push(numeros[i]);
      }
    }
  
    // Devolvemos el array de números pares
    return numerosPares;
  }

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = obtenerNumerosPares(numeros);
console.log(numerosPares); 

//* 2. Crear una función que tome un objeto y devuelva un array de sus valores.
function obtenerValores(objeto) {
    // Obtenemos las claves del objeto usando Object.keys()
    const claves = Object.keys(objeto);
  
    // Creamos un array vacío para almacenar los valores
    const valores = [];
  
    // Iteramos sobre cada clave y agregamos su valor al array de valores
    for (let i = 0; i < claves.length; i++) {
      valores.push(objeto[claves[i]]);
    }
  
    // Devolvemos el array de valores
    return valores;
  }

  const miObjeto = { a: 5, b: 6, c: 10, d: 69 };
const valores = obtenerValores(miObjeto);
console.log(valores);

//* 3. Crear una función que tome un array de strings y devuelva un objeto que tenga como claves cada una de las palabras y como valor la cantidad de veces que aparece esa palabra en el array.

function contarPalabras(arrayDeStrings) {
    // Creamos un objeto vacío para almacenar las palabras y su frecuencia
    const objetoPalabras = {};
  
    // Iteramos sobre cada string en el array de entrada
    for (let i = 0; i < arrayDeStrings.length; i++) {
      // Dividimos el string en palabras utilizando split() y lo recorremos con un bucle forEach
      arrayDeStrings[i].split(" ").forEach((palabra) => {
        // Comprobamos si la palabra ya está en el objeto de palabras
        if (objetoPalabras[palabra]) {
          // Si ya está, incrementamos su frecuencia en 1
          objetoPalabras[palabra]++;
        } else {
          // Si no está, agregamos la palabra al objeto con una frecuencia de 1
          objetoPalabras[palabra] = 1;
        }
      });
    }
  
    // Devolvemos el objeto de palabras y su frecuencia
    return objetoPalabras;
  }

  const miArray = ["salut monde", "comment ça va?"];
const objetoPalabras = contarPalabras(miArray);
console.log(objetoPalabras);

//* 4. Crear una función que tome un array de objetos y devuelva un array con solo los objetos que tengan una propiedad específica.
function filtrarObjetosPorPropiedad(objetos, propiedad) {
    return objetos.filter(objeto => objeto.hasOwnProperty(propiedad));
  }

  const personas = [
    { nombre: 'Jose', edad: 22 },
    { nombre: 'Pedro', ciudad: 'Cali' },
    { nombre: 'Ruperta', profesion: 'profesora' },
    { nombre: 'Paula perez', edad: 23, ciudad: 'Garzón' },
  ];
  
  const personasConEdad = filtrarObjetosPorPropiedad(personas, 'edad');
  console.log(personasConEdad);
  
  const personasEnMadrid = filtrarObjetosPorPropiedad(personas, 'ciudad');
  console.log(personasEnMadrid);

//* 5. Crear una función que tome un array de strings y devuelva un array con las mismas palabras, pero en orden alfabético.
function ordenarPalabras(arrayDePalabras) {
    return arrayDePalabras.sort();
  }

  const palabras = ['pera', 'banana', 'mora', 'uva', 'manzana'];

const palabrasOrdenadas = ordenarPalabras(palabras);
console.log(palabrasOrdenadas);

//* 6. Crear una función que tome dos objetos y devuelva un objeto con las propiedades de ambos objetos.
function combinarObjetos(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const objCombinado = combinarObjetos(obj1, obj2);
console.log(objCombinado);

//* 7. Crear una función que tome un array de números y devuelva la suma de todos los números.
function sumarNumeros(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

const numeros7 = [1, 2, 3, 4, 5];
const sumaTotal = sumarNumeros(numeros7);
console.log(sumaTotal);

//* 8. Crear una función que tome un array de números y devuelva un array con los mismos números, pero multiplicados por un valor dado.
function multiplicarArrayPorValor(array, valor) {
  // Crea un nuevo array para almacenar los resultados
  const resultado = [];
  
  // Recorre el array original y multiplica cada elemento por el valor dado
  for (let i = 0; i < array.length; i++) {
    resultado.push(array[i] * valor);
  }
  
  // Devuelve el array resultante
  return resultado;
}

const miArray2 = [1, 2, 3, 4, 5];
const miValor2 = 2;
const arrayMultiplicado = multiplicarArrayPorValor(miArray2, miValor2);
console.log(arrayMultiplicado);

//* 9. Crear una función que tome una cadena de texto y devuelva la misma cadena en orden inverso.
function reverseString(str) {
  return str.split('').reverse().join('');
}

let miCadena = "¡Ravenfield, el mejor juego de la historia!";
let cadenaInversa = reverseString(miCadena);
console.log(cadenaInversa);

//* 10. Crear una función que tome un objeto y devuelva un array de sus claves.
function getKeys(obj) {
  return Object.keys(obj);
}

let miObjeto2 = { nombre: "Juan", edad: 24, profesion: "Músico" };
let claves = getKeys(miObjeto2);
console.log(claves);º