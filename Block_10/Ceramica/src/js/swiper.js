import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const introSwiper = new Swiper('.introSwiper', {
  navigation: {
    nextEl: '.intro-nav__next',
    prevEl: '.intro-nav__prev',
  },
  pagination: {
    el: '.intro-nav__pagination',
    clickable: true,
    type: 'bullets',
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
});

const projectsSwiper = new Swiper('.slider-our-projects', {
  navigation: {
    nextEl: '.our-projects__button-next',
    prevEl: '.our-projects__button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 40,
    },
    1470: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    }, 
  },
});

const articleSwiper = new Swiper('.slider-article', {
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1470: {
      slidesPerView: 4,
      spaceBetween: 30,
    }, 
  },
});
