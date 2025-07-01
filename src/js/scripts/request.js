//https://pokeapi.co

const API_Key = 'd6ef5733ea0c4b55952125610252606';
const BASE_URL = 'http://api.weatherapi.com/v1';
const EndPOINT = '/forecast.json';
const BRN_Tokien = 'ShvEHHIdjxODJbTBL1Tm'
const selectors = {
  form: document.querySelector('.js-weather'),
  weatherList: document.querySelector('.js-weather-list'),
};
const { form, weatherList } = selectors;

form.addEventListener('submit', handlerSearch);

function handlerSearch(evt) {
  evt.preventDefault();
  const {
    query: { value: country },
    days: { value: daysLong },
  } = evt.currentTarget.elements;

  console.dir(daysLong);
  console.dir(country);
  // weatherList.innerHTML = createMarkup(data.forecast)
  // console.logcreateMarkup((data.forecast.forecastday));

  serviceForecast(country, daysLong)
    .then(
      data => (weatherList.innerHTML = createMarkup(data.forecast.forecastday))
    )
    .catch(err => console.log(err));
}
function serviceForecast(city, days) {
  const params = new URLSearchParams({
    key: API_Key,
    q: city,
    days: days,
    lang: 'uk',
  });
  return fetch(`${BASE_URL}${EndPOINT}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
function createMarkup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { text, icon },
        },
      }) => {
        return (markup = `<li>
          <img src="${icon}" alt="${text}">
          <h3 >Дата:${date}</h3>
          <h3>${text}</h3>
          <h3>Температура:${avgtemp_c}</h3>
          
        </li>`);
      }
    )
    .join('');
}

console.log(createMarkup([]));
