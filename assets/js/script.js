document.addEventListener("DOMContentLoaded", function() {
    const titles = ["AI Observability & Traceability", "RAG systems Cybersecurity", "Automated Governance, Risk & Compliance", "Generative AI Red Teaming", "Innovative AI Solutions" ];
    let titleIndex = 0;
    let charIndex = 0;
    const speed = 80;  // Velocidad de la escritura (ms)
    const delayBetweenTitles = 1500;  // Retardo entre títulos (ms)
    const typewriterTitle = document.getElementById("typewriter-title");

    function typeWriter() {
        if (charIndex < titles[titleIndex].length) {
            typewriterTitle.innerHTML += titles[titleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                charIndex = 0;
                titleIndex = (titleIndex + 1) % titles.length;
                typewriterTitle.innerHTML = "";
                typeWriter();
            }, delayBetweenTitles);
        }
    }

    typeWriter();

    const sitename = document.querySelector('.sitename');
    const logoImg = document.querySelector('.logo-img');
    
    sitename.classList.add('glow');
    logoImg.classList.add('glow');
});




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
