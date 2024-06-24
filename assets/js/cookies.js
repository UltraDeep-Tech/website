document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const denyButton = document.getElementById('deny-cookies');

    // Function to set a cookie
    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    // Function to get a cookie
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Function to check if cookies are accepted
    function cookiesAccepted() {
        return getCookie('cookiesAccepted') !== null;
    }

    // Check if the user has already made a choice
    if (!cookiesAccepted()) {
        cookieBanner.style.display = 'block';
    }

    // Handle accept button click
    acceptButton.addEventListener('click', function() {
        setCookie('cookiesAccepted', 'true', 365);
        cookieBanner.style.display = 'none';
    });

    // Handle deny button click
    denyButton.addEventListener('click', function() {
        setCookie('cookiesAccepted', 'false', 365);
        cookieBanner.style.display = 'none';
    });
});


