# Usa una imagen base de PHP con FPM y Nginx
FROM php:7.4-fpm

# Instala extensiones necesarias
RUN docker-php-ext-install mysqli

# Instala Nginx
RUN apt-get update && apt-get install -y nginx

# Copia tus archivos PHP y HTML al contenedor
COPY . /var/www/html/

# Copiar el archivo de configuración de Nginx
COPY default.conf /etc/nginx/sites-available/default

# Configura el directorio de trabajo
WORKDIR /var/www/html

# Da los permisos correctos
RUN chmod -R 755 /var/www/html

# Exponer el puerto 8080 para Nginx
EXPOSE 8080

# Iniciar PHP-FPM y Nginx
CMD service nginx start && php-fpm -F
