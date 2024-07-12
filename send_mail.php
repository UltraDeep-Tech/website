<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Establecer el encabezado de respuesta a JSON
header('Content-Type: application/json');

// Obtener la configuración SMTP de las variables de entorno
$smtpHost = getenv('SMTP_HOST');
$smtpUsername = getenv('SMTP_USERNAME');
$smtpPassword = getenv('SMTP_PASSWORD');
$smtpPort = getenv('SMTP_PORT');
$smtpSecure = getenv('SMTP_SECURE'); // 'ssl' o 'tls'

// Configurar instancia de PHPMailer
$mail = new PHPMailer(true);

try {
    // Verificar que los datos del formulario están presentes
    if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['subject']) || empty($_POST['message'])) {
        throw new Exception('All fields are required.');
    }

    // Imprimir los datos del formulario para depuración
    error_log(print_r($_POST, true));

    // Validar y sanitizar entradas (ejemplo básico)
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    if (!$email) {
        throw new Exception('Email no válido');
    }

    // Configurar servidor SMTP
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;
    $mail->SMTPSecure = $smtpSecure;
    $mail->Port = $smtpPort;

    // Deshabilitar depuración
    $mail->SMTPDebug = 2; // Mostrar mensajes de depuración detallados
    $mail->Timeout = 30; // Tiempo de espera en segundos
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    // Configurar remitente y destinatario
    $mail->setFrom($email, $name);
    $mail->addAddress('contact@ultradeeptech.com', 'Ultra Deep Tech');

    // Configurar el contenido del correo
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = "Name: {$name} <br>Email: {$email} <br>Subject: {$subject} <br>Message: {$message}";

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
