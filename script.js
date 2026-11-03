const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const logo = document.querySelector('.logo');

logo.addEventListener('click', (e) => {
    e.preventDefault(); // Evita o comportamento padrão do link (#)
    document.body.classList.toggle('dark-mode');
});
