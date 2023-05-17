import './Classes/Sliders';
import './Classes/AttachedFiles';
import './utils/bootstrap';
import './modules/servicesCards'
import './modules/toogleClass'
import './modules/fixedHeader'

(
  function calcHeaderHeight() {
    document.documentElement.style.setProperty('--header-height', `${document.querySelector('.header').offsetHeight}px`)
  }
)()