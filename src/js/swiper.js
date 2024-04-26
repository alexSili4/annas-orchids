import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  direction: "horizontal",
  spaceBetween: 50,
  speed: 800,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
});
