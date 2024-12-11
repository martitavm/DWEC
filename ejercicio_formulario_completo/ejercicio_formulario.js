// Función para validar el formulario
function validacion(event) {
    event.preventDefault(); // Evitamos que el formulario se envíe automáticamente para realizar validaciones primero.

    let errores = []; // Lista donde se almacenarán los mensajes de error encontrados durante las validaciones.
    let primerCampoErroneo = null; // Variable para identificar el primer campo con error y posicionar el cursor allí.
    const formulario = event.target; // Obtenemos el formulario

    // Función para verificar si un campo obligatorio está vacío
    function validarCampoVacio(campo, nombre) {
        if (!campo.value.trim()) {
            errores.push(`El campo "${nombre}" es obligatorio.`); // Añadimos un mensaje de error a la lista.
            if (!primerCampoErroneo) primerCampoErroneo = campo; // Si aún no hemos registrado un campo erróneo, lo asignamos.
        }
    }

    // Validar los campos marcados como obligatorios en el formulario
    validarCampoVacio(formulario.nombre, "Nombre"); // Validamos el campo "Nombre".
    validarCampoVacio(formulario.primerApellido, "Primer apellido"); // Validamos el campo "Primer apellido".
    validarCampoVacio(formulario.segundoApellido, "Segundo apellido"); // Validamos el campo "Segundo apellido".
    validarCampoVacio(formulario.telefono, "Teléfono"); // Validamos el campo "Teléfono".
    validarCampoVacio(formulario.email, "E-mail"); // Validamos el campo "E-mail".
    validarCampoVacio(formulario.contraseña, "Contraseña"); // Validamos el campo "Contraseña".

    // Validar que se ha seleccionado una opción en "sexo"
    if (!formulario.sexo.value) {
        errores.push("Debe seleccionar una opción en 'Sexo'."); 
        if (!primerCampoErroneo) primerCampoErroneo = formulario.sexo[0]; // Posicionamos el cursor en el primer botón del grupo.
    }

    // Validar que se ha seleccionado una opción en "estudios"
    if (!formulario.estudios.value) {
        errores.push("Debe seleccionar una opción en 'Nivel de estudios'.");
        if (!primerCampoErroneo) primerCampoErroneo = formulario.estudios[0]; // Posicionamos el cursor en el primer botón del grupo.
    }

    // Si hay errores, mostramos un mensaje de alerta con la lista de errores
    if (errores.length > 0) {
        alert(`Errores encontrados (${errores.length}):\n\n${errores.join("\n")}`); // Mostramos todos los errores mediante un alert().
        primerCampoErroneo.focus(); // Posicionamos el cursor en el primer campo que falló la validación.
    } else {
        alert("Datos enviados correctamente."); // Si todo está correcto, mostramos un mensaje de confirmación.
        formulario.reset(); // Limpiamos el formulario para que el usuario pueda volver a llenarlo desde cero.
    }
}

// Vinculamos la función de validación al evento "submit" del formulario
document.getElementById("miFormulario").addEventListener("submit", validacion);
