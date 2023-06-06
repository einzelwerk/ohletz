document.addEventListener('click', (e) => {
  if (e.target.closest('.js-dropdown-toggle')) {
    e.target.closest('.js-dropdown-toggle').querySelector('.js-dropdown-content').classList.toggle('active')
    e.target.closest('.js-dropdown-toggle').querySelector('.contacts-dropdown__arrow').classList.toggle('active')
  } else {
    document.querySelector('.js-dropdown-content')?.classList.remove('active')
    document.querySelector('.contacts-dropdown__arrow')?.classList.remove('active')
  }
})