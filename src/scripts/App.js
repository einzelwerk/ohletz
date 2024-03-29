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

const header = document.querySelector('.header');

window.addEventListener('load', () => {
  document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
});
