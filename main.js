
const btnHamburger = document.querySelector(".header-right > a");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeBurgerMenu = document.querySelector(".close")

btnHamburger.addEventListener("click", function () {
    btnHamburger.style.display = "none";
    hamburgerMenu.style.display = "inline-block"
});

closeBurgerMenu.addEventListener("click", function() {
    hamburgerMenu.style.display = "none"
    btnHamburger.style.display = "block"
});