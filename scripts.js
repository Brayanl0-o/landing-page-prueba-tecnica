document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu_small_screens");

    // Asegura que el menú esté oculto inicialmente
    menu.style.display = 'none'; 

    // Función para alternar el menú
    window.toggleMenu = function() {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
        console.log('execute');
    };

    // Oculta el menú cuando la ventana es redimensionada a una mayor resolución
    window.addEventListener('resize', function() {
        if (window.innerWidth > 800) {
            menu.style.display = 'none';
        }
    });
});