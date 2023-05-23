const NumMayor = (num1, num2) => {
    if(num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
  console.log(NumMayor(4, 9))

 
const espar = (num) => {
    return num % 2 === 0
};
  console.log(espar(7));
  console.log(espar(6));

  
  function valorAbsoluto(numero) {
    return Math.abs(numero);
  };
 
  console.log(valorAbsoluto(-5));
  console.log(valorAbsoluto(3));
  
  
  function tiene10Caracteres(cadena) {
    if (cadena.length > 10) {
      return true;
    } else {
      return false;
    }
  }
  console.log(tiene10Caracteres("enderdoscleomastoideo"));
  console.log(tiene10Caracteres("Hola"));
  
  function MismaLongitud(cadena1, cadena2) {
    if (cadena1.length === cadena2.length) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(MismaLongitud("Hola", "Mundo"));
  console.log(MismaLongitud("Hola", "Amigo"));
  
  
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

    
    const bienvenida = (obj) => {
      let name = obj.name
      let age = obj.age
  
      console.log(`Bienvenida ${name} usted tiene ${age}`)
  }
  
  let obje01 = {
      name: 'Maria Paula',
      age: 18
  }
  console.log(bienvenida(obje01))
  
    
    const sumArray = (array) => {
      let contador = 0
      for(let i = 0; i < array.length; i++){
          contador = array[i] + contador
      }
      return contador
  }
  let miArray01 = [1,2,3,4,5,6,7]
  console.log(sumArray(miArray01))
  
    
    const allPositive = (array) => {
      let state = true
      for(let i = 0; i < array.length; i++){
          if(array[i] > 0){
              state = true
          } else {
              state = false
          }
      }
      return state
  }
  
  let miArray02 = [1,2,3,4,5]
  let miArray03 = [1,2,3,-4,5]
  console.log(allPositive(miArray02))
  console.log(allPositive(miArray03))
  
    
    const cadenaTextoIgual = (array) => {
      let state = true
      for(let i = 0; i < array.length; i++){
          if(array[i].length > 5){
              state = true
          } else {
              state = false
              break
          }
      }
      return state
  }
  
  let miArray04 = ['Stella','Luis','Jorge','Meryda']
  let miArray05 = ['Paula','Gildardo','Camilo','Camila']
  
  console.log(cadenaTextoIgual(miArray04))
  console.log(cadenaTextoIgual(miArray05))
  