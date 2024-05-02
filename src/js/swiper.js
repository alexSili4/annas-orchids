import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperClassName = '.swiper';

const swiper = new Swiper(swiperClassName, {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  spaceBetween: 50,
  speed: 800,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  pagination: {
    clickable: true,
    el: '.slider-pagination',
  },
  on: {
    transitionEnd: function () {
      const sliders = document.querySelectorAll(swiperClassName);
      sliders.forEach((el) => {
        const sliderDesc = el.querySelectorAll('.js-hidden-desc');
        sliderDesc.forEach((el) => {
          const isHiddenDesc = el.classList.contains('hidden-desc');
          if (!isHiddenDesc) {
            el.classList.toggle('hidden-desc');
          }
        });
      });
    },
  },
});
