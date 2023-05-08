  /*Ejercicios
  Realizaran estos 5 ejercicios utilizando bucles con ES6, tomando la información a través del prompt y mostrando los resultados en un alert:*/
 
  /*1. Realizar una suma de los números ingresados por el usuario hasta que ingrese un número negativo.*/
  
  let btn_ej01 = document.getElementById('btn-ej01')

btn_ej01.addEventListener('click', () => {
    let numIngresado = parseInt(prompt('Digite un numero:'))
    let contador = 0
    while(numIngresado > 0){
        contador = contador + numIngresado
        numIngresado = parseInt(prompt('Digite un numero:'))
    }
    alert(`El resultado de la suma es: ${contador}`)
})
  
  /*2. Mostrar los números del 1 al 10 en orden ascendente y luego en orden descendente.*/
 
  let btn_ej02 = document.getElementById('btn-ej02')
  let btn_ej02_02 = document.getElementById('btn-ej02-02')
  
  btn_ej02.addEventListener('click', () => {
      for(let i = 1; i <= 10;  i++){
          alert(`Contador: ${i}`)
      }
  })
  btn_ej02_02.addEventListener('click', () => {
      for(let i = 10; i >= 0;  i--){
          alert(`Contador: ${i}`)
      }
  })
 
  /*3. Pedir al usuario una cantidad de números y mostrar cuántos son pares y cuántos impares.*/
 
  let btn_ej03 = document.getElementById('btn-ej03')

  btn_ej03.addEventListener('click', () => {
      let cantidadPar = 0
      let cantidadImpar = 0
      let numIngresado = parseInt(prompt('Digite un numero'))
  
      for(let i = 1; i <= numIngresado; i++){
          i % 2 == 0 ? cantidadPar++ : cantidadImpar++
      }
      alert(`Cantidad de Pares: ${cantidadPar} & cantidad Impar: ${cantidadImpar}`)
  })
 
  /*4. Realizar la tabla de multiplicar del número ingresado por el usuario.*/
 
  let btn_ej04 = document.getElementById('btn-ej04')

  btn_ej04.addEventListener('click', () => {
      let tablaMulti = parseInt(prompt('Digite la tabla a Multiplicar:'))
      for(let i = 1; i <= 10; i++){
          alert(`${tablaMulti} * ${i} = ${tablaMulti * i}`)
      }
  })
 
  /*5. Pedir al usuario un número y mostrar si es primo o no.*/

  let input_ej05 = document.getElementById('inp-ej05')
  let btn_ej05 = document.getElementById('btn-ej05')
  
  btn_ej05.addEventListener('click', () => {
      if(input_ej05.value <= 1){
          return alert(`El numero no es primo`)
      }
      for(let i = 2; i <=input_ej05.value; i++){
          if (input_ej05.value % i == 0){
              return alert(`El numero: ${input_ej05.value} no es primo`)
          } else {
              return alert(`El numero: ${input_ej05.value} es primo`)
          }
      }
  })
