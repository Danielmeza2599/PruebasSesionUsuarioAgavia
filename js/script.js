/*
    * Author: Agavia
    * Descripcion: Interactividad de Media y Eventos Flip Cards
*/

document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA PARA EVENTS (FLIP CARDS) ---

    // Seleccionar todos los botones "See more"
    const flipButtons = document.querySelectorAll('.trigger-flip');
    
    // Seleccionar todos los botones "Return" (del reverso)
    const returnButtons = document.querySelectorAll('.trigger-return');

    // Función para activar el giro
    flipButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que el enlace recargue la página o suba
            // Busca el contenedor padre más cercano con la clase 'flip-card-inner'
            const cardInner = this.closest('.flip-card-inner');
            if (cardInner) {
                cardInner.classList.add('is-flipped');
            }
        });
    });

    // Función para volver al estado original
    returnButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const cardInner = this.closest('.flip-card-inner');
            if (cardInner) {
                cardInner.classList.remove('is-flipped');
            }
        });
    });

    // --- LÓGICA PARA MEDIA (VIDEO) ---
    //función global para que funcione con el atributo onclick en el HTML
    window.changeVideo = function(videoSrc, posterSrc) {
        var player = document.getElementById('mainPlayer');
        if (player) {
            player.src = videoSrc;
            player.poster = posterSrc;
            player.play().catch(error => {
                console.log("Reproducción automática bloqueada o error: ", error);
            });
        }
    };
});