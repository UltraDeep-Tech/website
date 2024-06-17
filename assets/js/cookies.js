document.addEventListener('DOMContentLoaded', (event) => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');

    // Verificar si el usuario ya ha aceptado las cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'flex';
    }

    acceptCookiesButton.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
    });
});
