/*3. Ejercicio JavaScript: Calculadora de IMC (Índice de
Masa Corporal)
Crea un programa que calcule el IMC de una persona a partir de su peso y altura.
• Solicita al usuario que inserte su peso en kilogramos y su altura en metros.
• Calcula el IMC dividiendo el peso entre la altura al cuadrado.
• Muestra el IMC calculado al usuario y su clasificación según la tabla de IMC.
• Ejemplo de entrada: Peso: 70kg, Altura: 1.75m.
• Salida esperada: IMC: 22.86, Clasificación: Normal.
• Usa if y else if en la clasificación de los rangos típicos de IMC según peso.
El Índice de Masa Corporal (IMC) se calcula dividiendo el peso de una persona en
kilogramos entre la altura en metros al cuadrado. El IMC proporciona una estimación de la
grasa corporal de una persona y se utiliza comúnmente como un indicador de salud. Los
rangos típicos de IMC son: Menor de 18.5: Bajo peso, 18.5 – 24.9: Peso normal, 25 – 29.9:
Sobrepeso y 30 o más: Obesidad. */


    let peso = parseFloat(prompt("Introduce tu peso en kg:"));
    let altura = parseFloat(prompt("Introduce tu altura en m:"));
    
    let imc = peso / (altura * altura);
    let clasificacion = "";

    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc < 24.9) {
        clasificacion = "Peso Normal";
    } else if (imc < 29.9) {
        clasificacion = "Sobrepeso";
    } else {
        clasificacion = "Obesidad";
    }

    console.log(`Tu IMC es ${imc.toFixed(2)}. Clasificación: ${clasificacion}`);
