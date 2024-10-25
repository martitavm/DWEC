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

var colores = [
    "#ff0000", // Rojo
    "#00ff00", // Verde
    "#0000ff", // Azul
    "#ff00ff", // Magenta
    "#00ffff", // Cyan
    "#ff8000", // Naranja
    "#8000ff", // Morado
    "#00ff80", // Verde claro
    "#ff0080", // Rosa
    "#80ff00", // Verde lima
    "#0080ff", // Azul claro
    "#ffbf00", // Amarillo oscuro
    "#bf00ff", // Violeta oscuro
    "#00ffbf", // Turquesa
    "#bf00ff", // Púrpura
    "#00bfff", // Azul claro
    "#ff00bf", // Magenta oscuro
    "#80ff80", // Verde claro pastel
    "#ff80ff", // Rosa pastel
    "#80ffff"  // Cian claro
];

function mostrarFraseAleatoria() {
    let indice = Math.floor(Math.random() * frasesFrikis.length)
    return frasesFrikis[indice];
    }

function cambiarColor(){
    let indiceColor = Math.floor(Math.random() * colores.length)
    return colores[indiceColor];
    }

function fraseAleatoriaColor(){
let frase = mostrarFraseAleatoria();
document.getElementById('texto-informatica').innerHTML = frase;

let color = cambiarColor();
document.getElementById('texto-informatica').style.color = color;

let colorBoton = cambiarColor();
document.getElementById('ver-mas-boton').style.backgroundColor = colorBoton;

}