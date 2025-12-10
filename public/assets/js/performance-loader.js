// performance-loader.js
class PerformanceLoader {
    static init() {
        this.deferNonCriticalStyles();
        this.initializeIntersectionObserver();
        this.optimizeThirdPartyScripts();
    }

    static deferNonCriticalStyles() {
        // Cargar estilos no críticos después de la carga principal
        const nonCriticalStyles = [
            'assets/vendor/aos/aos.css',
            'assets/vendor/swiper/swiper-bundle.min.css'
        ];

        window.addEventListener('load', () => {
            nonCriticalStyles.forEach(href => {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = href;
                document.head.appendChild(link);
            });
        });
    }

    static initializeIntersectionObserver() {
        // Inicializar AOS solo cuando sea necesario
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !window.AOS) {
                    import('assets/vendor/aos/aos.js')
                        .then(() => {
                            AOS.init({
                                duration: 1000,
                                once: true
                            });
                        });
                }
            });
        });

        document.querySelectorAll('[data-aos]').forEach(element => {
            observer.observe(element);
        });
    }

    static optimizeThirdPartyScripts() {
        // Cargar scripts de terceros de manera eficiente
        window.addEventListener('load', () => {
            setTimeout(() => {
                // Cargar scripts no críticos aquí
                this.loadScript('assets/vendor/swiper/swiper-bundle.min.js')
                    .then(() => {
                        // Inicializar Swiper si es necesario
                        if (document.querySelector('.swiper')) {
                            new Swiper('.swiper', {
                                // Configuración de Swiper
                            });
                        }
                    });
            }, 2000);
        });
    }

    static loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => PerformanceLoader.init());