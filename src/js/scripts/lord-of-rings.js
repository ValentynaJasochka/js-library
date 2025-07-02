const API_Key = 'd6ef5733ea0c4b55952125610252606';
const BASE_URL = 'https://the-one-api.dev/v2';
const EndPOINT = '/character';
const Bearer = 'ShvEHHIdjxODJbTBL1Tm'
const selectors = {
  form: document.querySelector('.js-weather'),
  weatherList: document.querySelector('.js-weather-list'),
};
const { form, weatherList } = selectors;

const options ={
  headers: {
    Authorization: `Bearer ${Bearer}`,
    'Content-Type': 'application/json',
  }
}
fetch(`${BASE_URL}${EndPOINT}`, options)
.then((resp) =>{
  if (!resp) {
    throw new Error(resp.statusText)
  }
  // console.dir(resp.json());
  return resp.json()
})
.then(data => console.log(data))
.catch(err=> console.log(err));