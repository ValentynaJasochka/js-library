const selectors = {
  form: document.querySelector('.js-search'),
   formContainer: document.querySelector('.js-form-container'),
  addField: document.querySelector('.js-add'),
};
const { form, formContainer, addField } = selectors;



addField.addEventListener('click', handlerAdd)
form.addEventListener('submit', handlerSearch)
function handlerAdd() {
  formContainer.insertAdjacentHTML('beforeend', ' <input type="text" name="country" />')
}
function handlerSearch(evt) {
  evt.preventDefault()
  const formData = new FormData(evt.currentTarget)
  const countries = formData.getAll('country').map(item =>item.trim()).filter(item =>item)
  console.log(countries);
  form.reset()
}

const service = {
  countries: ['Ukraine', 'France', 'Poland'],
  async serviceCountry() {
    const responses = this.countries.map(async country => {
      const resp = await fetch(
        `https://restcountries.com/v3.1/name/${country}`
      );
      //  console.log(await resp.json());
      return resp.json();
    });
    //  const response = await fetch(`https://restcountries.com/v3.1/name/${this.countryName}`)
    //   if(!response.ok) {
    //     throw new Error(response.statusText)
    //   }
    //   const data = await response.json()
    //   console.log(data);
  },
};
// service.serviceCountry().then(data => data.json());
