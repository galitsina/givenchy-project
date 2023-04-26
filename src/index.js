import './pages/index.scss';

const menu = document.querySelector('.menu__body');
const menuButton = document.querySelector('.menu__hamburger');
const body = document.body;
// const checkboxButton = document.querySelector('.menu__hamburger');

if (menu && menuButton) {
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu__body_active');
    menuButton.classList.toggle('menu__hamburger_active');
    body.classList.toggle('page_lock');
  })

  menu.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('menu__body_active');
      menuButton.classList.remove('menu__hamburger_active');
      body.classList.remove('page_lock');
    })
  })
}
