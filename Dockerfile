# Usa una imagen base de PHP-FPM en Alpine
FROM php:7.4-fpm-alpine

# Instala dependencias adicionales
RUN apk --no-cache add supervisor

# Crear el directorio del socket y log si no existen
RUN mkdir -p /var/run/php /var/log/php7

# Copiar los archivos del proyecto al contenedor
COPY . /var/www/html

# Copiar archivos de configuración
COPY php-fpm.conf /usr/local/etc/php-fpm.d/www.conf
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Instala Composer y las dependencias de PHP
RUN curl -sS -k https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --working-dir=/var/www/html

# Exponer el puerto 9000 (puerto por defecto para PHP-FPM)
EXPOSE 9000

# Comando de inicio de Supervisor
CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
