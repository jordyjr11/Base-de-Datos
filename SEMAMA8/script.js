// Mostrar alerta personalizada
function mostrarAlerta() {
  alert("¡Gracias por visitar nuestra página!");
}

// Validación del formulario
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevenir envío

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  let esValido = true;

  [nombre, correo, mensaje].forEach((campo) => {
    if (!campo.value.trim()) {
      campo.classList.add("is-invalid");
      esValido = false;
    } else {
      campo.classList.remove("is-invalid");
    }
  });

  if (esValido) {
    alert("Formulario enviado correctamente. ¡Gracias por contactarnos!");
    this.reset();
  }
});