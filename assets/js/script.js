document.addEventListener("DOMContentLoaded", function() {
    const titles = ["AI Development Company", "Innovative AI Solutions", "AI Technology Experts"];
    let titleIndex = 0;
    let charIndex = 0;
    const speed = 80;  // Velocidad de la escritura (ms)
    const delayBetweenTitles = 1500;  // Retardo entre títulos (ms)

    function typeWriter() {
        if (charIndex < titles[titleIndex].length) {
            document.getElementById("typewriter-title").innerHTML += titles[titleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                charIndex = 0;
                titleIndex = (titleIndex + 1) % titles.length;
                document.getElementById("typewriter-title").innerHTML = "";
                typeWriter();
            }, delayBetweenTitles);
        }
    }

    typeWriter();
});



