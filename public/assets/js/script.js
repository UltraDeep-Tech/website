

class AnalyticsLoader {
    static init() {
        // Solo carga analytics después de la primera interacción del usuario
        const loadAnalytics = () => {
            const script = document.createElement('script');
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-LD1QMH1MRS';
            script.async = true;
            document.head.appendChild(script);
            
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
            gtag('config', 'G-LD1QMH1MRS', {
                'send_page_view': true,
                'anonymize_ip': true,
                'page_load_time': true
            });
        };

        // Eventos que desencadenarán la carga de analytics
        const events = ['scroll', 'click', 'touchstart'];
        const loadHandler = () => {
            loadAnalytics();
            events.forEach(event => window.removeEventListener(event, loadHandler));
        };

        // Agregar listeners
        events.forEach(event => window.addEventListener(event, loadHandler, { once: true }));

        // Cargar después de 3 segundos si no hay interacción
        setTimeout(loadHandler, 3000);
    }
}
