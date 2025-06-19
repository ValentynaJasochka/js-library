const selectors = {
  block: document.querySelector('.advertising-block'),
  text: document.querySelector('.advertising-text'),
};
const { block, text } = selectors;
let counter = 5;
text.textContent = `Зачекайте ${counter} хвилин`;
const id = setInterval(() => {
  counter -= 1;
  text.textContent = `Зачекайте ${counter} хвилин`;
}, 1000);
setTimeout(() => {
  clearInterval(id);
  text.style.display = 'none';
}, counter * 1000);
