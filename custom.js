const menuButton = document.getElementById('bar');
const menubar = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    menubar.classList.toggle('responsive');
    menuButton.classList.toggle('cross');
});