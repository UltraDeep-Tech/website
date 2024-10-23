// image-loader.js
class ImageLoader {
    static init() {
        // Observar imágenes para carga lazy
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        // Aplicar a todas las imágenes con clase 'lazy'
        document.querySelectorAll('img.lazy').forEach(img => {
            imageObserver.observe(img);
        });

        // Optimizar video de fondo
        const videoElement = document.querySelector('#hero video');
        if (videoElement) {
            // Solo cargar el video si no está en modo ahorro de datos
            if (!navigator.connection || !navigator.connection.saveData) {
                videoElement.play().catch(() => {
                    // Fallback a imagen si el video falla
                    const poster = videoElement.getAttribute('poster');
                    if (poster) {
                        videoElement.style.display = 'none';
                        const img = document.createElement('img');
                        img.src = poster;
                        img.className = 'hero-fallback-image';
                        videoElement.parentNode.insertBefore(img, videoElement);
                    }
                });
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', ImageLoader.init);