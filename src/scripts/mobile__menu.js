let mobMenu = document.querySelector('.mobile__menu')
let burger = document.querySelector('.hamburger__menu')
let burgerLink = document.querySelector('.hamburger__menu--link')
// let mobMenuDisplay = mobMenu.style.display;

document.querySelector('.hamburger__menu').addEventListener('click', () => {

    mobMenu.classList.toggle('mobile__menu--view');
    burger.classList.toggle('hamburger__menu--animate');
    burgerLink.classList.toggle('hamburger__menu--link--animate');
})