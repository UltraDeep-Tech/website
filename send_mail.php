<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Cargar PHPMailer autoload
require 'vendor/autoload.php';

// Cargar variables de entorno (si usas dotenv)
if (file_exists(__DIR__ . '/.env')) {
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();
}

// Configurar instancia de PHPMailer
$mail = new PHPMailer(true);

try {
    // Configurar servidor SMTP
    $mail->isSMTP();
    $mail->Host = getenv('SMTP_HOST');
    $mail->SMTPAuth = true;
    $mail->Username = getenv('SMTP_USERNAME');
    $mail->Password = getenv('SMTP_PASSWORD');
    $mail->SMTPSecure = getenv('SMTP_SECURE'); // 'ssl' o 'tls'
    $mail->Port = getenv('SMTP_PORT'); // 465 para 'ssl' o 587 para 'tls'

    // Habilitar depuración
    $mail->SMTPDebug = 3; // 3 para mensajes detallados de depuración
    $mail->Debugoutput = function($str, $level) { echo "$str\n"; };

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
    $mail->addAddress('maximilianoacri@gmail.com', 'Nombre destinatario');

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
