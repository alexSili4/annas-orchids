import '/js/swiper';
import '/js/eventHandlers';
import '/js/validateJoinUsForm';
import '/js/aos';
import refs from './refs';

const counters = refs.statisticsList.querySelectorAll('.js-statistics-value');

counters.forEach((el) => {
  const totalDuration = 2000;
  const duration = 60;
  const targetValue = Number(el.textContent);
  const valueStep = (targetValue / totalDuration) * duration;
  let number = 0;

  const intervalId = setInterval(() => {
    number += valueStep;

    if (number >= targetValue) {
      clearInterval(intervalId);
      el.textContent = Math.round(targetValue);
    } else {
      el.textContent = Math.round(number);
    }
  }, duration);
});
