import refs from './refs';

const options = {
  root: null,
  threshold: 1.0,
};

const observer = new IntersectionObserver(handlerCounter, options);
observer.observe(refs.statisticsList);

function handlerCounter(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      updateCounter({ observer, entry });
    }
  });
}

function updateCounter({ observer, entry }) {
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
        observer.unobserve(entry.target);
      } else {
        counter.textContent = Math.round(number);
      }
    }, duration);
  });
}
