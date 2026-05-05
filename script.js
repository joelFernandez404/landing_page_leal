document.addEventListener('DOMContentLoaded', function() {
    // Toggle para menú móvil
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'white';
                navLinks.style.padding = '1rem';
                navLinks.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            }
        });
    }

    // Toggle para los servicios adicionales
    const toggleServicesBtn = document.getElementById('toggleServicesBtn');
    const extraServices = document.getElementById('extraServices');
    
    if (toggleServicesBtn && extraServices) {
        toggleServicesBtn.addEventListener('click', function() {
            if (extraServices.style.display === 'none' || extraServices.style.display === '') {
                extraServices.style.display = 'grid'; // Usamos grid porque así están configuradas las tarjetas
                toggleServicesBtn.innerHTML = 'Ocultar servicios <i class="ph ph-caret-up"></i>';
            } else {
                extraServices.style.display = 'none';
                toggleServicesBtn.innerHTML = 'Ver todos los servicios <i class="ph ph-caret-down"></i>';
            }
        });
    }

    // Navbar con efecto de sombra al hacer scroll
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
            } else {
                navbar.style.boxShadow = 'none';
                navbar.style.borderBottom = '1px solid #eeeeee';
            }
        });
    }
});
