/*Ejercicios JavaScript básico I
1. Ejercicio 1 JS: Tipos de datos
Tipos de datos primitivos:
1.1. Declara una variable de tipo string y asígnale un mensaje de saludo. Luego, imprime
la variable en la consola.
1.2. Declara una variable de tipo number y asígnale tu edad. Luego, imprime la variable en
la consola.
1.3. Declara una variable de tipo boolean y asígnale true o false según tu preferencia.
Luego, imprime la variable en la consola.
1.4. Declara una variable de tipo null y otra de tipo undefined. Luego, imprime ambas
variables en la consola.
Tipos de datos no primitivos (objetos):
1.5. Crea un objeto que represente un artículo con propiedades
como name, price y category. Imprime el objeto en la consola.
1.6. Declara un array que contenga nombres de ciudades. Imprime el array en la consola.
Variables:
1.7. Declara una variable y asígnale tu color favorito. Luego, modifica la variable con otro
color e imprime ambos valores en la consola.
Declaración de variables:
1.8. Declara dos variables, una sin asignarle ningún valor y otra con el valor null. Imprime
ambas variables en la consola.
Alcance de las variables:
1.9. Crea dos variables, una dentro de una función y otra fuera de ella. Intenta acceder a
ambas variables desde dentro y fuera de la función, y observa los resultados en la
consola.
Reglas de nomenclatura de variables:
1.10. Declara variables con nombres que sigan las reglas de JavaScript y otras que no las
sigan. Imprime los nombres de las variables en la consola.
Operadores:
1.11. Utiliza diferentes operadores (+, -, *, /, %, ++, --) con variables que contengan
números. Imprime los resultados en la consola.
Strings:
1.12. Declara una variable con una cadena de texto de varias líneas usando caracteres de
escape (\n, \t). Imprime la cadena resultante en la consola.*/


// 1.1. Declara una variable de tipo string y asígnale un mensaje de saludo. Luego, imprime la variable en la consola.

let saludito = "Buenos días";
console.log(saludito);

//1.2. Declara una variable de tipo number y asígnale tu edad. Luego, imprime la variable en la consola.

let edad = 20;
console.log(edad);

//1.3. Declara una variable de tipo boolean y asígnale true o false según tu preferencia. Luego, imprime la variable en la consola.

let martita = true;
console.log(martita);

//1.4. Declara una variable de tipo null y otra de tipo undefined. Luego, imprime ambas variables en la consola.

let nulo = null;
let indefinido;
console.log(valorNull);
console.log(valorUndefined);

//1.5. Crea un objeto que represente un artículo con propiedades como name, price y category. Imprime el objeto en la consola.

let articulo = {
  name: "muñeca",
  price: 60,
  category: "Juguetes"
};
console.log(articulo);

//1.6. Declara un array que contenga nombres de ciudades. Imprime el array en la consola. Variables:

let ciudades = ["Cádiz", "Huelva", "Sevilla", "Jerez de la frontera"];
console.log(ciudades);

//1.7. Declara una variable y asígnale tu color favorito. Luego, modifica la variable con otro color e imprime ambos valores en la consola.

let miColorFavorito = "Rojo";
console.log(miColorFavorito);
miColorFavorito = "Negro";
console.log(miColorFavorito);

//1.8. Declara dos variables, una sin asignarle ningún valor y otra con el valor null. Imprime ambas variables en la consola. 

let variableSinValor;
let variableNull = null;
console.log(variableSinValor);
console.log(variableNull);

/*1.9. Crea dos variables, una dentro de una función y otra fuera de ella. Intenta acceder a ambas variables desde dentro y fuera de la función, y 
observa los resultados en la consola. Reglas de nomenclatura de variables:*/

let variableGlobal = "Hola, estoy afuera";

function funcionVariables() {
  let variableLocal = "Hola, estoy dentro";
  console.log(variableGlobal);
  console.log(variableLocal); 
}

funcionVariables();
console.log(variableGlobal);


//1.10. Declara variables con nombres que sigan las reglas de JavaScript y otras que no las sigan. Imprime los nombres de las variables en la consola. 

// Variables válidas
let $dinero = 500;
let _nombreCompleto = "Marta Villanueva";
let ciudadDeNacimiento = "Jerez de la frontera";

// Variables inválidas (Las comento para que no me den errores)
// let 1apellido = "Villanueva"; // No puede empezar con un número
// let nombre-Completo = "Marta Villanueva"; //No puede usar guiones medios
// let var = "Esta es una palabra reservada"; //No se puede usar una palabra reservada

console.log($dinero);
console.log(_nombreCompleto);
console.log(ciudadDeNacimiento);

// Imprimir variables incorrectas van a dar problemas si las descomento. 
// console.log(1apellido);
// console.log(nombre-Completo);
// console.log(var);

//1.11. Utiliza diferentes operadores (+, -, *, /, %, ++, --) con variables que contengan números. Imprime los resultados en la consola.

let num1 = 20;
let num2 = 5;
console.log(num1 + num2); // Suma
console.log(num1 - num2); // Resta
console.log(num1 * num2); // Multiplicación
console.log(num1 / num2); // División
console.log(num1 % num2); // Resto (módulo)
console.log(++num1); // Incremento
console.log(--num2); // Decremento

//1.12. Declara una variable con una cadena de texto de varias líneas usando caracteres de escape (\n, \t). Imprime la cadena resultante en la consola.

let cadenaVariasLineas = "Antes muerta que sencilla.\n\tAy, qué sencilla.\n\tAy, qué sencilla";
console.log(cadenaVariasLineas);