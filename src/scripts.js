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

document.addEventListener("DOMContentLoaded", function() {
    var bgElement = document.getElementById("background_welcome");
    var bgImage = new Image();
    bgImage.src = "/assets/images/wallpapers/1366_2000.webp";
    bgImage.onload = function() {
        bgElement.style.backgroundImage = "url('" + bgImage.src + "')";
        bgElement.style.backgroundSize = "cover";
        bgElement.style.backgroundPosition = "center center";
    };
});