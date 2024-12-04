document.addEventListener("DOMContentLoaded", function(){ //Esta función se ejecutará cuando se cargue todo el contenido del documeto.
    const form = document.getElementById("form-crear-cuenta"); //Accedemos a los elementos del html para poder usarlos posteriormente.
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const contraseña = document.getElementById("contraseña");
    const confirmarContraseña = document.getElementById("confirmar-contraseña");
    const operacion = document.getElementById("operacion");
    const condiciones = document.getElementById("condiciones");
    const crearCuenta = document.getElementById("crear-cuenta");
  
    // Generamos números aleatorios para la operación
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const suma = num1 + num2;
  
    // Mostramos la operación en el campo correspondiente
    const campoOperacion = document.querySelector("label[for='operacion']");
    campoOperacion.textContent += ` ${num1} + ${num2} = ?`;
  
    // Validamos los campos individualmente
    //Esta función valida si el campo nombre no está vacío.
    const validarNombre = function() {
      if (!nombre.value.trim()) { //Utilizamos la función trim() para asegurarnos que no hay espacios en el nombre.
        alert("El nombre no puede estar vacío.");
        nombre.focus(); //Usamos focus() para poner el cursor dentro del campo nombre. (Hacemos lo mismo en las demás validaciones)
        return false;
      }
      return true;
    };
    //Esta función valida si el campo correo es válido según nuestra expresión regular mostrada a continuación.
    const validarCorreo = function() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(correo.value)) {
        alert("El correo no es válido.");
        correo.focus();
        return false;
      }
      return true;
    };
    //Esta función valida si el campo contraseña es válido.
    const validarContraseña = function() {
      if (contraseña.value.length < 8 || !/\d/.test(contraseña.value)) {
        alert("La contraseña debe tener al menos 8 caracteres y un dígito.");
        contraseña.focus();
        return false;
      }
      return true;
    };
    //Esta función valida si el campo confirmarContraseña es válido teniendo en cuenta si el campo contraseña y el campo confirmar contraseña tienen el mismo valor.
    const validarConfirmarContraseña = function() {
      if (contraseña.value !== confirmarContraseña.value) {
        alert("Las contraseñas no coinciden.");
        confirmarContraseña.focus();
        return false;
      }
      return true;
    };
    //Esta función valida si el campo operación está resuelto correctamente.
    const validarOperacion = function() {
      if (parseInt(operacion.value) !== suma) {
        alert("La respuesta a la operación matemática es incorrecta.");
        operacion.focus();
        return false;
      }
      return true;
    };
  
    // Habilitamos la casilla de condiciones
    condiciones.disabled = false;
  
    // Habilitamos el botón de envío si se aceptan las condiciones
    condiciones.addEventListener("change", function() {
      crearCuenta.disabled = !condiciones.checked;
    });
  
    // Validar el formulario completo al enviarlo
    form.addEventListener("submit", function(e) {
      e.preventDefault(); // La función preventDefault() nos permite hacer las validaciones antes de que se envie el formulario, ya que si no la usásemos se enviaría sin comprobar nada.
      if (
        validarNombre() &&
        validarCorreo() &&
        validarContraseña() &&
        validarConfirmarContraseña() &&
        validarOperacion()
      ) {
        alert("Formulario enviado correctamente.");
      }
    });
  });
  
