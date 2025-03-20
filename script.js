document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("cambiarColor");
  const colorOriginal = "linear-gradient(135deg, #1e3c72, #2a5298)";
  const nuevoColor = "linear-gradient(135deg, #ff7e5f, #feb47b)"; // Otro degradado
  let cambiado = false;

  function cambiarFondo() {
      document.body.style.background = cambiado ? colorOriginal : nuevoColor;
      cambiado = !cambiado; // Alternar estado
  }

  boton.addEventListener("click", cambiarFondo);
});
