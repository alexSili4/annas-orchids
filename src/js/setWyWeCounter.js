import refs from './refs';

refs.counter.forEach((el) => {
  const totalDuration = 1000;
  const duration = 60;
  const targetValue = Number(
    el.querySelector('.js-statistics-value').textContent
  );
  const valueStep = (targetValue / totalDuration) * duration;
  let number = 0;
  const counter = el.querySelector('.js-statistics-alt-value');

  const intervalId = setInterval(() => {
    number += valueStep;

    if (number >= targetValue) {
      clearInterval(intervalId);
      counter.textContent = Math.round(targetValue);
    } else {
      counter.textContent = Math.round(number);
    }
  }, duration);
});
