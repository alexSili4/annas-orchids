import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  direction: "horizontal",
  spaceBetween: 50,
  speed: 800,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  pagination: {
    clickable:true,
    el: ".slider-pagination",
  },
});
