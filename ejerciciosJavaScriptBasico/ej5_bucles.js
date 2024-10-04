//Ejercicio 5 JS: Bucle for
//5.1. Bucle for
//• Imprimir los números del 20 al 30 en la consola.

console.log("Números del 20 al 30");

for (let i = 20; i < 31; i++) {
    console.log(i);
}

//• Imprimir los números pares del 30 al 50 en la consola.

console.log("Números pares del 30 al 50");

for (let i = 30; i < 51; i++) {
    if(i % 2 == 0)
    console.log(i);

}

//• Calcular la suma de los primeros 50 números naturales.

let suma = 0;
for (let i = 1; i < 51; i++) {
        suma+=i;

}

console.log("La suma total es: " + suma);

//• Imprimir la tabla de multiplicar del 8.

let tabla = 8;

for (let i = 1; i <= 10; i++) {
    let multiplicacion = 8;
    multiplicacion*=i;

  console.log(i + " x " + tabla + " = " + multiplicacion);

}

//• Imprimir los elementos de un array.

let asignaturas = ["DAW", "DIW", "DWEC", "DWES", "EMP", "ENG"];
for (let i = 0; i < asignaturas.length; i++) {
  console.log(asignaturas[i]);
}


//• Imprimir un patrón de asteriscos en forma de triángulo, con altura 9.

let altura = 9;
for (let i = 1; i <= altura; i++) {
  console.log("*".repeat(i));
}

//• Calcular la suma de los números pares del 1 al 50.

let sumPar = 0;
for (let i = 1; i < 51; i++) {
  if (i % 2 === 0) {
    sumPar += i;
  }
}
console.log("La suma total es: " + sumPar);

//• Imprimir los números del 30 al 20 en orden descendente.

for (let i = 30; i > 19; i--) {
    console.log(i);
  }

//• Calcular el promedio de un array de números. 

let num = [19, 30, 45, 22, 50];
let sumaNum = 0;

for (let i = 0; i < num.length; i++) {
    sumaNum += num[i];
}

let promedio = sumaNum / num.length;
console.log("El promedio es: " + promedio);




