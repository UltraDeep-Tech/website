<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Configuración SMTP para Hostinger
$smtpHost = 'smtp.hostinger.com';
$smtpUsername = 'contact@ultradeeptech.com';
$smtpPassword = 'aH33v>^Gy!';
$smtpPort = 587;
$smtpSecure = 'tls';

$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = 0; // o 2 para debug
    $mail->Debugoutput = 'html';

    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;
    $mail->SMTPSecure = $smtpSecure;
    $mail->Port = $smtpPort;
    $mail->CharSet = 'UTF-8';

    // Sanitizar datos
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    if (!$email) {
        throw new Exception('Email no válido');
    }

    // Remitente y destinatario
    $mail->setFrom($smtpUsername, 'Formulario Web - Contact Page');
    $mail->addReplyTo($email, $name);
    $mail->addAddress('contact@ultradeeptech.com', 'Ultra Deep Tech');

    // Contenido
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = "
        <strong>Nombre:</strong> {$name} <br>
        <strong>Email:</strong> {$email} <br>
        <strong>Asunto:</strong> {$subject} <br>
        <strong>Mensaje:</strong> <br>{$message}
    ";

    $mail->send();
    echo json_encode(['status' => 'success', 'message' => 'El mensaje fue enviado correctamente.']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>
