//*Crear una función que tome un array de números y devuelva un array con solo los números pares.
const numeros = (array) => {
    const pares = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0){
            pares.push(array[i]);
        }
    }
    return pares;
}
console.log(numeros([1, 2, 3, 4, 5, 6, 8]));
 

//*Crear una función que tome un objeto y devuelva un array de sus valores.
const obtenerunobjeto = (objeto) => {
    return Object.values(objeto);
};
console.log(
    obtenerunobjeto({
    name: "Tatiana",
    age: 19,
    country: "Colombia",
})
);

//*Crear una función que tome un array de strings y devuelva un objeto que tenga como claves cada una de las palabras y como valor la cantidad de veces que aparece esa palabra en el array.
const contarPalabras = (palabras) => palabras.reduce((contador, palabra) => {
  contador[palabra] = (contador[palabra] || 0) + 1;
  return contador;
}, {});

const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];
const apariciones = contarPalabras(palabras);
console.log(apariciones);

//*Crear una función que tome un array de objetos y devuelva un array con solo los objetos que tengan una propiedad específica.
const tomarObjeto = (array, propiedad) => {
  return array.filter(objeto => objeto.hasOwnProperty(propiedad));
}

const objetos= [
  {celular: 'Samsung', modelo: 'S23 ULTRA'},
  {celular: 'Iphone', modelo: '14 pro max', funcion: 'isla dinamica' },
  {celular: 'Huawei', modelo: 'p50 pro'},
  {celular: 'Xiaomi', modelo: '12 Ultra', funcion: 'camara onmivision'},
];

const objetosConmodelo = tomarObjeto(objetos, 'modelo')
console.log(objetosConmodelo);

//*Crear una función que tome un array de strings y devuelva un array con las mismas palabras, pero en orden alfabético
const ordenarAlfabeticamente = (alfabetico) => {
  return alfabetico.sort((a, b) => a.localeCompare(b));
}
const vocabulario = ["Zapato", "telefono", "gasolina", "avion", "aguapanela"];
const vocabularioOrdenado = ordenarAlfabeticamente(vocabulario);
console.log(vocabularioOrdenado);

//*Crear una función que tome dos objetos y devuelva un objeto con las propiedades de ambos objetos.
const devolverObjeto = (objeto1, objeto2) => {
  return {...objeto1, ...objeto2};
}
const objeto1 = {carrera: "ingeneria en Software", semestres: "10 semestres"};
const objeto2 = {universidad: "Universidad Cooperativa de Colombia", años: "5 años"};
const objetoCombinado = devolverObjeto (objeto1 , objeto2);
console.log(objetoCombinado);

//*Crear una función que tome un array de números y devuelva la suma de todos los números.
const sumarNumeros = (numeros) => {
  return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}
const numero = [43, 64, 65, 23, 54];
const suma = sumarNumeros (numero);
console.log(suma);

//*Crear una función que tome un array de números y devuelva un array con los mismos números, pero multiplicados por un valor dado.
const numerosMultiplicados = (numeros, multiplicacion) => {
  return numeros.map(numeros => numeros * multiplicacion);
}
const numers = [44, 65, 87];
const multiplication = 3;
const multiplicar = numerosMultiplicados (numers, multiplication);
console.log(multiplicar);

//*Crear una función que tome una cadena de texto y devuelva la misma cadena en orden inverso.
const invertirTexto = (cadena) =>{
  return cadena.split('').reverse('').join('');
}
const cadena = 'tamales';
const textoInvertido = invertirTexto (cadena);
console.log(textoInvertido);

//*Crear una función que tome un objeto y devuelva un array de sus claves.
const clavesObjeto = (objeto) => {
  return Object.keys(objeto);
}
const unObjeto = {Portatil: "Acer", SistemaOperativo: "Windows 10", RAM: "4GB", Procesador: "Core i5" }
const objetoClaves = clavesObjeto(unObjeto);
console.log(unObjeto);