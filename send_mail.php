<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Cargar PHPMailer autoload
require 'vendor/autoload.php';

// Configurar instancia de PHPMailer
$mail = new PHPMailer(true);

try {
    // Configurar servidor SMTP
    $mail->isSMTP();
    $mail->Host = 'mail.ultradeeptech.com';
    $mail->SMTPAuth = true;
    $mail->Username = ' contact@ultradeeptech.com'; // Reemplaza con tu nombre de usuario SMTP
    $mail->Password = 'M94YMNexLntRrft'; // Reemplaza con tu contraseña SMTP
    $mail->SMTPSecure = 'ssl'; // O 'tls' si es necesario
    $mail->Port = 465; // Puerto SMTP

    // Configurar remitente y destinatario
    $mail->setFrom($_POST['email'], $_POST['name']);
    $mail->addAddress('maximilianoacri@gmail.com', 'Nombre destinatario'); // Reemplaza con el correo y nombre del destinatario

    // Configurar el contenido del correo
    $mail->isHTML(true);
    $mail->Subject = $_POST['subject'];
    $mail->Body = "Nombre: {$_POST['name']} <br>Email: {$_POST['email']} <br>Asunto: {$_POST['subject']} <br>Mensaje: {$_POST['message']}";

    // Enviar el correo electrónico
    $mail->send();
    echo 'success'; // Envío exitoso

} catch (Exception $e) {
    echo "error: {$mail->ErrorInfo}"; // Error en el envío
}
