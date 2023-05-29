//!Crear una función que tome un array de números y devuelva un array con solo los números pares.
console.log('//1');
const numeros = (array) => {
    const Pares = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0){
            Pares.push(array[i]);
        }
    }
return Pares;
}
console.log(numeros([1, 2, 3, 4, 5, 8]));

//*Crear una función que tome un objeto y devuelva un array de sus valores.
console.log('//2');
const obtenerObjeto = (Objeto) => {
    return Object.values(Objeto);
};
console.log(
    obtenerObjeto({
        name: "brayan correa",
        age: "19",
        country:"chichombia",
    })
);

//?Crear una función que tome un array de strings y devuelva un objeto que tenga como claves cada una de las palabras y como valor la cantidad de veces que aparece esa palabra en el array.

console.log('//3');
const contarPalabras = (palabras) => palabras.reduce((contador, palabra) => {
    contador[palabra] = (contador[palabra] || 0) + 1;
    return contador;
  }, {});
  
  const palabras = ["hola", "mundo", "lidndo", "html", "mundo", "css"];
  const apariciones = contarPalabras(palabras);
  console.log(apariciones);  

//!Crear una función que tome un array de objetos y devuelva un array con solo los objetos que tengan una propiedad específica.
console.log('//4');
const tomarObjeto = (array, propiedad) => {
    return array.filter(objeto => objeto.hasOwnProperty(propiedad));
}

const Objetos = [
    {celulares: 'Samsung', modelo:'S23 ULTRA'},
    {celulares: 'Iphone', modelo: '14 pro max', function: 'isla dinamica'},
    {celulares: 'Huawei', modelo: 'P50 pro'},
    {celulares: 'Xiaomi', modelo: '12 ULTRA', function: 'camara onmivision'},
];

const ObjetosCelulares = tomarObjeto(Objetos, 'function');
console.log(ObjetosCelulares);

//*Crear una función que tome un array de strings y devuelva un array con las mismas palabras, pero en orden alfabético.
console.log('//5');
const ordenarAlfabeticamente = (alfabetico) => {
    return alfabetico.sort((a,b) => a.localeCompare(b));
}
const vocabulario = ["zapatos", "Telefono", "Gasolina", "Avion", "Aguapanela"];
const vocabularioOrdenado = ordenarAlfabeticamente(vocabulario);
console.log(vocabularioOrdenado);

//!Crear una función que tome dos objetos y devuelva un objeto con las propiedades de ambos objetos.
console.log('//6');
const devolverObjeto = (objeto1, objeto2) => {
    return {...objeto1, ...objeto2};
}
const objeto1 = {carrera: 'Ingeneria de Software', semestre: '10 semestres'};
const objeto2 = {universidad: 'Universidad Cooperativa de Colombia', año: '5 años'};
const objetoCombinado = devolverObjeto (objeto1, objeto2);
console.log(objetoCombinado);

//*Crear una función que tome un array de números y devuelva la suma de todos los números.
console.log('//7');
const sumarNumeros = (array) => {
    return array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}
const numero = [28, 50, 150, 21];
const suma = sumarNumeros (numero);
console.log(suma);

//!Crear una función que tome un array de números y devuelva un array con los mismos números, pero multiplicados por un valor dado.
console.log('//8');
const numerosMultiplicados = (numeros, multiplicacion) => {
    return numeros.map(numeros => numeros * multiplicacion );
}
const numers = [21, 4, 8, 18];
const multiplicacion = 2;
const multiplicar = numerosMultiplicados (numers, multiplicacion);
console.log(multiplicar);

//*Crear una función que tome una cadena de texto y devuelva la misma cadena en orden inverso.
console.log('//9');
const invertirTexto = (cadena) => {
    return cadena.split('').reverse().join('');
}
const cadena = 'Chocolate con Leche';
const textoInvertido = invertirTexto (cadena);
console.log(textoInvertido);

//!Crear una función que tome un objeto y devuelva un array de sus claves.
console.log('//10');
const obtenerClaves = (objeto) => {
    return Object.keys(objeto);
};
const miObjeto = { 
    portatil:"ASUS",  
    sistemaOperativo:"Windows 10", 
    Ram:"8GB",
    Procesador:"AMDA A10",
};
const claves = obtenerClaves(miObjeto);
console.log(claves);
