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

const signUpForm = document.querySelector('.order');
// Form fields
const emailField = document.getElementById('emailField');
const nameField = document.getElementById('nameField');

const buyItNow_btn = document.querySelector('.buyitnow-button');
const addToCart_btn = document.querySelector('.addtocart-button');

emailField.addEventListener('keyup', function (event) {
  isValidEmail = emailField.checkValidity();
  isNameValid = nameField.checkValidity();

  if (isValidEmail && isNameValid) {
    buyItNow_btn.disabled = false;
    addToCart_btn.disabled = false;
  } else {
    buyItNow_btn.disabled = true;
    addToCart_btn.disabled = true;
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
  }
});
