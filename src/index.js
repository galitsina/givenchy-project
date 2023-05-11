import './pages/index.scss';
import model1 from './images/looks/model-1.jpg';
import model2 from './images/looks/model-2.jpg';
import model3 from './images/looks/model-3.jpg';
import model4 from './images/looks/model-4.jpg';
import model5 from './images/looks/model-5.jpg';
import model6 from './images/looks/model-6.jpg';
import model7 from './images/looks/model-7.jpg';
import model8 from './images/looks/model-8.jpg';
import model9 from './images/looks/model-9.jpg';
import model10 from './images/looks/model-10.jpg';

const menu = document.querySelector('.menu__body');
const menuButton = document.querySelector('.menu__hamburger');
const body = document.body;

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

function onEntry(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation__active');
    } else {
      entry.target.classList.remove('animation__active');
    }
  });
}
const options = { threshold: [0.1] };
const observer = new IntersectionObserver(onEntry, options);
const elementsLeft = document.querySelectorAll('.animation__left');
for (let elm of elementsLeft) {
  observer.observe(elm);
}
const elementsRight = document.querySelectorAll('.animation__right');
for (let elm of elementsRight) {
  observer.observe(elm);
}

const models = [
  model1, model2, model3, model4, model5, model6, model7, model8, model9, model10
]
const images = document.querySelectorAll('.looks__grid-item');

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random()*arr.length);
  return arr[randIndex];
}

function changeImage() {
  const randNumber = Math.floor(Math.random()*(3)) + 1; //случайное число от 1 до 3

  for (let i = 1; i <= randNumber; i+=1) {
    const randSrcImage = getRandomElement(models);
    const randDomImage = getRandomElement(images);
    randDomImage.classList.add('looks__grid-item_opacity');
    setTimeout(() => {
      randDomImage.src = randSrcImage;
      randDomImage.classList.remove('looks__grid-item_opacity');
    },1000)
  }
}
setInterval(changeImage, 2000);

const submitButton = document.querySelector('.form__button-submit');
submitButton.addEventListener('click', (evt) => {
  evt.preventDefault();
})
