FROM php:7.4-apache

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Install git
RUN apt-get update && apt-get install -y git

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy your PHP files into the container
COPY . /var/www/html/

# Set the working directory
WORKDIR /var/www/html

# Install PHP dependencies
RUN composer install

# Update Apache configuration to listen on port 8080
RUN sed -i 's/Listen 80/Listen 8080/' /etc/apache2/ports.conf
RUN sed -i 's/:80/:8080/' /etc/apache2/sites-available/000-default.conf

# Expose port 8080
EXPOSE 8080

# Start Apache in the foreground
CMD ["apache2-foreground"]
