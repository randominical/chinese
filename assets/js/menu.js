let menuButton = document.querySelector('.menu__burger');
let menu = document.querySelector('.menu__body');
let menuList = document.querySelector('.menu__list');

menuButton.onclick = function() {
    menuButton.classList.toggle('active');
    menu.classList.toggle('active');
};

menuList.onclick = function() {
    menuButton.classList.remove('active');
    menu.classList.remove('active');
};