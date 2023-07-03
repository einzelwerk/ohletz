const presentationButton = document.querySelectorAll('.js-show-more');

if (presentationButton) {
  presentationButton.forEach((el) => {
    el.addEventListener('click', () => {
      const desc = el.closest('.presentation-block').querySelector('.presentation-block__desc');
      desc.classList.toggle('active');

      el.classList.toggle('active');
      if (desc.classList.contains('active')) {
        presentationButton.innerHTML = 'Weniger';
      } else {
        presentationButton.innerHTML = 'Mehr anzeigen';
      }
    });
  });
}
