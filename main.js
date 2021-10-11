
const btnHamburger = document.querySelector(".header-right > a");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeBurgerMenu = document.querySelector(".close")

btnHamburger.addEventListener("click", function () {
    btnHamburger.style.display = "none";
    hamburgerMenu.classList.add("active")
});

closeBurgerMenu.addEventListener("click", function() {
    hamburgerMenu.classList.remove("active")
    btnHamburger.style.display = "block"
});