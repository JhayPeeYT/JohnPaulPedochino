// Wait for 3 seconds then fade out intro
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const intro = document.getElementById('intro');
        intro.style.opacity = '0';
        setTimeout(() => {
            intro.style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }, 1000); // match CSS transition duration
    }, 3000); // show intro for 3 seconds
});
