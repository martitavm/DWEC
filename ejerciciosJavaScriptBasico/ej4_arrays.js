/*4.1. Crea un programa que solicite al usuario ingresar una lista de números y luego
encuentre el número más grande en esa lista.
• Solicita al usuario que ingrese la cantidad de números que quiere introducir.
• Solicita al usuario que introduzca cada número uno por uno.
• Almacena estos números en un array.
• Escribe una función llamada findLargestNumber que tome un array de números
como entrada y devuelva el número más grande en el array.
• Dentro de la función, itera a través del array usando un bucle for para encontrar el
número más grande.
• Muestra el número más grande encontrado al usuario.
Asegúrate de que el programa utilice arrays para almacenar los números y la función para
encontrar el número más grande.
Ejemplo:
• Ingresa la cantidad de números: 5
• Ingresa el número 1: 10
• Ingresa el número 2: 25
• Ingresa el número 3: 7
• Ingresa el número 4: 18
• Ingresa el número 5: 12
• El número más grande es: 25 */

// Declaramos la función que buscará el número más grande del array.
function findLargestNumber(numeros) {
    let numMayor = numeros[0]; // Inicializamos la variable mayor con el primer numero del array.
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > numMayor) {
        numMayor = numeros[i]; // Esta variable se irá actualizando cada vez que encuentre un número mayor en las posiciones del array.
      }
    }
    return numMayor;
  }
  
  // Solicitamos al usuario que introduzca el numero de numeros que va a introducir
  let longitudArray = parseInt(prompt("Escribe cuantos numeros vas a introducir en el array"));
  
  // Inicializamos el array para almacenar los números
  let numeros = [];
  
  // Solicitamos al usuario que ingrese cada número y agregarlo al array
  for (let i = 0; i < longitudArray; i++) {
    let numero = parseFloat(prompt(`Escribe el número ${i + 1}:`));
    numeros.push(numero); // Agregar el número al array
  }
  
  // Llamamos a la función para encontrar el número más grande
  let mayor = findLargestNumber(numeros);
  
  // Mostramos el número más grande al usuario
  console.log("El número más grande es: " + mayor);