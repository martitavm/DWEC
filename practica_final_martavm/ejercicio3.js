function rotar() { //Esta función nos permite ajustar un máximo tamaño a los valores del nivel de Rotado según que idioma se seleccione.
    const alfabeto = document.getElementById("alfabeto");
    const nivelRotado = document.getElementById("nivelRotado");

    if (alfabeto.value === "Castellano") {
        nivelRotado.value = 0; // Reiniciamos el valor del rotado
        nivelRotado.setAttribute("max", 27); // Máximo para castellano (27 letras incluyendo la Ñ)
    }

    if (alfabeto.value === "Ingles") {
        nivelRotado.value = 0; // Reiniciamos el valor del rotado
        nivelRotado.setAttribute("max", 26); // Máximo para inglés (26 letras)
    }
}

function descifrar(){
    const alfabeto = document.getElementById("alfabeto").value;  //Accedemos a los elementos del html y a sus valores para poder usarlos posteriormente.
    const textoCifrar = document.getElementById("textoCifrar").value.toUpperCase(); 
    const nivelRotado = parseInt(document.getElementById("nivelRotado").value); 
    const textoDescifrado = document.getElementById("textoDescifrado");

     // Definimos los alfabetos
    const castellano = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const ingles = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        
    // Seleccionamos el alfabeto según el idioma elegido.
    let alfabetoSeleccionado;

    if (alfabeto === "Castellano") {
        alfabetoSeleccionado = castellano;
    } else {
        alfabetoSeleccionado = ingles;
    }

    let maxRotado = alfabetoSeleccionado.length; // Asignamos el tamaño del alfabeto.
    let cadenaDescrifrada = "";

    // Recorremos cada letra del texto.
    for (let letra of textoCifrar) {
        if (alfabetoSeleccionado.includes(letra)) {
            // Encontramos el índice de la letra en el alfabeto.
            let indiceActual = alfabetoSeleccionado.indexOf(letra);
            // Calculamos el nuevo índice restando el nivel de rotado al índice actual.
            let nuevoIndice = indiceActual - nivelRotado;
        // Si el nuevo índice es negativo, lo ajustamos sumándole el tamaño del alfabeto (maxRotado).
        if (nuevoIndice < 0) {
            nuevoIndice += maxRotado;
        }
            // Añadimos la letra descifrada al resultado.
            cadenaDescrifrada += alfabetoSeleccionado[nuevoIndice];
        } else {
            // Si la letra no está en el alfabeto, la añadimos sin cambios.
            cadenaDescrifrada += letra;
        }
    }
    //Modificamos el elemento h2 con id textoDescifrado para que muestre el texto descifrado en color rojo.
    textoDescifrado.style.color = "red";
    textoDescifrado.textContent = cadenaDescrifrada;
    
}

