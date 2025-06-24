const selectors = {
  startBtn: document.querySelector('.js-btn'),
  slotsBtn: document.querySelector('.js-slots-number'),
  box: document.querySelector('.js-container'),
  field: document.querySelector('.js-item'),
};
const { startBtn, slotsBtn, box, field } = selectors;
let slotNumber = 3;
slotsBtn.addEventListener('click', handlerSlotsBtn);
startBtn.addEventListener('click', handlerClick);
function handlerSlotsBtn() {
  let gameItems = parseInt(prompt('Enter the number of slots'));
  if (isNaN(gameItems) || gameItems < 3) {
    alert('Please enter a valid positive number more then 3.');
  } else if (gameItems > 11) {
    alert('You can enter les 11 slots');
  } else {
    console.log(boxMarkup(gameItems));
    box.innerHTML = '';
    box.insertAdjacentHTML('beforeend', boxMarkup(gameItems));
  }
}
function boxMarkup(num) {
  let markup = '';
  for (let i = 0; i < num; i += 1) {
    markup += `<div class="js-item randomizer-item"></div>`;
  }
  return markup;
}

function handlerClick() {
  const promises = [...box.children].map(() => createPromise());
  const response = Promise.allSettled(promises).then(items => {
    items.forEach((item, idx) => {
      box.children[idx].textContent = '';
      setTimeout(() => {
        box.children[idx].textContent = item.value || item.reason;
        if (idx === items.length - 1) {
          const instance = basicLightbox.create(
            `<div class="randomizer-modal">${
              isWinner ? 'WINNER' : 'LOSER'
            } <\div>`
          );
          instance.show();
        }
      }, 1000 * (idx + 1));
    });
    const isWinner = items.every(item => item.status === 'fulfilled');
  });
}
function createPromise() {
  return new Promise((res, rej) => {
    const random = Math.random();
    if (random > 0.5) {
      res('🤩');
    } else {
      rej('🤬');
    }
  });
}

const quantity = 17;
const positions = 8;
const timerId = setTimeout(
  (a, b) => {
    console.log(a * b);
  },
  3000,
  quantity,
  positions
);

console.log(timerId);
