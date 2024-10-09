/*6. Ejercicio JavaScript: Generador de secuencia Fibonacci
Crea un programa que genere los primeros N términos de la secuencia de Fibonacci,
donde N es un número insertado por el usuario.
• Solicita al usuario que ingrese el número de términos de la secuencia Fibonacci que
desea generar.
• Utiliza una función para calcular la secuencia de Fibonacci.
• Muestra los primeros N términos de la secuencia Fibonacci al usuario.
• Ejemplo de entrada: Inserta el número de términos de la secuencia Fibonacci: 8.
• Salida esperada: Los primeros 8 términos de la secuencia Fibonacci son: 0, 1, 1, 2, 3,
5, 8, 13.
• Usar funciones, if, bucles for, etc.
La secuencia de Fibonacci es una serie de números en la que cada número es la suma de
los dos números precedentes. Comienza con 0 y 1, y luego cada número subsiguiente es
la suma de los dos números anteriores. La secuencia comienza así: 0, 1, 1, 2, 3, 5, 8, 13,
21, 34, y así sucesivamente. */

let n = parseInt(prompt("Introduce el número de términos de la secuencia Fibonacci:"));

let fibonacci = [0, 1];  // Inicializo la secuencia de fibonacci con sus dos primeros términos

if (n === 1) {
    console.log("El primer término de la secuencia de fibonacci es 0");
} else if (n === 2) {
    console.log("Los primeros dos términos de la secuencia de fibonacci son 0, 1");
} else {
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]); 
    }

    console.log(`Los primeros ${n} términos de la secuencia Fibonacci son: ${fibonacci.join(", ")}`);
}