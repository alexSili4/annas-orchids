import formatValue from './formatValue';
import refs from './refs';
import validateValue from './validateValue';

refs.nameInput.forEach((el) => {
  el.addEventListener('input', onNameFieldInput);
});
refs.phoneInput.forEach((el) => {
  el.addEventListener('input', onPhoneFieldInput);
});

function onNameFieldInput(e) {
  const regex = /^[A-zА-Яa-zа-яЇїІіЄєҐґ'\s]*$/;

  validateValue({ e, regex });
}

function onPhoneFieldInput(e) {
  const regex = /^[+\-()0-9]+$/;

  const isValidValue = validateValue({ e, regex });

  if (!isValidValue) {
    return;
  }

  formatValue({ e, firstSymbol: '+' });
}
