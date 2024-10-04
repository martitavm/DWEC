/*Ejercicio 2 JS: Estructuras de control
Condicionales (if, else if, else):
2.1. Escribe un programa que verifique si un número es positivo, negativo o cero e imprima
el resultado.
2.2. Crea un programa que determine si una persona es menor de edad, adulta o anciana
según su edad.
Bucles (for, while, do-while):
2.3. Utiliza un bucle for para imprimir los valores de i desde 0 hasta 4.
2.4. Utiliza un bucle while para imprimir los valores del contador desde 0 hasta 4.
2.5. Emplea un bucle do-while para imprimir los valores de x desde 0 hasta 4.
Interrupción de bucles (break, continue):
2.6. Crea un bucle for que se detenga cuando i sea igual a 3 usando la instrucción break.
2.7. Implementa un bucle for que salte la iteración cuando j sea igual a 2 usando la
instrucción continue.
Condicional (switch):
2.8. Convierte un número del 1 al 12 en el nombre del mes correspondiente. El programa
debe solicitar al usuario que ingrese un número del 1 al 12 y luego mostrar el nombre del
mes asociado.
Ejemplo:
• Ingresa un número del 1 al 12 para saber el mes correspondiente: 9
• El mes correspondiente al número 9 es: Septiembre*/



//2.1. Escribe un programa que verifique si un número es positivo, negativo o cero e imprima el resultado.

let num = 7;

if (num > 0) {
  console.log("El número es positivo.");
} else if (num < 0) {
  console.log("El número es negativo.");
} else {
  console.log("El número es cero.");
}

//2.2. Crea un programa que determine si una persona es menor de edad, adulta o anciana según su edad. 

let edad = 20;

if (edad < 18) {
  console.log("Es menor de edad.");
} else if (edad < 65) {
  console.log("Es adulta.");
} else {
  console.log("Es anciana.");
}

//2.3. Utiliza un bucle for para imprimir los valores de i desde 0 hasta 4.

for (let i = 0; i < 5; i++) {
    console.log(i);
  }

//2.4. Utiliza un bucle while para imprimir los valores del contador desde 0 hasta 4.

let contador = 0;
while (contador < 5) {
  console.log(contador);
  contador++;
}

//2.5. Emplea un bucle do-while para imprimir los valores de x desde 0 hasta 4. 

let x = 0;
do {
  console.log(x);
  x++;
} while (x < 5);

//2.6. Crea un bucle for que se detenga cuando i sea igual a 3 usando la instrucción break.

for (let i = 0; i < 5; i++) {
    if (i === 3) {
      break; // Se va a detener cuando i sea igual a 3.
    }
    console.log(i);
  }


//2.7. Implementa un bucle for que salte la iteración cuando j sea igual a 2 usando la instrucción continue.

for (let j = 0; j < 5; j++) {
    if (j === 2) {
      continue; // Salta esta iteración
    }
    console.log(j);
  }


/*2.8. Convierte un número del 1 al 12 en el nombre del mes correspondiente. El programa 
debe solicitar al usuario que ingrese un número del 1 al 12 y luego mostrar el nombre del mes asociado.
Ejemplo:
• Ingresa un número del 1 al 12 para saber el mes correspondiente: 9
• El mes correspondiente al número 9 es: Septiembre*/

let mes = 9; 

switch (mes) {
  case 1:
    console.log("Enero");
    break;
  case 2:
    console.log("Febrero");
    break;
  case 3:
    console.log("Marzo");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Mayo");
    break;
  case 6:
    console.log("Junio");
    break;
  case 7:
    console.log("Julio");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Septiembre");
    break;
  case 10:
    console.log("Octubre");
    break;
  case 11:
    console.log("Noviembre");
    break;
  case 12:
    console.log("Diciembre");
    break;
  default:
    console.log("Número no válido. Debe ser entre 1 y 12.");
}