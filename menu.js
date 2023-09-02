const menu = document.querySelector('.menu');
const menuDesplegable = document.querySelector('.menu-desplegable');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    menuDesplegable.classList.toggle('click');
});


