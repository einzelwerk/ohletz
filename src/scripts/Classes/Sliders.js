/* eslint-disable import/no-unresolved */
import Swiper, { Mousewheel, Pagination, Navigation } from 'swiper';
import 'swiper/css';

import breakpoints from '../utils/MatchMedia';

class Sliders {
  static aboutUs() {
    const root = document.querySelector('.js-about-us-slider');
    const sliderInstance = new Swiper(root, {
      modules: [Mousewheel],
      init: false,
      loop: true,

      slidesPerView: 1.2,
      spaceBetween: 20,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 0.3,
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });

    sliderInstance.init();
  }

  static cards() {
    const root = document.querySelector('.js-cards-slider');
    const sliderInstance = new Swiper(root, {
      modules: [Mousewheel],
      init: false,
      loop: true,

      slidesPerView: 1.2,
      spaceBetween: 20,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 0.3,
      },

      breakpoints: {
        768: {
          slidesPerView: 3,
        },
      },
    });

    sliderInstance.init();
  }

  static services() {
    const root = document.querySelector('.js-services-slider');
    const sliderInstance = new Swiper(root, {
      modules: [Mousewheel],
      init: false,
      loop: true,

      slidesPerView: 1.2,
      spaceBetween: 20,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 0.3,
      },

      breakpoints: {
        768: {
          slidesPerView: 3,
        },
      },
    });

    sliderInstance.init();
  }

  static defaultSlider() {
    const root = document.querySelector('.js-default-slider');
    const sliderInstance = new Swiper(root, {
      modules: [Mousewheel],
      init: false,
      loop: true,

      slidesPerView: 1.2,
      spaceBetween: 20,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 0.3,
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });

    sliderInstance.init();
  }

  static teamSlider() {
    const root = document.querySelector('.js-team-slider');
    const sliderInstance = new Swiper(root, {
      modules: [Mousewheel],
      init: false,
      loop: true,

      slidesPerView: 1.2,
      spaceBetween: 20,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 0.3,
      },

      breakpoints: {
        768: {
          slidesPerView: 3,
        },
      },
    });

    sliderInstance.init();
  }

  static careerSlider() {
    const root = document.querySelector('.js-career-features-slider');
    const sliderInstance = new Swiper(root, {
      modules: [Mousewheel],
      init: false,

      slidesPerView: 1.2,
      spaceBetween: 20,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 0.3,
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });

    if (window.matchMedia(breakpoints.isDesktop).matches) {
      sliderInstance.init();
    }
  }

  static benifitsSlider() {
    const root = document.querySelectorAll('.js-benefits-slider');
    root.forEach((elem) => {
      const sliderInstance = new Swiper(elem, {
        modules: [Mousewheel],
        init: false,

        slidesPerView: 1.2,
        spaceBetween: 20,
        mousewheel: {
          forceToAxis: true,
          sensitivity: 0.3,
        },

        breakpoints: {
          768: {
            slidesPerView: 2,
          },
        },
      });

      if (window.matchMedia(breakpoints.isMobile).matches) {
        sliderInstance.init();
      }
    });
  }

  static presentationSlider() {
    const root = document.querySelector('.js-presentation-slider');
    const sliderInstance = new Swiper(root, {
      modules: [Mousewheel],
      init: false,

      slidesPerView: 1.2,
      spaceBetween: 20,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 0.3,
      },

      breakpoints: {
        768: {
          slidesPerView: 1,
        },
      },
    });

    if (window.matchMedia(breakpoints.isDesktop).matches) {
      sliderInstance.init();
    }
  }

  static reviewsSlider() {
    const root = document.querySelector('.js-reviews-slider');
    const sliderInstance = new Swiper(root, {
      modules: [Mousewheel, Pagination, Navigation],
      init: false,
      loop: true,
      slidesPerView: 1.2,
      spaceBetween: 20,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 0.3,
      },
      pagination: {
        el: root.querySelector('.pagination'),
        type: 'fraction',
        formatFractionCurrent(number) {
          return `0${number}`.slice(-2);
        },
        formatFractionTotal(number) {
          return `0${number}`.slice(-2);
        },
      },
      navigation: {
        prevEl: root.querySelector('.slider-navigation__prev'),
        nextEl: root.querySelector('.slider-navigation__next'),
       
      },

      breakpoints: {
        768: {
          centeredSlides: true,
          slidesPerView: 3,
          spaceBetween: 80,
        },
      },
    });

    if (window.matchMedia(breakpoints.isDesktop).matches) {
      sliderInstance.init();
    }
  }
}

function slidersInit() {
  Sliders.aboutUs();
  Sliders.cards();
  Sliders.services();
  Sliders.defaultSlider();
  Sliders.teamSlider();
  Sliders.careerSlider();
  Sliders.benifitsSlider();
  Sliders.presentationSlider();
  Sliders.reviewsSlider();
}

document.addEventListener('DOMContentLoaded', () => {
  slidersInit();
});

window.addEventListener('resize', () => {
  setTimeout(() => {
    slidersInit();
  }, 1000);
});
