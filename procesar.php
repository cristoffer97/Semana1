<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $correo = htmlspecialchars($_POST["correo"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    echo"<h1>Los datos que has introducido son;</h1>";
    echo "<h3>El nombre: $nombre</h3>";

    echo "<h3>Tu correo:, $correo</h3>";
    
    echo "<h3>Mensaje:, $mensaje</h3>";

}
?>