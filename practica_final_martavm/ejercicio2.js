function validarFormulario(event) {
    
    event.preventDefault(); // La función preventDefault() nos permite hacer las validaciones antes de que se envie el formulario, ya que si no la usásemos se enviaría sin comprobar nada.

    const contraseña1 = document.getElementById("nuevaContraseña"); //Accedemos a los elementos del html para poder usarlos posteriormente.
    const contraseña2 = document.getElementById("confirmarContraseña");
    const indicio = document.getElementById("indicioContraseña");

    // Validamos la contraseña
    const regexContraseña = /^[A-Z][A-Za-z\d]{5,}$/; //Comprobamos si tiene una mayúscula inicial, al menos 6 caracteres y un dígito.
    if (!regexContraseña.test(contraseña1.value)) { //Si no es válida la contraseña dada saldrá un alert con ese mensaje.
        alert("La contraseña debe empezar por una letra mayúscula, tener un mínimo de 6 caracteres y contener, al menos, un dígito.");
        contraseña1.focus(); //Usamos focus() para poner el cursor dentro del campo contraseña. (Hacemos lo mismo en las demás validaciones)
        contraseña1.select(); //Usamos select() para resaltar el texto dentro del campo contraseña. (Hacemos lo mismo en las demás validaciones)
        return false; //Devuelve false para detener el proceso y evitar que el formulario se envíe.(Esto sucede en las demás validaciones)
    }

    // Validamos coincidencia de contraseñas
    if (contraseña1.value !== contraseña2.value) { /*Aquí comprobamos que la contraseña escrita anteriormente sea 
                                                   la misma que en el campo confirmarContraseña.*/
        alert("Las contraseñas escritas no coinciden. Vuelve a intentarlo.");
        contraseña2.focus();
        contraseña2.select(); 
        return false;
    }

    // Validamos que el indicio no contenga la contraseña
    if (indicio.value.includes(contraseña1.value)) { //Aquí comprobamos que el texto introducido en el campo indicioContraseña no contenga la contraseña.
        alert("El indicio de contraseña no puede contener la contraseña.");
        indicio.focus();
        indicio.select();
        return false;
    }

    alert("Formulario válido. Enviando...");
    event.target.submit(); //Una vez hechas todas las validaciones, hacemos el submit() manualmente para enviar el formulario.
}
