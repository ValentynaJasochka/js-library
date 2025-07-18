const selectors = {
  form: document.querySelector('.js-search'),
  formContainer: document.querySelector('.js-form-container'),
  addField: document.querySelector('.js-add'),
};
const { form, formContainer, addField } = selectors;

addField.addEventListener('click', handlerAdd);
form.addEventListener('submit', handlerSearch);
function handlerAdd() {
  formContainer.insertAdjacentHTML(
    'beforeend',
    ' <input type="text" name="country" />'
  );
}
async function handlerSearch(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.currentTarget);
  const countries = formData
    .getAll('country')
    .map(item => item.trim())
    .filter(item => item);
  console.log(countries);
  form.reset();
  const capitals = await serviceCountry(countries);
 const weather = await serviceWeather(capitals)
  console.log( weather);
}

async function serviceCountry(arr) {
  const Base_URL = 'https://restcountries.com/v3.1/name/';
  const responses = await arr.map(async country => {
    const resp = await fetch(`${Base_URL}${country}`);
    //  console.log(await resp.json());
    return resp.json();
  });
  const data = await Promise.allSettled(responses);
  return data
    .filter(({ status }) => status === 'fulfilled')
    .map(({ value }) => value[0].capital[0]);
  //  console.log(data);
}

async function serviceWeather(capitals) {
  const API_Key = 'd6ef5733ea0c4b55952125610252606';
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const EndPOINT = '/current.json';
  const responses = await capitals.map(async capital => {
    const response = await fetch(
      `${BASE_URL}${EndPOINT}?key=${API_Key}&q=${capital}&lang=uk`
    );
    return response.json();
  });
  // console.log(responses);
  const data = await Promise.allSettled(responses);
    console.log(data);
const weather =  data
    .filter(({ status }) => status === 'fulfilled')
    .map(
      ({
        value: {
          current: {
            temp_c,
            condition: { text, icon },
          },
          location: { country, name },
        },
      }) => {return { country, name, text, temp_c, icon }
      }
    );
    return weather;
}

// const service = {
//   countries: ['Ukraine', 'France', 'Poland'],
//   async serviceCountry() {
//     const responses = this.countries.map(async country => {
//       const resp = await fetch(
//         `https://restcountries.com/v3.1/name/${country}`
//       );
//        console.log(await resp.json());
//       return resp.json();
//     });

//   },
// };
