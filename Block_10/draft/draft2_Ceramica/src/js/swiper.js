import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const uderheaderSwiper = new Swiper('.underheader-slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.underheader-nav__pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.underheader-nav__next',
    prevEl: '.underheader-nav__prev',
  },
});

const projectsSlider = new Swiper('.projects__slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.full-slider__next',
    prevEl: '.full-slider__prev',
    enabled: false,
  },
})

const options = {
  parent: document.querySelector('.project-slider'),
  targetSelector: '.project-slider__img-big',
  startPosition: {
    left: 189,
    bottom: 212,
  },
  glass: {
    glassImageSrc: "../icons/MagnifyingGlassPlus.svg",
    backgroundColor: 'rgba(249, 249, 250, 0.2)',
  },
  zoom: 2,
}

const projectCarousel = new Swiper(".project-carousel", {
  spaceBetween: 40,
  slidesPerView: 3,
  watchSlidesProgress: true,
  loop: true,
});

const projectElements = new Swiper(".project-slider", {
  spaceBetween: 1940,

  thumbs: {
    swiper: projectCarousel,
  },
  on: {
    slideChange: function () {
      setTimeout(magnyfying.bind(magnyfying, options), 0);
    },
    init: function () {
      setTimeout(magnyfying.bind(magnyfying, options), 0);
    }
  }
});

const blogCarousel = new Swiper('.blog__carousel', {
  spaceBetween: 10,
  slidesPerView: 4.165,
  watchSlidesProgress: true,
  loop: true,
});