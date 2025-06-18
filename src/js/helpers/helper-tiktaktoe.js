import { gameMarkup } from "../scripts/script";
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



function handlerClickForTikTakToe(evt) {
  if (evt.target === evt.currentTarget || evt.target.textContent) {
    return;
  }
  let isWinner = false;
  let id = Number(evt.target.dataset.id);
  if (player === "X") {
    historyX.push(id);
    isWinner = historyX.length >= 3 ? checkWinnerForTikTakToe(historyX) : false;
  } else {
    historyO.push(id);
    isWinner = historyO.length >= 3 ? checkWinnerForTikTakToe(historyO) : false;
  }

  if (isWinner) {
    const instance = basicLightbox.create(`
     <div class ="box"> <h1>Player ${player} is winner</h1></div>
    `);
    instance.show();
    resetGameForTikTakToe();
    return;
  }
  evt.target.textContent = player;
  player = player === "X" ? "O" : "X";
}
function checkWinnerForTikTakToe(arr) {
  return combinations.some((item) => item.every((id) => arr.includes(id)));
}
function resetGameForTikTakToe() {
  gameMarkup();
  player = "X";
  historyX.splice(0);
  historyO.splice(0);
}
export {handlerClickForTikTakToe, resetGameForTikTakToe, checkWinnerForTikTakToe}