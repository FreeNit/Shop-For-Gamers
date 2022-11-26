// ! TAKE ORDER: - Contact Us (Form Validation + Modal)

// Modal elements
const modalKeepShopping = document.querySelector('#modal-keepshopping');
const modalLetsGo = document.querySelector('#modal-letgo');
const modalKeepShoppingClose_btn = document.querySelector('#keppShoping-close');
const modalLetsGoClose_btn = document.querySelector('#letsGo-close');

// Form Fields
const form = document.querySelector('#form');
const buyBtns = document.querySelectorAll('.buyitnow-button');
const addToCartBtns = document.querySelectorAll('.addtocart-button');

// Validation Patterns
const namePattern = /^([a-zA-Z0-9_-]){3,12}$/;
const emailPattern =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

// Name Validation
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
// Email Validation
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

// Color Validation
const colorValidation = function () {
  let colorEl = document.querySelector('#color-option');

  let colorText = colorEl.options[colorEl.selectedIndex].text;
  if (colorText === 'Color Option') {
    colorEl.classList.add('err');
    form.classList.add('invalid');
  } else {
    colorEl.classList.remove('err');
    form.classList.add('valid');
    form.classList.remove('invalid');
  }
};

// Quantity Validation
const quantityValidation = function () {
  let quantityEl = document.querySelector('#quantity');

  let quantityText = quantityEl.options[quantityEl.selectedIndex].text;
  if (quantityText === 'Quantity') {
    quantityEl.classList.add('err');
    form.classList.add('invalid');
  } else {
    quantityEl.classList.remove('err');
    form.classList.add('valid');
    form.classList.remove('invalid');
  }
};

// Payment Validation
const paymentValidation = function () {
  let paymentEl = document.querySelector('#payment');

  let paymentText = paymentEl.options[paymentEl.selectedIndex].text;
  if (paymentText === 'Payment') {
    paymentEl.classList.add('err');
    form.classList.add('invalid');
  } else {
    paymentEl.classList.remove('err');
    form.classList.add('valid');
    form.classList.remove('invalid');
  }
};

// Validation fields when "Send" btn click
function formValidation() {
  const inputsObj = document.querySelectorAll('.contact__input');
  const inputs = Array.from(inputsObj);
  for (const element of inputs) {
    if (element.classList.contains('err') || element.value === '') {
      form.classList.add('invalid');
      element.classList.add('err');
    }
  }
  colorValidation();
  quantityValidation();
  paymentValidation();
}

// Form Submit Validation
for (const btn of addToCartBtns) {
  btn.addEventListener('click', e => {
    formValidation();

    if (form.classList.contains('invalid')) {
      return;
    } else {
      modalLetsGo.classList.toggle('is-hidden');
    }
  });
}

for (const btn of buyBtns) {
  btn.addEventListener('click', e => {
    formValidation();

    if (form.classList.contains('invalid')) {
      return;
    } else {
      modalKeepShopping.classList.toggle('is-hidden');
    }
  });
}

// Close modal window - Keep Shopping
modalKeepShoppingClose_btn.addEventListener('click', function () {
  modalKeepShopping.classList.toggle('is-hidden');
});

// Close modal window - Let`s go
modalLetsGoClose_btn.addEventListener('click', function () {
  modalLetsGo.classList.toggle('is-hidden');
});
