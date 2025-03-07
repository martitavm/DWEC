/*4. Ejercicio JavaScript: Calculadora de descuentos
Crea un programa que calcule el precio final de un producto después de aplicarle un
descuento.
• Solicita al usuario que inserte el precio original del producto.
• Solicita al usuario que inserte el porcentaje de descuento a aplicar (por ejemplo, 10
para un descuento del 10%).
• Utiliza una función para calcular el precio final después de aplicar el descuento.
• Muestra el precio final al usuario, redondeado a dos decimales.
• Ejemplo de entrada:
Inserta el precio original del producto: 50
Inserta el porcentaje de descuento a aplicar: 20
• Salida esperada:
El precio final del producto después de aplicar un descuento del 20% es: 40 euros */

    let precioOriginal = parseFloat(prompt("Introduce el precio original del producto:"));
    let porcentajeDescuento = parseFloat(prompt("Introduce el porcentaje de descuento:"));

    let precioFinal = precioOriginal - (precioOriginal * (porcentajeDescuento / 100));
    console.log(`El precio final del producto después de aplicar un descuento del ${porcentajeDescuento}% es ${precioFinal.toFixed(2)} euros.`);
