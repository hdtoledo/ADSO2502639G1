  /*Ejercicios:*/
  
  /*1. Solicita al usuario su edad y muestra un mensaje que indique si es mayor de edad o no.*/
 
  let ejercicio01 = document.getElementById('ejercicio01')
  let btn_ej01 = document.getElementById('btn-ej01')
  
  btn_ej01.addEventListener('click', () => {
      if(ejercicio01.value >= 18){
          alert('Usted es mayor de edad')
      } else {
          alert('Usted es menor de edad')
      }
  })

  /*2. Pide al usuario que ingrese un número y muestra un mensaje que indique si es positivo o negativo.*/
  
  let ejercicio02 = document.getElementById('ejercicio02')
let btn_ej02 = document.getElementById('btn-ej02')

btn_ej02.addEventListener('click', () => {
    ejercicio02.value > 0 ? alert('El numero es positivo') : alert('El numero es negativo')
})
  
  /*3. Solicita al usuario su nombre y su edad y muestra un mensaje que indique si es mayor de edad o no.*/
 
  let ejercicio03_name = document.getElementById('ejercicio03-name')
  let ejercicio03_age = document.getElementById('ejercicio03-age')
  
  let btn_ej03 = document.getElementById('btn-ej03')
  
  btn_ej03.addEventListener('click', () => {
      ejercicio03_age.value > 18 ? alert(`Hola ${ejercicio03_name.value}, usted es Mayor de edad`) : alert(`Hola ${ejercicio03_name.value}, usted es Menor de edad`)
  })
 
  /*4. Pide al usuario que ingrese un número y muestra un mensaje que indique si es par o impar.*/
 
  let ejercicio04 = document.getElementById('ejercicio04')
  let btn_ej04 = document.getElementById('btn-ej04')
  
  btn_ej04.addEventListener('click', () => {
      ejercicio04.value % 2 === 0 ? alert(`El numero ${ejercicio04.value} es par`) : alert(`El numero ${ejercicio04.value} es impar`)
  })
 
  /*5. Solicita al usuario su nombre y su género, y muestra un mensaje que indique si es hombre o mujer.*/

  let ejercicio05_name = document.getElementById('ejercicio05-name')
  let ejercicio05_genero = document.getElementById('ejercicio05-genero')
  
  let btn_ej05 = document.getElementById('btn-ej05')
  
  btn_ej05.addEventListener('click', () => {
      alert(`Hola ${ejercicio05_name.value}, eres ${ejercicio05_genero.value}`)
  })
