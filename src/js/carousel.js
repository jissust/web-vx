/**
 * Carrusel
 */
const swiper_carousel_1 = new Swiper(
  ".yes-we-stack-like-pros-swiper__carousel_1",
  {
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    freeMode: true,
    speed: 5000,
    freeModeMomentum: false,
    allowTouchMove: false,
    grabCursor: false,
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 10,
        spaceBetween: 0,
      },
    },
  }
);

const swiper_carousel_2 = new Swiper(
  ".yes-we-stack-like-pros-swiper__carousel_2",
  {
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      reverseDirection: true,
      pauseOnMouseEnter: false,
    },
    freeMode: true,
    speed: 5000,
    freeModeMomentum: false,
    allowTouchMove: false,
    grabCursor: false,
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 10,
        spaceBetween: 0,
      },
    },
  }
);
