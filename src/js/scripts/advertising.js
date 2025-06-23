const selectors = {
  block: document.querySelector('.advertising-block'),
  text: document.querySelector('.advertising-text'),
  dayElem: document.querySelector('.date-day'),
  monthElem: document.querySelector('.date-month'),
  yearElem: document.querySelector('.date-year'),
  dateElem: document.querySelector('.date'),
  clock: document.querySelector('.js-digital-clock'),
  seconds: document.querySelector('.clock-seconds__arrow'),
  minutes: document.querySelector('.clock-minutes__arrow'),
  hours: document.querySelector('.clock-hours__arrow'),
};
const { block, text, dayElem, dateElem, monthElem, yearElem, clock, seconds,minutes, hours } =
  selectors;
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

const nameOfMonth = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];
const arrDay = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  "П'ятниця",
  'Субота',
];
setInterval(() => {
  const currentDate = new Date();
  const day = currentDate.getDay();
  const month = currentDate.getMonth();
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();
  
  const localTime = currentDate.toLocaleTimeString('uk-UA');

  dayElem.textContent = arrDay[day];
  monthElem.textContent = nameOfMonth[month + 1];
  dateElem.textContent = date;
  yearElem.textContent = year;
  clock.textContent = `Поточний час ${localTime}`;
  const currentMinutes= currentDate.getMinutes();
  const currentSeconds= currentDate.getSeconds();
  const currentHours= currentDate.getHours();
  const secondDeg = 360 / 60 * currentSeconds;
  const minutedDeg = 360 / 60 * currentMinutes;
  const hourDeg = 360 / 12 * currentHours +(360 / 12 / 60) + currentMinutes;

  seconds.style.transform= `rotate(${secondDeg}deg)`;
  minutes.style.transform= `rotate(${minutedDeg}deg)`;
  hours.style.transform= `rotate(${hourDeg}deg)`;
  
}, 1000);

for (var i = 0; i <3; i+=1) {
const c =i;
  setTimeout(() =>console.log(c), 0)
}
// var i
// setTimeout(()=>{for ( i = 0; i <3; i+=1) {console.log(i)}}, 1000)
