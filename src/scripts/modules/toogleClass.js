const trigger = document.querySelectorAll('.js-trigger-class');

trigger.forEach((elem) => {
  const target = document.querySelector(`[data-target="${elem.dataset.trigger}"]`);
  const triggerElem = elem;
  elem.addEventListener('click', () => {
    target.classList.toggle('active');
    triggerElem.classList.toggle('active');
  });
});
