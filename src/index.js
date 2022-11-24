// **********************
// ! MOBILE MENU - Open CLOSE
// **********************

const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const logo = document.querySelector('.header__logo');

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
// ! MODAL - Open CLOSE
// **********************

const modalButtonClick = (
  buttonSelector,
  modalSelector,
  closeSelector,
  toggle
) => {
  const button = document.querySelector(buttonSelector);
  const modal = document.querySelector(modalSelector);
  const close = modal.querySelector(closeSelector);

  [button, close].forEach(item => {
    item.addEventListener('click', () => modal.classList.toggle(toggle));
  });
};

modalButtonClick(
  '.addtocart-button',
  '#modal-letgo',
  '.modal__close-btn',
  'is-hidden'
);
modalButtonClick(
  '.buyitnow-button',
  '#modal-keepshopping',
  '.modal__close-btn',
  'is-hidden'
);
modalButtonClick('#send-button', '#modal-ok', '.modal__close-btn', 'is-hidden');
