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

    // Deshabilitar depuración
    $mail->SMTPDebug = 0; // No mostrar mensajes de depuración

    // Determinar si es un formulario de demo o el formulario de contacto original
    if (isset($_POST['form_type']) && $_POST['form_type'] === 'demo') {
        // Procesar formulario de demo
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
        $subject = "New Demo Request - Safety Shield Ultra";
        $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

        // Formato especial para el email de demo
        $mail->Body = "
            <h2>Nueva Solicitud de Demo</h2>
            <div style='margin-bottom: 20px;'>
                {$message}
            </div>
        ";
    } else {
        // Código original para el formulario de contacto
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
        $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
        $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

        // Formato original para el email de contacto
        $mail->Body = "Name: {$name} <br>Email: {$email} <br>Subject: {$subject} <br>Message: {$message}";
    }

    if (!$email) {
        throw new Exception('Email no válido');
    }

    // Configurar remitente y destinatario
    $mail->setFrom($email, $name);
    $mail->addAddress('contact@ultradeeptech.com', 'Ultra Deep Tech');

    // Configurar el contenido del correo
    $mail->isHTML(true);
    $mail->Subject = $subject;

    // Enviar el correo electrónico
    if ($mail->send()) {
        echo json_encode(array('status' => 'success', 'message' => 'The email was sent.'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Mailer Error: ' . $mail->ErrorInfo));
    }

} catch (Exception $e) {
    echo json_encode(array('status' => 'error', 'message' => $e->getMessage()));
}
?>