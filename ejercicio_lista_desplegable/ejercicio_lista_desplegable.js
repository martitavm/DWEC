// Objeto con provincias y municipios (municipios como una lista de listas)
const datos = {
    provincias: ["Almería", "Cádiz", "Córdoba", "Granada", "Huelva", "Jaén", "Málaga", "Sevilla"],
    municipios: [
        ["Almería", "Roquetas de Mar", "El Ejido", "Níjar", "Adra"], 
        ["Cádiz", "Jerez de la Frontera", "Algeciras", "San Fernando", "Chiclana"], 
        ["Córdoba", "Lucena", "Puente Genil", "Montilla", "Priego de Córdoba"], 
        ["Granada", "Motril", "Almuñécar", "Baza", "Loja"],
        ["Huelva", "Lepe", "Almonte", "Moguer", "Isla Cristina"], 
        ["Jaén", "Linares", "Úbeda", "Andújar", "Martos"], 
        ["Málaga", "Marbella", "Fuengirola", "Vélez-Málaga", "Torremolinos"], 
        ["Sevilla", "Dos Hermanas", "Alcalá de Guadaíra", "Utrera", "Mairena del Aljarafe"],
    ]
};

let provinciaSelect = document.getElementById("provincia");  //Accedemos a los elementos del html para poder usarlos posteriormente.
let municipioSelect = document.getElementById("municipio");
let formulario = document.getElementById("formulario");

// Función para aañdir las opciones del select de provincias
function cargarProvincias() {
    for (let i = 0; i < datos.provincias.length; i++) {
        let provincia = datos.provincias[i];
        let option = document.createElement("option"); //Creamos los elementos option para añadir cada una de las provincias.
        option.value = i; // Usamos el índice como valor
        option.textContent = provincia;
        provinciaSelect.appendChild(option); //Añadimos este elemento option a la lista del select de provincias.
    }
}

// Función para mostrar los municipios según que provincia hayamos seleccionado.
function mostrarMunicipios() {
    let indiceProvincia = provinciaSelect.value;
    municipioSelect.innerHTML = '<option value="" disabled selected>Seleccionar municipio</option>'; //Reseteamos el contenido del select de municipios.
    
    if (indiceProvincia) {
        let municipios = datos.municipios[indiceProvincia];  //Hacemos una lista con los municipios de la provincia seleccionada.
        for (let i = 0; i < municipios.length; i++) {
            let municipio = municipios[i];  //Recorremos esa lista de municipios creando los elementos option que sean necesarios.
            let option = document.createElement("option");
            option.value = municipio;
            option.textContent = municipio;
            municipioSelect.appendChild(option); //Añadimos este elemento option a la lista del select de municipios.
        }
    }
}

// Función para validar el formulario
function validarFormulario(event) {
    event.preventDefault();  // La función preventDefault() nos permite hacer las validaciones antes de que se envie el formulario, ya que si no la usásemos se enviaría sin comprobar nada.

    if (!provinciaSelect.value) { //Si no hemos seleccionado un valor en el select de provincia saltará ese alert.
        alert("Debe seleccionar una provincia.");
        provinciaSelect.focus(); //Usamos focus() para poner el cursor dentro del select. (Hacemos lo mismo en las demás validaciones)
        return;
    }

    if (!municipioSelect.value) { //Si no hemos seleccionado un valor en el select de municipio saltará ese alert.
        alert("Debe seleccionar un municipio.");
        municipioSelect.focus();
        return;
    }

    alert("Formulario enviado correctamente.");
    event.target.submit(); //Una vez hechas todas las validaciones, hacemos el submit() manualmente para enviar el formulario.

}

// Llamadas eventos
document.addEventListener("DOMContentLoaded", cargarProvincias);
provinciaSelect.addEventListener("change", mostrarMunicipios);
formulario.addEventListener("submit", validarFormulario);
