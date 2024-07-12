# Usa una imagen base de PHP con Nginx en Alpine
FROM php:8.0-fpm-alpine

# Instala Nginx
RUN apk --no-cache add nginx

# Copia los archivos de configuración de PHP-FPM
COPY ./php-fpm.conf /usr/local/etc/php-fpm.d/www.conf

# Copia el archivo de configuración de Nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copia los archivos de tu proyecto al directorio de trabajo del contenedor
COPY . /usr/share/nginx/html

# Exponer el puerto 8080
EXPOSE 8080

# Iniciar PHP-FPM y Nginx
CMD ["sh", "-c", "php-fpm && nginx -g 'daemon off;'"]

