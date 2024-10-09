/*1. Ejercicio JavaScript: Calculadora de gastos de viaje
Escribe un programa que calcule el coste total de un viaje, incluyendo los gastos de
alojamiento, alimentación y entretenimiento.
• Solicita al usuario que ingrese los gastos estimados para cada categoría.
• Calcula el coste total sumando todos los gastos.
• Muestra el coste total al usuario.
• Ejemplo de entrada: Gastos de alojamiento: 200.50€, Gastos de alimentación:
150.75€, Gastos de entretenimiento: 100.75€.
• Salida esperada: El coste total del viaje es 452.00€.
• Tipo de dato: floating point. Precisión: 2 decimales.*/


    let alojamiento = parseFloat(prompt("Introduce los gastos de alojamiento:"));

    let alimentacion = parseFloat(prompt("Introduce los gastos de alimentación:"));

    let entretenimiento = parseFloat(prompt("Introduce los gastos de entretenimiento:"));

    let costeTotal = alojamiento + alimentacion + entretenimiento;
    console.log(`El coste total del viaje es ${costeTotal.toFixed(2)}€.`);

