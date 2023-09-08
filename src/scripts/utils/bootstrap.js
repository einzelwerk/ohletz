/* eslint-disable no-param-reassign */
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

const accordionButton = document.querySelectorAll('.accordion-item');

function collapse(t) {
  const height = t.closest('.accordion-item').querySelector('.accordion-content').offsetHeight;
  t.closest('.accordion-item').querySelector('.accordion-collapse').style.height = `${height}px`;
  t.classList.add('active');
}

function collapseHide(t) {
  t.closest('.accordion-item').querySelector('.accordion-collapse').style.height = '0px';
  t.classList.remove('active');
}

accordionButton.forEach((t) => {
  t.addEventListener('mouseover', (e) => {
    requestAnimationFrame(() => {
      collapse(t, e);
    });
  });
  t.addEventListener('mouseout', (e) => {
    requestAnimationFrame(() => {
      collapseHide(t, e);
    });
  });
});
