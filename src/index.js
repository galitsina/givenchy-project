import './pages/index.scss';

const menu = document.querySelector('.menu__body');
const menuButton = document.querySelector('.menu__icon');

if (menu && menuButton) {
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu__body_active');
    menuButton.classList.toggle('menu__hamburger_active');
  })
}
