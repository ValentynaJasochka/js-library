//https://pokeapi.co

const API_Key = 'd6ef5733ea0c4b55952125610252606';
const BASE_URL = 'http://api.weatherapi.com/v1';
const EndPOINT = '/forecast.json';
fetch(`${BASE_URL}${EndPOINT}?key=${API_Key}&q=Krakow&days=3`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(err => console.log(err));
