<?php
// Cargar variables de entorno (si usas dotenv)
if (file_exists(__DIR__ . '/.env')) {
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();
}

$_ENV['SMTP_HOST'] = 'mail.ultradeeptech.com';
$_ENV['SMTP_USERNAME'] = 'contact@ultradeeptech.com';
$_ENV['SMTP_PASSWORD'] = 'M94YMNexLntRrft';
$_ENV['SMTP_PORT'] = 465;
$_ENV['SMTP_SECURE'] = 'ssl';

// Obtener y mostrar las variables de entorno
echo "SMTP_HOST: " . getenv('SMTP_HOST') . "<br>";
echo "SMTP_USERNAME: " . getenv('SMTP_USERNAME') . "<br>";
echo "SMTP_PASSWORD: " . getenv('SMTP_PASSWORD') . "<br>";
echo "SMTP_PORT: " . getenv('SMTP_PORT') . "<br>";
echo "SMTP_SECURE: " . getenv('SMTP_SECURE') . "<br>";
?>
