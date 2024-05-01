import 'modern-normalize';
import '/js/swiper';
import '/js/eventHandlers';
import refs from './refs';

refs.nameInput.forEach((el) => {
  el.addEventListener('input', onNameFieldInput);
});

function onNameFieldInput(e) {
  const regex = /^[А-Яа-яЇїІіЄєҐґ'\s]*$/;
  const input = e.target.value;

  if (!regex.test(input)) {
    e.target.value = input.slice(0, -1);
  }
}
