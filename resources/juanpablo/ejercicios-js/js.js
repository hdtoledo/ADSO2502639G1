//1

const arrayNumEven = numbers => numbers.filter(number => number % 2 === 0);

let numbers = [1, 7, 8, 10, 88, 28, 77 ,555];
console.log(arrayNumEven(numbers));


//2
const returnObject = ({nombre, edad, genero}) => [nombre, edad, genero];




const object = {
  nombre: "juan",
  edad: 18,
  genero: "Masculino"
 
};

const arrayPersona = returnObject(object);
console.log(arrayPersona); 


 //3
 const orderAbc = word => word.splint(").sort().join(");
 

 //4
const text = arrayText=> arrayText.split("").reverse().join("");


const hola = "holaaa"
console.log(text(hola));

//5
const arrayObject = (object ,propetyName) => object.filter(objects => objects.hasOwnProperty(propetyName))


const object1=[
  {nombre: "juan",
  edad: 18,
  genero: "Masculino"},
  {nombre: "juan",
  edad: 18,
  genero: "Masculino"},
  {nombre: "juan",
  genero: "Masculino"}
  
]
const resultado = arrayObject(object1, "edad")
console.log(resultado);

//6
const suma = numeros => numeros.reduce((valor1, valor2) => valor1 + valor2);
const total = [1, 88, 99 ,100];
console.log(suma(total));

//7
const numeros = [1, 2, 3, 7, 5];
const producto = numeros.reduce((acumulador, valorActual) => {
  return acumulador * valorActual;
}, );

console.log(producto);


//8
const combinarObj = (objeto1, objeto2) => ({...objecto1,...objecto2});
const objecto1 = { nombre: "Juan" , edad
                 :30};
const objecto2 = { ciudad: "Madrid", pais: "España"};
const objetocombinado = combinarObj(objecto1, objecto2);
console.log(objetocombinado);

//9
const numMayor = (num1 , num2) =>Math.max(num1, num2);

console.log(numMayor(100,3))
 ////


 console.log(numMayor(100,3))
//EJERCICIO 1

const parOImpar = num => num  % 2=== 0 ? true: false;

console.log(parOImpar(8))
//EJERCICIO 2


const valorAbsoluto = num =>Math.abs(num);

console.log(valorAbsoluto(-4))
//EJERCIO 3

const cadenaText0 = string =>string.length > 10 ? true: false;

console.log(cadenaText0(" Hueston, tenemos un problema"))
//EJERCICIO 4

const cadenaText1 = (string1, string2) =>string1.length == string2.length? true: false;

console.log(cadenaText("hola", "hola"))
//EJERCIO 5

const numEntre = num => num >= 20 && num <= 50 ? true: false;

console.log(numEntre(100))
//EJERCICIO 6

let  objecto = {
  name: "Roronoa",
  age: 18
};

const msjBienvenidad = objecto =>`Bienvenido ${objecto.name} al mundo real, tienes ${objecto.age}`

console.log(msjBienvenidad(objecto));
//EJERCIO 7

const sumaTotal = array => array.reduce((total, elemento) => total + elemento, 0)

let myArray0 = [7, 10, 8, 99]

console.log(sumaTotal(myArray0));
//EJERCIO 8


const posNeg = array => array.every(num => num > 0) ? true:false;

let myArray1 = [7, 10, 8, 99]

console.log(posNeg(myArray1));
//EJERCICIO 9

const cadenaText = array => array.every(num => num.length > 5) ? true:false;

let myArray = ["hisoka","feitan","pakunoda","shizuku"]

console.log(cadenaText(myArray));
//EJERCICIO 10


                       
const edad1 = prompt("Dime tu edad")

edad1 >= 18 ? alert("sos mayor") :alert("sos un menor");
//EJERCI0 1.1



num >= 0 ? alert("es positivo"): alert("es un falso postivo");
//EJERCI0 1.2

const nombre1 = prompt("cual es tu nombre")
const edad = prompt("Dime tu edad")

edad >= 18 ? alert(`sos mayor ${nombre}`) :alert(`sos un menor ${nombre},`);
//EJERCI0 1.3

const num = prompt("dame un numero imbecil")

num % 2===0 ? alert("par"): alert("impar");
//EJERCI0 1.4


const nombre = prompt("cual es tu nombre")
const genero = prompt("cual es genero extraterreste")


if (genero.toLowerCase() === "hombre") {
  alert(` eres un hombre ${nombre}!`);
} else {
  alert(`sos una feminazi ${nombre}!`);
}

//EJERCICI0 1.5