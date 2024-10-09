/*7. Ejercicio JavaScript: Conversor de temperatura
Crea un programa que convierta una temperatura de grados Celsius a grados Fahrenheit o
viceversa, según la elección del usuario.
• Solicita al usuario que elija el tipo de conversión: de Celsius a Fahrenheit o de
Fahrenheit a Celsius.
• Solicita al usuario que ingrese la temperatura que desea convertir.
• Utiliza funciones para realizar las conversiones necesarias.
• Muestra el resultado de la conversión al usuario.
• Ejemplo de entrada: ¿Qué tipo de conversión deseas realizar? (1 para Celsius a
Fahrenheit, 2 para Fahrenheit a Celsius): 1, Inserta la temperatura en grados Celsius:
25
• Salida esperada: 25 grados Celsius equivalen a 77 grados Fahrenheit.
Para convertir de Celsius a Fahrenheit: Multiplica la temperatura en grados Celsius por
9/5 y luego suma 32. La fórmula es: °F = (°C × 9/5) + 32. Para convertir de Fahrenheit a
Celsius: Resta 32 de la temperatura en grados Fahrenheit y luego multiplica por 5/9. La
fórmula es: °C = (°F – 32) × 5/9. */




    let opcion = parseInt(prompt("¿Qué tipo de conversión deseas realizar? (1 para Celsius a Fahrenheit, 2 para Fahrenheit a Celsius):"));
    let temperatura = parseFloat(prompt("Introduce la temperatura que deseas convertir:"));

    if (opcion === 1) {
        let resultado = (temperatura * 9/5) + 32;
        console.log(`${temperatura} grados Celsius equivalen a ${resultado} grados Fahrenheit.`);
    } else if (opcion === 2) {
        let resultado =(temperatura - 32) * 5/9;
        console.log(`${temperatura} grados Fahrenheit equivalen a ${resultado} grados Celsius.`);
    } else {
        console.log("Opción no válida.");
    }
