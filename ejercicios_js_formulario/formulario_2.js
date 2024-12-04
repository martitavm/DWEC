document.addEventListener("DOMContentLoaded", function() { //Esta función se ejecutará cuando se cargue todo el contenido del documeto.
    const form = document.getElementById("form-registro"); //Accedemos a los elementos del html para poder usarlos posteriormente.
    const nombreUsuario = document.getElementById("nombre-usuario");
    const contraseña = document.getElementById("contraseña");
    const poblacion = document.getElementById("poblacion");

    const errorNombreUsuario = document.getElementById("error-nombre-usuario");
    const errorContraseña = document.getElementById("error-contraseña");
    const errorPoblacion = document.getElementById("error-poblacion");

    // Validamos los campos individualmente
    //Esta función valida si el campo nombre tiene al menos 8 carácteres sin espacio.
    const validarNombreUsuario = function() {
        const valor = nombreUsuario.value.trim();
        if (valor.length < 8 || valor.includes(" ")) {
            errorNombreUsuario.textContent = "El Nombre de usuario debe tener al menos 8 caracteres sin espacios.";
            return false;
        }
        errorNombreUsuario.textContent = "";
        return true;
    };
      //Esta función valida si el campo contraseña es válido según nuestra expresión regular mostrada a continuación.
    const validarContraseña = function() {
        const valor = contraseña.value;
        const regex = /^(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{6,10}$/;
        if (!regex.test(valor)) {
            errorContraseña.textContent = "La Contraseña debe tener entre 6 y 10 caracteres, al menos un dígito y una letra mayúscula.";
            return false;
        }
        errorContraseña.textContent = "";
        return true;
    };
    //Esta función valida si el campo población tiene una opción seleccionada.
    const validarPoblacion = function() {
        if (!poblacion.value) {
            errorPoblacion.textContent = "La población debe ser seleccionada.";
            return false;
        }
        errorPoblacion.textContent = "";
        return true;
    };

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // La función preventDefault() nos permite hacer las validaciones antes de que se envie el formulario, ya que si no la usásemos se enviaría sin comprobar nada.

        const esNombreValido = validarNombreUsuario();
        const esContraseñaValida = validarContraseña();
        const esPoblacionValida = validarPoblacion();

        if (esNombreValido && esContraseñaValida && esPoblacionValida) {
            alert("Formulario enviado correctamente.");
            form.submit(); // Enviamos el formulario al servidor al comprobar que todas las validaciones están correctas.
        }
    });

    nombreUsuario.addEventListener("input", validarNombreUsuario);
    contraseña.addEventListener("input", validarContraseña);
    poblacion.addEventListener("change", validarPoblacion);
});
