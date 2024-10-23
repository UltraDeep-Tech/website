// lazy-loader.js
class LazyLoader {
    static loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    }

    static loadStyle(href) {
        return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            link.onload = resolve;
            link.onerror = reject;
            document.head.appendChild(link);
        });
    }
}

// Carga condicional de recursos
document.addEventListener('DOMContentLoaded', () => {
    // Cargar GLightbox solo si hay elementos que lo usan
    if (document.querySelector('[data-gallery]')) {
        LazyLoader.loadScript('assets/vendor/glightbox/js/glightbox.min.js')
            .then(() => LazyLoader.loadStyle('assets/vendor/glightbox/css/glightbox.min.css'))
            .then(() => {
                GLightbox({
                    selector: '[data-gallery]'
                });
            });
    }

    // Cargar formulario de contacto solo en la página de contacto
    if (document.querySelector('#contact-form')) {
        LazyLoader.loadScript('assets/vendor/php-email-form/validate.js');
    }
});