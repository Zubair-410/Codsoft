document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.querySelector('.custom-navbar .nav');

    navToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.classList.toggle('is-active');
    });
});
