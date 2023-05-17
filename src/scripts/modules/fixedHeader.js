const header = document.querySelector('.header');
let previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
const headerHeight = header.offsetHeight;

function handleScroll() {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollPosition < previousScrollPosition) {
    header.classList.add('header--scrolled--active');
  } else {
    header.classList.remove('header--scrolled--active');
  }

  if (currentScrollPosition > 2 * headerHeight) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }

  previousScrollPosition = currentScrollPosition;
}

window.addEventListener('scroll', handleScroll);
