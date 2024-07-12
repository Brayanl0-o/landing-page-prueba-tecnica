document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu_small_screens");

    menu.style.display = 'none'; 

    // Funcion para alternar el menu
    window.toggleMenu = function() {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
        console.log('execute');
    };

    // Oculta el menu cuando la ventana es de mayor resolución
    window.addEventListener('resize', function() {
        if (window.innerWidth > 800) {
            menu.style.display = 'none';
        }
    });
});