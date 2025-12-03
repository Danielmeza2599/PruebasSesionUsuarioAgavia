/* js/menu.js */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionamos los elementos del DOM
    const btnMenu = document.getElementById('btn-menu');
    const menuLink = document.querySelector('.menu-link');
    const iconMenu = document.getElementById('01'); // Icono Hamburguesa
    const iconClose = document.getElementById('02'); // Icono Cerrar

    // Verificamos que los elementos existan para evitar errores
    if (btnMenu && menuLink && iconMenu && iconClose) {
        
        // Estado inicial de los iconos (por seguridad CSS)
        iconMenu.style.display = 'block';
        iconClose.style.display = 'none';

        // 2. Evento Click en el botón
        btnMenu.addEventListener('click', (e) => {
            e.preventDefault(); // Evita comportamientos raros de enlaces
            
            // Alternar la clase 'active' que mueve el menú
            menuLink.classList.toggle('active');

            // Alternar visibilidad de iconos
            if (menuLink.classList.contains('active')) {
                // Si está abierto: Oculta hamburguesa, muestra X
                iconMenu.style.display = 'none';
                iconClose.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Evita scroll en el fondo
            } else {
                // Si está cerrado: Muestra hamburguesa, oculta X
                iconMenu.style.display = 'block';
                iconClose.style.display = 'none';
                document.body.style.overflow = 'auto'; // Reactiva scroll
            }
        });

        // 3. Cerrar menú al hacer click en un enlace
        const links = document.querySelectorAll('.menu-link ul li a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuLink.classList.remove('active');
                iconMenu.style.display = 'block';
                iconClose.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        });
    } else {
        console.error("Error: No se encontraron los elementos del menú en el DOM.");
    }
});