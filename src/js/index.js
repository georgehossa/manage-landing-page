import '../css/index.css';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';

// Mobile Menu
const $menuTrigger = document.querySelector('.nav__menu-icon');
$menuTrigger.onclick = (e) => e.currentTarget.parentElement.classList.toggle('active');

// Swiper.js

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  initialSlide: 0,
  centeredSlides: true,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    380: {
      slidesPerView: 2,
      spaceBetween: 32,
      mousewheel: true,
      initialSlide: 1,
      grabCursor:true,
      centeredSlides: true,
    },
  }
});
