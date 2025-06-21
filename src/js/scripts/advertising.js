const selectors = {
  block: document.querySelector('.advertising-block'),
  text: document.querySelector('.advertising-text'),
  dayElem: document.querySelector('.date-day'),
  monthElem: document.querySelector('.date-month'),
  yearElem: document.querySelector('.date-year'),
  dateElem: document.querySelector('.date'),
  clock: document.querySelector('.js-digital-clock'),
};
const { block, text , dayElem, dateElem, monthElem,yearElem,  clock} = selectors;
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



const nameOfMonth =["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень" ];
const arrDay=["Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота"];
setInterval(()=>{
  const currentDate = new Date();
const day = currentDate.getDay();
const month = currentDate.getMonth(); 
const date = currentDate.getDate();
const year = currentDate.getFullYear();
const hours= currentDate.getHours();
const minutes= currentDate.getMinutes();
const seconds= currentDate.getSeconds();

dayElem.textContent =arrDay[day];
monthElem.textContent = nameOfMonth[month+1];
dateElem.textContent = date;
yearElem.textContent =year;
clock.textContent =`Поточний час ${hours}:${minutes}:${seconds}`
}, 1000)


