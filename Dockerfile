# Usa una imagen base de PHP con FPM
FROM php:7.4-fpm-alpine

# Instala Nginx y otras dependencias necesarias
RUN apk --no-cache add nginx supervisor

# Copia los archivos de tu proyecto al directorio de trabajo del contenedor
COPY . /usr/share/nginx/html

# Copia el archivo de configuración de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copia el archivo de configuración de supervisord
COPY supervisord.conf /etc/supervisord.conf

# Establecer permisos adecuados para send_mail.php
RUN chmod 644 /usr/share/nginx/html/send_mail.php

# Exponer el puerto 8080
EXPOSE 8080

# Iniciar Nginx y PHP-FPM
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
