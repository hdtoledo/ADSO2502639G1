
    //Arrow function
const sum = (a, b) => a + b;
console.log(sum(6, 98));

//Template literals
const name = "Tatiana";
console.log(`Hola ${name}, ¿como estas?`);

//Desestructuracion
const person = {
    nombre: "Tatiana",
    age: 19,
    country: "Colombia"
};

const { nombre, age } = person;
console.log(nombre);
console.log(age);

//Clases
class persona {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`);
    }
}

const Person = new persona("Tatiana", 19);
Person.sayHello();

//Promesas
function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Datos recuperados correctamente. ");
        }, 2000);
    });
}

fetchData()
.then(response => console.log(response))
.catch(error => console.error(error));

//Spread operator
const numbers = [1, 2, 3, 4];
console.log(...numbers);

const Persona = {
    nombres: "Karol Tatiana",
    años: 19,
    cuidad: "Colombia"
};

console.log({...Persona});

//Default parameters
function greet(name = "amigo"){
    console.log(`Hola, ${name}!`);
}

greet();
greet("Karol");