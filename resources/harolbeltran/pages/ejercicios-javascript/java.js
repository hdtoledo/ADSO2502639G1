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

const contarPalabras = (palabras) => palabras.reduce((contador, palabra) => {
  contador[palabra] = (contador[palabra] || 0) + 1;
  return contador;
}, {});

const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];
const apariciones = contarPalabras(palabras);
console.log(apariciones);
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

const ordenarAlfabeticamente = (alfabetico) => {
  return alfabetico.sort((a, b) => a.localeCompare(b));
}
const vocabulario = ["Zapato", "telefono", "gasolina", "avion", "aguapanela"];
const vocabularioOrdenado = ordenarAlfabeticamente(vocabulario);
console.log(vocabularioOrdenado);
const devolverObjeto = (objeto1, objeto2) => {
  return {...objeto1, ...objeto2};
}
const objeto1 = {carrera: "ingeneria en Software", semestres: "10 semestres"};
const objeto2 = {universidad: "Universidad Cooperativa de Colombia", años: "5 años"};
const objetoCombinado = devolverObjeto (objeto1 , objeto2);
console.log(objetoCombinado);
const sumarNumeros = (numeros) => {
  return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}
const numero = [43, 64, 65, 23, 54];
const suma = sumarNumeros (numero);
console.log(suma);
const numerosMultiplicados = (numeros, multiplicacion) => {
  return numeros.map(numeros => numeros * multiplicacion);
}
const numers = [44, 65, 87];
const multiplication = 3;
const multiplicar = numerosMultiplicados (numers, multiplication);
console.log(multiplicar);
const invertirTexto = (cadena) =>{
  return cadena.split('').reverse('').join('');
}
const cadena = 'tamales';
const textoInvertido = invertirTexto (cadena);
console.log(textoInvertido);

const clavesObjeto = (objeto) => {
  return Object.keys(objeto);
}
const unObjeto = {Portatil: "Acer", SistemaOperativo: "Windows 10", RAM: "4GB", Procesador: "Core i5" }
const objetoClaves = clavesObjeto(unObjeto);
console.log(unObjeto);
