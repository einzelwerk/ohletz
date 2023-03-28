const servicesCards = document.querySelectorAll(".js-services-cards");

const callback = (entries) => {
  entries.forEach((entry) => {
    const elem = entry;
    if (elem.isIntersecting) {
      const { target } = elem;
      document.querySelectorAll('.services-nav__item').forEach(el => {
        el.classList.remove('services-nav__item--current')
      })
      document
        .querySelector(`.services-nav__item[data-id="${target.id}"]`)
        .classList.add("services-nav__item--current");
    }
  });
};

const options = {
  rootMargin: "0px 0px 75px 0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver(callback, options);

servicesCards.forEach((elem) => observer.observe(elem));
