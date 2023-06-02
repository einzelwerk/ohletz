import './Classes/Sliders';
import './Classes/AttachedFiles';
import './utils/bootstrap';
import './modules/servicesCards'
import './modules/toogleClass'
import './modules/fixedHeader'
import './modules/Animations'
import "the-new-css-reset/css/reset.css";
import './modules/Dropdown'

(
  function calcHeaderHeight() {
    document.documentElement.style.setProperty('--header-height', `${document.querySelector('.header').offsetHeight}px`)
  }
)()