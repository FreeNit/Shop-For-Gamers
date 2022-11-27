// **********************
// ! MOBILE MENU - Open CLOSE
// **********************

const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const logo = document.querySelector('.header__logo');
const body = document.querySelector('body');


headerBurger.addEventListener('click', function (e) {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  body.classList.toggle('lock');
});

logo.addEventListener('click', function () {
  if (headerBurger.classList.contains('active')) {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock');
  }
});


// **********************
// ! SLIDER
// **********************

// $(document).ready(function () {
//   $('.slider').slick();
// });

// $('.slider').slick({
//   // normal options...
//   infinite: false,

//   // the magic
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         infinite: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 300,
//       settings: 'unslick', // destroys slick
//     },
//   ],
// });