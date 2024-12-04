function mostrarNumerosCuriosos(){
    let num = 1;
    let contador = 0; //Inicializamos las variables para poder hacer uso de ellas posteriormente.
    const curiosos = []; //Creamos una lista donde almacenaremos los números curiosos.

    while (contador < 5){ //Este bucle comprueba que número es curioso y lo meterá en la lista si lo es.
       if (esCurioso(num)){ //En el caso de que sea curioso el número también aumentará la variable contador hasta que llegue a 5.
        curiosos.push(num);
        contador++;
       }
       num++;

    }

    alert(`Los 5 primeros números curiosos son: ${curiosos.join(", ")}`); //Por último muestro estos números almacenados en la lista a través de un alert.
}

// Función que verifica si un número es "curioso"
function esCurioso(numero) {
    let sumaCubos = 0; //Inicializamos la variable sumaCubos
    for (let digito of String(numero)) { //Creamos un for donde iteraremos con cada dígito del número convirtiéndolo en string.
        sumaCubos += Math.pow(Number(digito), 3); //Hacemos la suma de los cubos de cada dígito del número para comprobar si es curioso o no. (Convertimos los números otra vez a enteros con la funcion Number()).
    }
    return sumaCubos === numero; //Devolvemos True o False dependiendo de si es un número curioso ya hechas las anteriores comprobaciones.
}


// Llama a la función cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", mostrarNumerosCuriosos);