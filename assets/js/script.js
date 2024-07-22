document.addEventListener("DOMContentLoaded", function() {
    const titles = ["GenAI Red Teaming", "RAG systems Cybersecurity", "AI Observability & Traceability", "AI Governance, Risk & Compliance", "Innovative AI Solutions"];
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





