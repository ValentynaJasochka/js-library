//POST and Create
const BASE_URL ='https://jsonplaceholder.typicode.com/todos/';
const post= { 
completed:false,
title: "NOthing will change the facts",
userId: 369,
}
const options ={
  method:"POST",
  body: JSON.stringify(),
  headers:{
    'Content-type': 'application/json',
  }
}


fetch(`${BASE_URL}`,options)
      .then(response => {
        console.log(response);
        if(!response.ok) {
          throw new Error(response.statusText)
        }
      }).catch(err => console.log(err))
      