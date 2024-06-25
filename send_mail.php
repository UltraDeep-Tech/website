<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Configuración SMTP
$smtpHost = 'mail.ultradeeptech.com';
$smtpUsername = 'contact@ultradeeptech.com';
$smtpPassword = 'M94YMNexLntRrft';
$smtpPort = 465;
$smtpSecure = 'ssl'; // 'ssl' o 'tls'

// Configurar instancia de PHPMailer
$mail = new PHPMailer(true);

try {
    // Configurar servidor SMTP
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;
    $mail->SMTPSecure = $smtpSecure;
    $mail->Port = $smtpPort;

    // Habilitar depuración si es necesario
    $mail->SMTPDebug = 3; // Detallado para mensajes de depuración
    $mail->Debugoutput = function($str, $level) { echo "$str\n"; };

    // Validar y sanitizar entradas (ejemplo básico)
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    if (!$email) {
        throw new Exception('Email no válido');
    }

    // Configurar remitente y destinatario
    $mail->setFrom($email, $name);
    $mail->addAddress('contact@ultradeeptech.com', 'Nombre destinatario');

    // Configurar el contenido del correo
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = "Nombre: {$name} <br>Email: {$email} <br>Asunto: {$subject} <br>Mensaje: {$message}";

    // Enviar el correo electrónico
    $mail->send();
    echo 'success'; // Envío exitoso

} catch (Exception $e) {
    echo "error: {$e->getMessage()}"; // Error en el envío
}
?>
