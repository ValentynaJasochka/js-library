//POST and Create
const BASE_URL = 'https://jsonplaceholder.typicode.com/todos/';
const post = {
  completed: false,
  title: 'NOthing will change the facts',
  userId: 369,
};
const options = {
  method: 'POST',
  body: JSON.stringify(post),
  headers: {
    'Content-type': 'application/json',
  },
};
let elem = { id: '' };
fetch(`${BASE_URL}`, options)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    elem.id = data.id;
  })
  .catch(err => console.log(err));

//PATCH and PUT
console.log(elem);
const patch = {
  title: 'The best day in my life',
};
const patchOptions =   {
  method: 'PATCH',
  body: JSON.stringify(patch),
  headers: {
    'Content-type': 'application/json',
  },
};
fetch(`${BASE_URL}${1}`, patchOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(err => console.log(err));
