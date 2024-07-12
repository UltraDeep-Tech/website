# Usa una imagen base de PHP-FPM y Nginx en Alpine
FROM php:7.4-fpm-alpine

# Instala dependencias adicionales
RUN apk --no-cache add nginx supervisor

# Copia los archivos del proyecto al contenedor
COPY . /var/www/html

# Copia y configura Nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# Instala Composer y las dependencias de PHP
RUN curl -sS -k https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --working-dir=/var/www/html

# Exponer el puerto 8080
EXPOSE 8080

# Copia el archivo de configuración de Supervisor
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Comando de inicio de Supervisor
CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
