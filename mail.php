<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recopila los datos del formulario
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["body"];

    // Dirección de correo a la que se enviará el mensaje
    $to = "contact@thecrufty.com  ";

    // Cabeceras del correo
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envía el correo electrónico
    mail($to, $subject, $message, $headers);

    // Redirige al usuario a una página de confirmación
    header("Location: https://google.com");
} else {
    // Si se intenta acceder directamente a este archivo, redirige al formulario
    header("Location: formulario-de-contacto.html");
}
?>
