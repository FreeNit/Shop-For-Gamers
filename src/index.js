// **********************
// ! MOBILE MENU - Open CLOSE
// **********************

const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

headerBurger.addEventListener('click', function (e) {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  body.classList.toggle('lock');
});
