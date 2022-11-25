// ! Contact Us Modal

// Function for button click
// const modalButtonClick = (
//   buttonSelector,
//   modalSelector,
//   closeSelector,
//   toggle
// ) => {
//   const button = document.querySelector(buttonSelector);
//   const modal = document.querySelector(modalSelector);
//   const close = modal.querySelector(closeSelector);

//   [button, close].forEach(item => {
//     item.addEventListener('click', () => modal.classList.toggle(toggle));
//   });
// };

// modalButtonClick('#send-button', '#modal-ok', '.modal__close-btn', 'is-hidden');

// Modal elements
const modalSend = document.querySelector('#modal-ok');
const closeSend = document.querySelector('.modal__close-btn');

// Form Fields
const form = document.querySelector('#form');
const btnSend = document.querySelector('#send-button');
// Validation Patterns
const namePattern = /^([a-zA-Z0-9_-]){3,12}$/;
const emailPattern =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

function nameValidation() {
  const nameInput = document.querySelector('#nameField');
  const nameValue = document.querySelector('#nameField').value;

  if (nameValue.match(namePattern)) {
    form.classList.add('valid');
    form.classList.remove('invalid');
    nameInput.classList.remove('err');
  } else {
    form.classList.remove('valid');
    form.classList.add('invalid');
    nameInput.classList.add('err');
  }
  if (nameValue === '') {
    form.classList.remove('valid');
    form.classList.remove('invalid');
    nameInput.classList.remove('err');
  }
}

function emailValidation() {
  const emailInput = document.querySelector('#emailField');
  const emailValue = document.querySelector('#emailField').value;

  if (emailValue.match(emailPattern)) {
    form.classList.add('valid');
    form.classList.remove('invalid');
    emailInput.classList.remove('err');
  } else {
    form.classList.remove('valid');
    form.classList.add('invalid');
    emailInput.classList.add('err');
  }
  if (emailValue === '') {
    form.classList.remove('valid');
    form.classList.remove('invalid');
    emailInput.classList.remove('err');
  }
}
