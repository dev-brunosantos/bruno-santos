const menuPrinscipal = document.querySelector('.menu-principal');
const menuBarra = document.querySelector('.fa-bars')
const btnMenu = document.querySelector('[data-btnMenu]');

btnMenu.addEventListener('click', (evento)=>{
    evento.preventDefault();

    menuPrinscipal.classList.toggle('abrir-menu')
    menuBarra.classList.toggle('fa-close')
})