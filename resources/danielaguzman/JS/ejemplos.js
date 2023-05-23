const sum = (a, b) => a + b;
console.log(sum(6, 98));


const name = "Daniela";
console.log(`Hola ${name}, ¿como estas?`);


const person = {
    nombre: "Daniela",
    age: 24,
    country: "Colombia"
};

const { nombre, age } = person;
console.log(nombre);
console.log(age);


class persona {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`);
    }
}

const Person = new persona("Daniela", 24);
Person.sayHello();


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


const numbers = [1, 2, 3, 4];
console.log(...numbers);

const Persona = {
    nombres: "Daniela Guzman",
    años: 19,
    cuidad: "Colombia"
};

console.log({...Persona});


function greet(name = "amigo"){
    console.log(`Hola, ${name}!`);
}

greet();
greet("Daniela");