// import { cars } from "./cars";
const cars = [
  {
    id: 1,
    model: "BMW",
    type: "5 series",
    price: 24300,
    img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
  {
    id: 2,
    model: "Honda",
    type: "Civic",
    price: 7800,
    img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
  {
    id: 3,
    model: "Audi",
    type: "Q7",
    price: 16000,
    img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
  {
    id: 4,
    model: "Honda",
    type: "Accord",
    price: 20000,
    img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
  {
    id: 5,
    model: "BMW",
    type: "5 series",
    price: 14500,
    img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
  {
    id: 6,
    model: "Honda",
    type: "Accord",
    price: 22500,
    img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
  {
    id: 7,
    model: "Honda",
    type: "C40",
    price: 19500,
    img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
  {
    id: 8,
    model: "Mini",
    type: "Cupper",
    price: 12000,
    img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
  {
    id: 9,
    model: "BMW",
    type: "Sport",
    price: 8000,
    img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
  {
    id: 10,
    model: "Volvo",
    type: "Accord",
    price: 20000,
    img: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
];
// import { galleryItems } from "./gallery-items";
// console.log(galleryItems[1]);
const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
const selectors = {
  lodashSearch: document.querySelector(".js-lodash"),
  title: document.querySelector(".js-title"),
  comment: document.querySelector(".js-comment"),
  list: document.querySelector(".js-list"),
  carsList: document.querySelector(".js-cars-list"),
  carsForm: document.querySelector(".js-cars-form"),
  addBtn: document.querySelector(".js-add-btn"),
  subtractBtn: document.querySelector(".js-subtract-btn"),
  counter: document.querySelector(".js-counter"),
  form: document.querySelector(".js-form"),
  imgLoader: document.querySelector(".js-img-loader"),
  gameContainer: document.querySelector(".js-content"),
  colorBox: document.querySelector(".js-color-box"),
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
  "input",
  _.debounce(handlerDebounceSearch, 3000, { leading: true, trailing: true })
);
function handlerDebounceSearch(evt) {
  console.log(evt.target.value);
}
// GAme
function gameMarkup() {
  let gameMarkup = "";
  for (let i = 0; i < 9; i += 1) {
    gameMarkup += `<div class="item" data-id="${i + 1}"></div>`;
  }
  gameContainer.innerHTML = gameMarkup;
}
gameMarkup();
let player = "X";
const historyX = [];
const historyO = [];
const combinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
gameContainer.addEventListener("click", handlerClick);
function handlerClick(evt) {
  if (evt.target === evt.currentTarget || evt.target.textContent) {
    return;
  }
  let isWinner = false;
  let id = Number(evt.target.dataset.id);
  if (player === "X") {
    historyX.push(id);
    isWinner = historyX.length >= 3 ? checkWinner(historyX) : false;
  } else {
    historyO.push(id);
    isWinner = historyO.length >= 3 ? checkWinner(historyO) : false;
  }

  if (isWinner) {
    const instance = basicLightbox.create(`
     <div class ="box"> <h1>Player ${player} is winner</h1></div>
    `);
    instance.show();
    resetGame();
    return;
  }
  evt.target.textContent = player;
  player = player === "X" ? "O" : "X";
}
function checkWinner(arr) {
  return combinations.some((item) => item.every((id) => arr.includes(id)));
}
function resetGame() {
  gameMarkup();
  player = "X";
  historyX.splice(0);
  historyO.splice(0);
}

//Color box, event bubbling;
colorBox.addEventListener("click", handlerColorBox);
function handlerColorBox(evt) {
  if (!evt.target.classList.contains("js-color-item")) {
    return;
  }
  const box = evt.target.dataset;

  colorBox.insertAdjacentHTML("afterbegin", `<h3> ${box.color}</h3>`);
}

//Handle input - Name, email, phone. Greeting
form.addEventListener("submit", handlerSubmit);

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
    title.classList.add("title-color");
    comment.hidden = true;
  } else {
    title.textContent = `Write your Name`;
    title.classList.remove("title-color");
    comment.hidden = false;
  }
}

// Copying forbidding
document.addEventListener("keydown", handlerCopyKey);
function handlerCopyKey(evt) {
  if (evt.ctrlKey && evt.code === "KeyC") {
    evt.preventDefault();
  }
}

//List creating
const li = document.createElement("li");

list.appendChild(li);

const goods = [...list.children];

goods.forEach((good) => {
  good.textContent = `tomato`;
  good.classList.add("element");
});
const listHeader = `<h2>${"Список покупок"}</h2>`;
list.insertAdjacentHTML("beforebegin", listHeader);

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
  .join();
imgLoader.insertAdjacentHTML("beforeend", marKup);

//CArs form and listStyle
carsList.insertAdjacentHTML("beforeend", createMarkup(cars));

carsForm.addEventListener("submit", handlerCarsForm);

function handlerCarsForm(evt) {
  evt.preventDefault();

  const {
    select: { value: selector },
    query: { value: query },
  } = evt.currentTarget.elements;
  const queryValue = query.toLowerCase();

  let resultCars = cars.filter((item) => {
    return item[selector].toLowerCase() == queryValue;
  });

  carsList.innerHTML = createMarkup(resultCars);

  evt.currentTarget.reset();
}

function createMarkup(dataArr) {
  let marKup = "";
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
    .join(""));
}

carsList.classList.add("cars-list");
carsList.addEventListener("click", handlerClickCar);
function handlerClickCar(evt) {
  const cardItem = evt.target.closest(".car-item");
  if (evt.target.classList.contains("js-add")) {
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
addBtn.addEventListener("click", handlerAdd);
subtractBtn.addEventListener("click", handlerSubtract);
let step = 0;
function handlerAdd() {
  step += 1;
  counter.textContent = step;
}
function handlerSubtract() {
  step -= 1;
  counter.textContent = step;
}
