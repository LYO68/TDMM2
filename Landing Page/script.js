/*Guardar los input como variables en la consola*/
var input_nombre = document.getElementById("nombre");
var input_email = document.getElementById("email");
var input_submit = document.getElementById("enviar");

console.log(input_nombre);
console.log(input_email);
console.log(input_submit);

/*registrar/guarda los datos cuando alguien aprete en enviar*/

input_submit.addEventListener("click", enviarFormulario);

function enviarFormulario(event) {
  // Validar con checkValidity() para que el navegador valide required y email
  if (!document.getElementById("formulario").checkValidity()) {
    // Si no pasa la validación, dejar que el navegador muestre mensajes y no continuar
    return;
  }

  event.preventDefault(); /* Evita que la pagina se recarge para tener los datos*/

  var valor_nombre = input_nombre.value.trim();
  var valor_email = input_email.value.trim();

  // Validación extra para el formato del email con regex
  var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor_email);

  if (!emailValido) {
    alert("Por favor ingresá un correo electrónico válido.");
    return;
  }

  console.log("click");
  console.log(valor_nombre);
  console.log(valor_email);

  // Obtener los placeholder y cambiar su contenido
  var placeholder_nombre = document.getElementById("nombre-placeholder");
  var placeholder_email = document.getElementById("email-placeholder");

  placeholder_nombre.innerHTML = valor_nombre;
  placeholder_email.innerHTML = valor_email;

  // Mostrar feedback
  var elemento_feedback = document.getElementById("feedback");
  elemento_feedback.classList.remove("oculto");

  // Desaparecer formulario
  var elemento_formulario = document.getElementById("formulario");
  elemento_formulario.classList.add("oculto");

  var overlay = document.getElementById("oscurecertodo");
  overlay.classList.remove("oculto");

  // Listener para el botón volver
  var volverBtn = document.getElementById("volver");
  volverBtn.addEventListener("click", function (event) {
    event.preventDefault();

    overlay.classList.add("oculto");
    elemento_feedback.classList.add("oculto");

    elemento_formulario.classList.remove("oculto");
    elemento_formulario.reset();
  });
}
