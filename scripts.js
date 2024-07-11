
function toggleMenu(){
    const menu = document.getElementById("menu_small_screens");

    if(menu.style.display === 'none' || menu.style.display === ''){
        menu.style.display = 'flex';
    }else{
        menu.style.display = 'none';
    }
    console.log('execute')
}