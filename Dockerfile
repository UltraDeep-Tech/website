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

# Copia php-fpm.conf desde el directorio raíz al directorio de configuración de PHP-FPM
COPY php-fpm.conf /usr/local/etc/php-fpm.conf

# Exponer el puerto 8080
EXPOSE 8080

# Comando por defecto para iniciar PHP-FPM
CMD ["php-fpm", "-F"]
