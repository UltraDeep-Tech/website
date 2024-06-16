document.addEventListener("DOMContentLoaded", function() {
    const text = "AI Development Company";
    let index = 0;
    const speed = 80;  // Velocidad de la escritura (ms)

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typewriter-title").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
