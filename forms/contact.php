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

    // Deshabilitar depuración
    $mail->SMTPDebug = 0; // No mostrar mensajes de depuración

    // Validar y sanitizar entradas
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    if (!$email) {
        throw new Exception('Email no válido');
    }

    // Configurar remitente y destinatario
    $mail->setFrom($email, $name);
    $mail->addAddress('contact@ultradeeptech.com', 'Ultra Deep Tech');

    // Configurar el contenido del correo
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = "Name: {$name} <br>Email: {$email} <br>Subject: {$subject} <br>Message: {$message}";

    // Enviar el correo electrónico
    $mail->send();
    echo 'The email was sent.'; // Envío exitoso

} catch (Exception $e) {
    echo "error: {$e->getMessage()}"; // Error en el envío
}
?>

