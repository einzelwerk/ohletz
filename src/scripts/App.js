import 'the-new-css-reset/css/reset.css';
import './Classes/AttachedFiles';
import './Classes/Sliders';
// eslint-disable-next-line import/no-duplicates
import './modules/Animations';
import './modules/Dropdown';
import './modules/fixedHeader';
import './modules/servicesCards';
import './modules/togglePresentationBlock';
import './modules/toogleClass';
import './utils/bootstrap';

// eslint-disable-next-line import/no-duplicates
import smoother from './modules/Animations';

(function calcHeaderHeight() {
  document.documentElement.style.setProperty('--header-height', `${document.querySelector('.header').offsetHeight}px`);
})();

// eslint-disable-next-line no-restricted-globals
const { hash } = location;
window.addEventListener('load', () => {
  if (hash) {
    const el = document.querySelector(hash);

    if (el) smoother.scrollTo(el, true, 'top');
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    const el = document.querySelector(hash);

    if (el) smoother.scrollTo(el, true, 'top');
  });
});
