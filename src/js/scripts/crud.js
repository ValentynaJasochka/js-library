//POST and Create
const BASE_URL = 'https://jsonplaceholder.typicode.com/todos/';
const post = {
  completed: false,
  title: 'NOthing will change the facts',
  userId: 369,
};

let elem = { id: '' };

function servicePostPost(data) {
  const options = {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json',
  },
};
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
}
// servicePostPost(post)

//PATCH and PUT

const patch = {
  title: 'The best day in my life',
};
function servicePatchPost(id, data) {
  const options =   {
  method: 'PATCH',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json',
  },
};
fetch(`${BASE_URL}${id}`, options)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(err => console.log(err));
}

// servicePatchPost(1, patch)


  const put = {
  title: 'Viva changers',
};

function servicePutPost(id, data) {
  const options =   {
  method: 'PUT',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json',
  },
};
fetch(`${BASE_URL}${id}`, options)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(err => console.log(err));
}

// servicePutPost(1, put)


 ///DELETE

function serviceDeletePost (id) {
  const options ={
    method: 'DELETE'
  }
   fetch(`${BASE_URL}${1}`, options)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    console.log(response);
    return response.json();
  })
  .then(data => console.log(data))
  .catch(err => console.log(err));
}
// serviceDeletePost(1)