FROM php:7.4-apache

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy your PHP files into the container
COPY . /var/www/html/

# Set the working directory
WORKDIR /var/www/html

# Install PHP dependencies
RUN composer install

# Expose port 80
EXPOSE 80

# Start Apache in the foreground
CMD ["apache2-foreground"]
