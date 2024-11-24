let menuHamburguer = document.getElementById('box-menu-hamburguer');
let nav = document.getElementById('nav-menu');
let header = document.getElementById('header')


menuHamburguer.addEventListener("click", () => {
    nav.classList.toggle('mobile')
    header.classList.toggle('mobile')
});