import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/tab';

const accordion = document.querySelectorAll('.bs-accordion');

accordion.forEach((elem) => {
  elem.addEventListener('show.bs.collapse', (e) => {
    e.target.closest('.accordion__item').classList.add('active');
  });
});
accordion.forEach((elem) => {
  elem.addEventListener('hide.bs.collapse', (e) => {
    e.target.closest('.accordion__item').classList.remove('active');
  });
});

const accordionItem = document.querySelectorAll('.accordion__item');

accordionItem.forEach((t) => {
  t.addEventListener('mouseover', (e) => {
    e.currentTarget.querySelector('button').click();
  });
  t.addEventListener('mouseout', (e) => {
    e.currentTarget.querySelector('button').click();
  });
});
