document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("form-crear-cuenta");
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
    const validarNombre = function() {
      if (!nombre.value.trim()) {
        alert("El nombre no puede estar vacío.");
        nombre.focus();
        return false;
      }
      return true;
    };
  
    const validarCorreo = function() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(correo.value)) {
        alert("El correo no es válido.");
        correo.focus();
        return false;
      }
      return true;
    };
  
    const validarContraseña = function() {
      if (contraseña.value.length < 8 || !/\d/.test(contraseña.value)) {
        alert("La contraseña debe tener al menos 8 caracteres y un dígito.");
        contraseña.focus();
        return false;
      }
      return true;
    };
  
    const validarConfirmarContraseña = function() {
      if (contraseña.value !== confirmarContraseña.value) {
        alert("Las contraseñas no coinciden.");
        confirmarContraseña.focus();
        return false;
      }
      return true;
    };
  
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
      e.preventDefault();
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
  