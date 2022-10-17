import Splide from '@splidejs/splide';
import '@splidejs/splide/css/core';

export default function Slide() {
  function createSlide() {
    const options = {
      perPage: 1,
      height: '100vh',
    };

    const carousel = new Splide('.splide', options);

    carousel.mount();
  }

  window.addEventListener('load', createSlide);
}
