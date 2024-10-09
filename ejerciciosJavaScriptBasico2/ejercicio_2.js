/*2. Ejercicio JavaScript: Calculadora edad canina
Crea un programa que convierta la edad de un perro a años humanos.
• Solicita al usuario que indique la edad de su perro en años.
• Calcula la edad del perro en años humanos multiplicando la edad del perro por 7.
• Muestra la edad del perro en años humanos al usuario.
• Ejemplo de entrada: Edad del perro: 5 años.
• Salida esperada: La edad del perro en años humanos es 35 años.
La forma común de estimar la edad canina es multiplicar la edad del perro por 7. Esto se
basa en la idea de que un año de vida de un perro equivale aproximadamente a siete años
de vida humana en términos de desarrollo y envejecimiento.*/

    let edadPerro = parseInt(prompt("Introduce la edad de tu perro:"));
    let edadHumana = edadPerro * 7;
    console.log("La edad de tu perro en años humanos es " + edadHumana + " años.");
