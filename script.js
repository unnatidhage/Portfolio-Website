/**
 * script.js
 * Focus: Navigation (JavaScript / User Flow) - effective use of JS
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle Functionality
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            // Toggles the 'active' class defined in CSS
            navbar.classList.toggle('active');
            // Change icon from hamburger to X
            menuIcon.innerHTML = navbar.classList.contains('active') ? '&times;' : '&#9776;';
        });
        
        // Close menu when a link is clicked (on mobile)
        navbar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navbar.classList.remove('active');
                    menuIcon.innerHTML = '&#9776;';
                }
            });
        });
    }

    // Smooth scrolling is largely handled by the CSS property `scroll-behavior: smooth;`
    // combined with the use of internal link anchors (e.g., href="#about").
});