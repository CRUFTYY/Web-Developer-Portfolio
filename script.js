document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", function() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const body = document.getElementById("body").value;

        const data = `name=${name}&email=${email}&subject=${subject}&body=${body}`;

        // Realiza una solicitud AJAX para enviar los datos del formulario a mail.php
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "mail.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onload = function() {
            if (xhr.status === 200) {
                // Redirige a una página de confirmación
                window.location = "confirmacion.html";
            } else {
                // Maneja errores
                alert("Error al enviar el formulario.");
            }
        };

        xhr.send(data);
    });
});
