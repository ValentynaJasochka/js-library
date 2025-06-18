// import {PRODUCT_LS_KEY} from './script'
const PRODUCT_LS_KEY = 'basket';
const selectors = {
  totalPrice: document.querySelector('.js-total-price'),
  basketList: document.querySelector('.js-list'),
  basketClear: document.querySelector('.js-basket-clear')
};
const { totalPrice, basketList, basketClear} = selectors;
const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || [];

const basketCost = products.reduce(
  (acc, { qty, price }) => (acc += qty * price),
  0
);
totalPrice.textContent = `Total price ${basketCost}`;

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ model, price, qty, type }) =>
        ` <li class="basket-list-item">
        <h2>${model}  ${type}</h2>
        <p>${qty}</p>
        <p>${qty * price}</p>
      </li>`
    )
    .join('');

  return markup;
}

basketList.insertAdjacentHTML('beforeend', createMarkup(products));
basketClear.addEventListener('click', handlerBasketCleaner)
function handlerBasketCleaner() {
  localStorage.removeItem(PRODUCT_LS_KEY)
  window.location.href= '../../index.html'
}
