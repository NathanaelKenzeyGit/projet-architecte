const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("navbar__burger--actif");
    menu.classList.toggle("navbar__menu--ouvert");
});
