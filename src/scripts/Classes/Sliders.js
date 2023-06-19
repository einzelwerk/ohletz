/* eslint-disable import/no-unresolved */
import Swiper, { Grid, Mousewheel, Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';

import breakpoints from '../utils/MatchMedia';

class Sliders {
  static aboutUs() {
    const root = document.querySelector('.js-about-us-slider');
    if (root) {
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
  }

  static cards() {
    const root = document.querySelector('.js-cards-slider');
    if (root) {
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
  }

  static services() {
    const root = document.querySelector('.js-services-slider');
    if (root) {
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
  }

  static defaultSlider() {
    const root = document.querySelector('.js-default-slider');
    if (root) {
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
  }

  static teamSlider() {
    const root = document.querySelector('.js-team-slider');
    if (root) {
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
  }

  static careerSlider() {
    const root = document.querySelector('.js-career-features-slider');
    if (root) {
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
  }

  static benifitsSlider() {
    const root = document.querySelectorAll('.js-benefits-slider');
    if (root) {
      root.forEach((elem) => {
        const sliderInstance = new Swiper(elem, {
          modules: [Mousewheel],
          init: false,

          slidesPerView: 1.1,
          spaceBetween: 12,
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
  }

  static presentationSlider() {
    const root = document.querySelector('.js-presentation-slider');
    if (root) {
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
  }

  static reviewsSlider() {
    const root = document.querySelector('.js-reviews-slider');
    if (root) {
      const sliderInstance = new Swiper(root, {
        modules: [Mousewheel, Pagination, Navigation],
        init: false,
        slidesPerView: 1,

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
            initialSlide: 1,
            slidesPerView: 3,
            spaceBetween: 80,
          },
        },
      });

      sliderInstance.init();
    }
  }

  static fullwidthSlider() {
    const root = document.querySelector('.js-full-w-slider');
    if (root) {
      const sliderInstance = new Swiper(root, {
        modules: [Mousewheel, Pagination, Navigation],
        init: false,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        mousewheel: {
          forceToAxis: true,
          sensitivity: 0.3,
        },
        pagination: {
          el: root.querySelector('.swiper-pagination'),
        },

        breakpoints: {
          768: {
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      });

      sliderInstance.init();
    }
  }

  static slider() {
    const sliderInstance = new Swiper('.js-slider', {
      slidesPerView: 1.2,
      spaceBetween: 12,
      init: false,
      loop: true,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 0.3,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });

    sliderInstance.init();
  }

  static facts() {
    const sliderInstance = new Swiper('.js-facts-slider', {
      modules: [Grid, Navigation],
      slidesPerView: 1,
      spaceBetween: 0,
      grid: {
        rows: 2,
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
      },
      mousewheel: {
        forceToAxis: true,
        sensitivity: 0.3,
      },
      navigation: {
        prevEl: '.facts-slider__prev',
        nextEl: '.facts-slider__next',
      },
      init: false,
    });

    sliderInstance.init();
  }

  static contactsBlock() {
    const sliderInstance = new Swiper('.js-contacts-block-slider', {
      modules: [Pagination],
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: document.querySelector('.js-contacts-block-slider').querySelector('.slider-pagination'),
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
      },

      init: false,
    });

    sliderInstance.init();
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

  Sliders.fullwidthSlider();
  Sliders.slider();
  Sliders.facts();
  Sliders.contactsBlock();
}

document.addEventListener('DOMContentLoaded', () => {
  slidersInit();
});

window.addEventListener('resize', () => {
  setTimeout(() => {
    slidersInit();
  }, 1000);
});
