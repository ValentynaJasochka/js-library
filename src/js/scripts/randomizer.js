const selectors = {
  btn: document.querySelector('.js-btn'),
  box: document.querySelector('.js-container'),
  field: document.querySelector('.js-item'),
};
const { btn, box, field } = selectors;
btn.addEventListener('click', handlerClick);
function handlerClick() {
  const promises = [...box.children].map(() => createPromise());
  const response = Promise.allSettled(promises).then(items => {
    items.forEach((item, idx) => {
      box.children[idx].textContent = '';
      setTimeout(() => {
        box.children[idx].textContent = item.value || item.reason;
        if (idx === items.length - 1) {
          const instance = basicLightbox.create(
            `<div>${isWinner ? 'WINNER' : 'LOSER'} <\div>`
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

// console.log(createPromise(5).then((response)=>`OK ${response}`).catch((err) =>`NOOO ${err}`));
