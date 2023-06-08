import 'the-new-css-reset/css/reset.css';
import './Classes/AttachedFiles';
import './Classes/Sliders';
import './modules/Animations';
import './modules/Dropdown';
import './modules/fixedHeader';
import './modules/servicesCards';
import './modules/toogleClass';
import './utils/bootstrap';

(function calcHeaderHeight() {
  document.documentElement.style.setProperty('--header-height', `${document.querySelector('.header').offsetHeight}px`);
})();

// eslint-disable-next-line no-restricted-globals
const el = document.querySelector(location.hash);

if (el) window.scrollTo({ top: el.offsetTop, left: 0, behavior: 'instant' });
