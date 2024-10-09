/*5. Ejercicio JavaScript: Generador de números primos
Escribe un programa que solicite al usuario dos números y luego muestre todos los
números primos que hay entre esos dos números, incluyendo los extremos.
• Solicita al usuario que ingrese dos números enteros.
• Encuentra todos los números primos en el rango entre los dos números insertados,
incluyendo esos dos números.
• Ejemplo de entrada: Inserta el primer número: 10, Inserta el segundo número: 20.
• Salida esperada: Los números primos entre 10 y 20 son: 11, 13, 17, 19.
• Usar funciones, if y bucles for.
Un número primo es un número natural mayor que 1 que solo es divisible por sí mismo y
por 1. En otras palabras, un número primo tiene exactamente dos divisores: 1 y él mismo.
Por ejemplo, 2, 3, 5, 7, 11 son algunos ejemplos de números primos, ya que no tienen
otros divisores aparte de 1 y ellos mismos.
NOTAS:
Los números menores o iguales a 1 no son primos.
X % Y nos da el reto de una división X/Y. Si un número X solo es divisible por él mismo,
entonces no es divisible exacto por ningún número entero mayor que 1 y menor que él
mismo. Y por tanto el resto de X/Y es distinto de cero (si X/Y fuese una división exacta
tendría resto 0).
Ejemplo: 5 es número primo.
• Si dividimos 5/5, da cociente 1 y resto 0.
• Si dividimos 5/4 da cociente 1 y resto 0,25 (resto distinto de 0).
• Si dividimos 5/3 da cociente 1 y resto 0,67 (resto distinto de 0).
• Si dividimos 5/2 da cociente 2 y resto 0,5, (resto distinto de 0).
• Si dividimos 5/1 da cociente 5 y resto 0 */


    let num1 = parseInt(prompt("Introduce el primer número:"));
    let num2 = parseInt(prompt("Introduce el segundo número:"));

    for (let i = num1; i <= num2; i++) {
        let esPrimo = true;

        for (let j = 2; j < i; j++) {
            if (i % j == 0)
                esPrimo = false;

        }
        if(esPrimo)
            console.log(`El numero  ${i} es primo.`);
        
    }




