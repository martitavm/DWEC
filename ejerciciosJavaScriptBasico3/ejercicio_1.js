/*1. Ejercicio JavaScript tipo examen: Mostrar frases
aleatorias mediante CSS */

const frasesFrikis = [
    "Hay 10 tipos de personas en el mundo: los que entienden binario y los que no.",
    "En caso de duda, reinicia.",
    "No soy un completo inútil, por lo menos sirvo de ejemplo de lo que no se debe hacer.",
    "La vida es como un algoritmo: a veces funciona, otras se cuelga.",
    "Si no está roto, no lo arregles.",
    "Yo no fallo, sólo encuentro errores inesperados.",
    "El hardware es lo que puedes patear, el software es lo que solo puedes maldecir.",
    "¿Ctrl+Alt+Supr? Ese es mi grito de guerra.",
    "No es un bug, es una característica.",
    "No soy antisocial, sólo soy compatible con TCP/IP."
];

function mostrarFraseAleatoria() {
let indice = Math.floor(Math.random() * frasesFrikis.length)
return frasesFrikis[indice];
}
