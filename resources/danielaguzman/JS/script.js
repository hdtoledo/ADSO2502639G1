function sumar(num1, num2) {
    return num1 + num2;
  }
  console.log(sumar(55,67))
  
  
  function contarcaracteres(cadena) {
    return cadena.length;
  }
  console.log(contarcaracteres("aguapanela"));
  
  
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
  
  
  function convertirmayus(cadena){
    return cadena.toUpperCase();
  }
  console.log(convertirmayus("tamal con chocolate"));
  
  
  function objectoclave(obj) {
      return Object.keys (obj);
    }
    const objecto = {
      nombre:"Tatiana",
      apellido: "Angarita",
      edad: 19,
    }
  console.log(objectoclave(objecto))