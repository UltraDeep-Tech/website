<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recolectar los datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Validar los datos (puedes agregar más validaciones según sea necesario)
    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
        // Dirección de correo a donde se enviará el mensaje
        $to = "contact@ultradeeptech.com";
        $headers = "From: $email" . "\r\n" .
                   "Reply-To: $email" . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();
        
        // Enviar el correo
        if (mail($to, $subject, $message, $headers)) {
            echo "success";
        } else {
            echo "error";
        }
    } else {
        echo "validation error";
    }
} else {
    echo "invalid request";
}
?>
