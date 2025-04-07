<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

header('Content-Type: application/json');

// Cargar variables de entorno
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Configuración SMTP
$smtpHost = $_ENV['SMTP_HOST'];
$smtpUsername = $_ENV['SMTP_USERNAME'];
$smtpPassword = $_ENV['SMTP_PASSWORD'];
$smtpPort = $_ENV['SMTP_PORT'];
$smtpSecure = $_ENV['SMTP_SECURE'];

$mail = new PHPMailer(true);

try {
    // Sanitizar inputs
    $firstName = filter_var($_POST['firstName'] ?? '', FILTER_SANITIZE_STRING);
    $lastName = filter_var($_POST['lastName'] ?? '', FILTER_SANITIZE_STRING);
    $position = filter_var($_POST['position'] ?? '', FILTER_SANITIZE_STRING);
    $companyName = filter_var($_POST['companyName'] ?? '', FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
    $phone = filter_var($_POST['phone'] ?? '', FILTER_SANITIZE_STRING);

    if (!$firstName || !$lastName || !$position || !$companyName || !$email || !$phone) {
        throw new Exception("Todos los campos son obligatorios.");
    }

    // Configuración PHPMailer
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;
    $mail->SMTPSecure = $smtpSecure;
    $mail->Port = $smtpPort;
    $mail->CharSet = 'UTF-8';

    $mail->setFrom($smtpUsername, 'Demo Request - Ultra Deep Tech');
    $mail->addAddress('contact@ultradeeptech.com', 'Ultra Deep Tech');
    $mail->addReplyTo($email, $firstName . ' ' . $lastName);

    $mail->isHTML(true);
    $mail->Subject = "New Demo Request from $firstName $lastName";
    $mail->Body = "
        <strong>Name:</strong> $firstName $lastName<br>
        <strong>Email:</strong> $email<br>
        <strong>Phone:</strong> $phone<br>
        <strong>Position:</strong> $position<br>
        <strong>Company:</strong> $companyName
    ";

    $mail->send();

    echo json_encode(['status' => 'ok']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
