import SimpleLightbox from 'simplelightbox';
import {
  handlerClickForTikTakToe,
  resetGameForTikTakToe,
  checkWinnerForTikTakToe,
} from '../helpers/helper-tiktaktoe';

import { cars } from './cars';
import { galleryItems } from './gallery-items';

const selectors = {
  lodashSearch: document.querySelector('.js-lodash'),
  title: document.querySelector('.js-title'),
  comment: document.querySelector('.js-comment'),
  list: document.querySelector('.js-list'),
  carsList: document.querySelector('.js-cars-list'),
  carsForm: document.querySelector('.js-cars-form'),
  addBtn: document.querySelector('.js-add-btn'),
  subtractBtn: document.querySelector('.js-subtract-btn'),
  counter: document.querySelector('.js-counter'),
  form: document.querySelector('.js-form'),
  imgLoader: document.querySelector('.js-img-loader'),
  gameContainer: document.querySelector('.js-content'),
  colorBox: document.querySelector('.js-color-box'),
};
const {
  lodashSearch,
  title,
  comment,
  list,
  carsList,
  carsForm,
  addBtn,
  subtractBtn,
  counter,
  form,
  imgLoader,
  gameContainer,
  colorBox,
} = selectors;
//Handler LodashSearch
// lodashSearch.addEventListener('input', _.throttle(handlerThrottleSearch, 3000,
//   {leading: false, trailing: false}
// ))
// function handlerThrottleSearch(evt) {
// console.log(evt.target.value);
// }

lodashSearch.addEventListener(
  'input',
  _.debounce(handlerDebounceSearch, 3000, { leading: true, trailing: true })
);
function handlerDebounceSearch(evt) {
  console.log(evt.target.value);
}
// tic tac toe game
function gameMarkup() {
  let gameMarkup = '';
  for (let i = 0; i < 9; i += 1) {
    gameMarkup += `<div class="item" data-id="${i + 1}"></div>`;
  }
  gameContainer.innerHTML = gameMarkup;
}
gameMarkup();
// let player = "X";
// const historyX = [];
// const historyO = [];
// const combinations = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];
gameContainer.addEventListener('click', handlerClickForTikTakToe);

//Color box, event bubbling;
colorBox.addEventListener('click', handlerColorBox);
function handlerColorBox(evt) {
  if (!evt.target.classList.contains('js-color-item')) {
    return;
  }
  const box = evt.target.dataset;

  colorBox.insertAdjacentHTML('afterbegin', `<h3> ${box.color}</h3>`);
}

//Handle input - Name, email, phone. Greeting
form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();

  const { username, email, phone, city, street, age, car } =
    evt.currentTarget.elements;
  // const elements = Array.from(evt.currentTarget.elements);
  // const data = elements.reduce((acc, item)=>{
  //   if(isNaN(item.name)){
  //     acc[item.name]=item.value
  //   }
  //   return acc
  // },{})

  // elements with FormData
  const formData = new FormData(evt.currentTarget);

  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  createGreeting(username, email, phone, city, street, age, car);
}

// Creating HEADER
function createGreeting(name, mail, tel, city, street, age, car) {
  title.textContent = `Hello ${name.value}. Please check your email - ${mail.value} 
  and phone - ${tel.value}.You are ${age.value} years old,  live on ${street.value} in ${city.value} 
  and drives ${car.value}`;
  if (!!name.value) {
    title.classList.add('title-color');
    comment.hidden = true;
  } else {
    title.textContent = `Write your Name`;
    title.classList.remove('title-color');
    comment.hidden = false;
  }
}

// Copying forbidding
document.addEventListener('keydown', handlerCopyKey);
function handlerCopyKey(evt) {
  if (evt.ctrlKey && evt.code === 'KeyC') {
    evt.preventDefault();
  }
}

//List creating
const li = document.createElement('li');

list.appendChild(li);

const goods = [...list.children];

goods.forEach(good => {
  good.textContent = `tomato`;
  good.classList.add('element');
});
const listHeader = `<h2>${'Список покупок'}</h2>`;
list.insertAdjacentHTML('beforebegin', listHeader);

//List loading
const marKup = galleryItems
  .map(
    ({ preview, description }) => `
      <li class="main-container photo">
        <div class="thecard">
          <div class="thefront ">
            <img src="${preview}" alt="${description}" class="img-box"loading="lazy" />
          </div>
          <div class="theback inform-box">
            <p class="photo-description">${description}</p>
            <p class="photo-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit soluta
        possimus recusandae officiis deserunt voluptates odit suscipit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit soluta
        possimus recusandae officiis deserunt voluptates odit suscipit.
        </p>
            <button type="button">View more</button>
          </div>
        </div>
      </li>`
  )
  .join(' ');
imgLoader.insertAdjacentHTML('beforeend', marKup);

//CArs form and listStyle
carsList.insertAdjacentHTML('beforeend', createMarkup(cars));

carsForm.addEventListener('submit', handlerCarsForm);

function handlerCarsForm(evt) {
  evt.preventDefault();

  const {
    select: { value: selector },
    query: { value: query },
  } = evt.currentTarget.elements;
  const queryValue = query.toLowerCase();

  let resultCars = cars.filter(item => {
    return item[selector].toLowerCase() == queryValue;
  });

  carsList.innerHTML = createMarkup(resultCars);

  evt.currentTarget.reset();
}

function createMarkup(dataArr) {
  let marKup = '';
  return (marKup = dataArr
    .map(
      ({ id, model, type, price, img }) => `
    <li data-id="${id}" class="car-item">
    <img src="${img}" alt="${model}" width ='300'>
    <h2>Make: ${model}</h2>
    <h3>Model: ${type}</h3>
    <p>Price: ${price}</p>
    <button type='button' class="js-add">Add</button>
  </li>`
    )
    .join(''));
}

carsList.classList.add('cars-list');
carsList.addEventListener('click', handlerClickCar);
function handlerClickCar(evt) {
  const cardItem = evt.target.closest('.car-item');
  if (evt.target.classList.contains('js-add')) {
    const car = findCardItem(cardItem);
    const instance = basicLightbox.create(createAddCarMurkup(car));
    instance.show();
  } else if (cardItem) {
    const car = findCardItem(cardItem);
    const instance = basicLightbox.create(createDetailInfoMurkup(car));
    instance.show();
    // console.log(car);
  }
}
function findCardItem(item) {
  const { id } = item.dataset;
  const currentCar = cars.find(({ id: carId }) => carId === Number(id));
  return currentCar;
}
function createDetailInfoMurkup({ id, img, model, price } = {}) {
  return `<div data-id="${id}" class="modal">
<img src="${img}" alt="${model}" width ='600'>
<h2>Make: ${model}</h2>
<p>Price: ${price}</p>
<button type='button'>Add</button>
</div>`;
}
function createAddCarMurkup({ model, price } = {}) {
  return `<div class="card-model"> 
  <h2>Add to card car</h2>
  <p>Model: ${model}</p> 
  <p>Price: ${price}</p> 
  </div>`;
}

// Add - Subtract -  Buttons
addBtn.addEventListener('click', handlerAdd);
subtractBtn.addEventListener('click', handlerSubtract);
let step = 0;
function handlerAdd() {
  step += 1;
  counter.textContent = step;
}
function handlerSubtract() {
  step -= 1;
  counter.textContent = step;
}

// time in queue
function queueTime(arr, box) {
  const obj = {};
  for (let i = 1; i <= box; i += 1) {
    obj[i] = 0;
  }
  console.log(obj);

  arr.reduce((acc, item) => {
    acc[Object.values(acc).indexOf(Math.min(...Object.values(acc))) + 1] += item;
      return acc;
  }, obj);
  console.log(obj);
  return obj;
}
queueTime([5, 12, 8, 6, 3, 7, 6, 4, 15, 9], 3);

export { gameMarkup };
