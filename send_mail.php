<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 3;                      // Habilitar salida de depuración detallada
    $mail->isSMTP();                           // Usar SMTP
    $mail->Host       = 'mail.ultradeeptech.com';  // Servidor SMTP
    $mail->SMTPAuth   = true;                  // Habilitar autenticación SMTP
    $mail->Username   = 'contact@ultradeeptech.com'; // Usuario SMTP
    $mail->Password   = 'M94YMNexLntRrft';      // Contraseña SMTP
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Habilitar encriptación SSL/TLS
    $mail->Port       = 465;                   // Puerto TCP para conexión SMTP

    // Destinatarios
    $mail->setFrom('contact@ultradeeptech.com', 'Mailer');
    $mail->addAddress('joe@example.net', 'Joe User'); // Agregar un destinatario

    // Contenido
    $mail->isHTML(true);                       // Establecer formato de email a HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
