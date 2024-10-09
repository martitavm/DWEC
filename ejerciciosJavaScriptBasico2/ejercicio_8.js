/*8. Ejercicio JavaScript: Calcular factorial
Escribe un programa que calcule el factorial de un número entero no negativo ingresado
por el usuario.
El factorial de un número entero positivo ( n ), denotado como ( n! ), es el producto de
todos los enteros positivos desde 1 hasta ( n ). La fórmula para calcular el factorial es ( n!
= n x (n-1) x (n-2) x … x 2 x 1 ). Por ejemplo, el factorial de 5 (( 5! )) se calcula como ( 5 x 4 x 3
x 2 x 1 = 120 ).
• Define una función llamada calculateFactorial que tome un parámetro number que
represente el número del cual se calculará el factorial.
• Dentro de la función, utiliza un bucle for para calcular el factorial del número.
• Inicializa una variable result en 1, ya que el factorial de 0 y 1 es 1.
• Itera desde 1 hasta number, multiplicando cada número por result en cada iteración y
almacenando el resultado en result.
• Devuelve result al final de la función.
• Pide al usuario que ingrese un número entero no negativo.
• Convierte la entrada del usuario a un número entero utilizando la función parseInt.
• Llama a la función calculateFactorial con el número ingresado por el usuario y
muestra el resultado. */


function calcularFactorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

let numero = parseInt(prompt("Introduce un número entero no negativo:"));
let factorial = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${factorial}.`);



