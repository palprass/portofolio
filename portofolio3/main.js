const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');

    for (let link of navLinks) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 2500) {
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form default
    alert("Pesan Anda telah dikirim!"); // Menampilkan alert pop-up
    document.getElementById("contactForm").reset(); // Mereset form
});