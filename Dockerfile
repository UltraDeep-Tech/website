# Usa una imagen base de PHP con FPM
FROM php:7.4-fpm

# Instala extensiones necesarias
RUN docker-php-ext-install mysqli

# Instala git
RUN apt-get update && apt-get install -y git

# Instala Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copia tus archivos PHP al contenedor
COPY . /var/www/html/

# Configura el directorio de trabajo
WORKDIR /var/www/html

# Instala las dependencias de PHP
RUN composer install

# Configura PHP-FPM para escuchar en el puerto 9000
RUN sed -i 's/listen = 127.0.0.1:9000/listen = 9000/' /usr/local/etc/php-fpm.d/zz-docker.conf

# Exponer el puerto
EXPOSE 9000

# Comando por defecto para iniciar PHP-FPM
CMD ["php-fpm"]
