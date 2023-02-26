const mobileMenuButton = document.querySelector(".navigation__mobile-menu");
const navigationList = document.querySelector(".navigation__list");
const toggleOverflowBody = () => document.body.classList.toggle('overflowY');
mobileMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.toggle("_active");
    navigationList.classList.toggle("_active");
    toggleOverflowBody();
})