const presentationButton = document.querySelector('.js-show-more');

if (presentationButton) {
  presentationButton.addEventListener('click', () => {
    document.querySelector('.presentation-block__desc').classList.toggle('active');
    presentationButton.classList.toggle('active');
    if (document.querySelector('.presentation-block__desc').classList.contains('active')) {
      presentationButton.innerHTML = 'Weniger';
    } else {
      presentationButton.innerHTML = 'Mehr anzeigen';
    }
  });
}
