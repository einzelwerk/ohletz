const trigger = document.querySelectorAll('.js-trigger-class')


trigger.forEach((elem) => {
  const target = document.querySelector(`[data-target="${elem.dataset.trigger}"]`)
  const triggerElem = elem;
  elem.addEventListener('click', () => {
    target.classList.toggle('active')
    triggerElem.classList.toggle('active')
    if (!elem.dataset.trigger) {
      if (elem.classList.contains('active')) {
        triggerElem.innerHTML = 'Weniger'
      } else {
        triggerElem.innerHTML = 'Mehr anzeigen'
      }
    }
  })
})