// import {PRODUCT_LS_KEY} from './script'
const PRODUCT_LS_KEY = 'basket';
const selectors = {
  totalPrice: document.querySelector('.js-total-price'),
  basketList: document.querySelector('.js-list'),
};
const { totalPrice, basketList } = selectors;
const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || [];
console.log(products);
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
// createMarkup(products)
