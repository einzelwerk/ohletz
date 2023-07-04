const presentationButtons = document.querySelectorAll('.js-show-more');

if (presentationButtons) {
  presentationButtons.forEach((el) => {
    el.addEventListener('click', () => {
      const elem = el;
      const desc = el.closest('.presentation-block').querySelector('.presentation-block__desc');
      desc.classList.toggle('active');

      el.classList.toggle('active');
      if (elem.classList.contains('active')) {
        elem.innerHTML = 'Weniger';
      } else {
        elem.innerHTML = 'Mehr anzeigen';
      }
    });
  });
}
