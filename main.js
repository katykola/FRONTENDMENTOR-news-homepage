const menuIcon = document.getElementById('menu-icon');
const menuMobile = document.getElementById('menu-mobile');
const menuClose = document.getElementById('menu-close');
const backgroundContainer = document.querySelector('.background-container');

menuIcon.addEventListener('click', function(){
    menuMobile.style.display = 'inherit';
    backgroundContainer.style.display = 'inherit';
})

menuClose.addEventListener('click', function(){
    menuMobile.style.display = 'none';
    backgroundContainer.style.display = 'none';

})
