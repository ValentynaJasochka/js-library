//Bearer Tokien
// const BASE_URL = 'https://the-one-api.dev/v2';
// const EndPOINT = '/character';
// const Bearer = 'ShvEHHIdjxODJbTBL1Tm'
// const options ={
//   headers: {
//     Authorization: `Bearer ${Bearer}`,
//     'Content-Type': 'application/json',
//   }
// }
// fetch(`${BASE_URL}${EndPOINT}?limit=32&page=1`, options)
// .then((resp) =>{
//   if (!resp) {
//     throw new Error(resp.statusText)
//   }
//   // console.dir(resp.json());
//   return resp.json()
// })
// .then(data => console.log(data))
// .catch(err=> console.log(err));


///movies

const API_Key = '1458aa5a0f3768251d977a5078bcec84';
const BASE_URL = 'https://api.themoviedb.org/3';
const EndPOINT = '/trending/movie/week';
const selectors = {
  load: document.querySelector('.js-load-more'),
  movieList: document.querySelector('.js-movie-list'),
};
const { load, movieList } = selectors;
let page =1;
load.addEventListener("click", onLoadMore)
function onLoadMore() {
  page +=1;
  serviceMovie(page).then(data => movieList.insertAdjacentHTML('beforeend', createMarkup(data.results))).catch(err=> console.log(err))
}
function serviceMovie(page=1) {
return fetch(`${BASE_URL}${EndPOINT}?api_key=${API_Key}&page=${page}`)
.then((resp) =>{
  if (!resp) {
    throw new Error(resp.statusText)
  }
  return resp.json()
})

};
serviceMovie(1).then(data => movieList.insertAdjacentHTML('beforeend', createMarkup(data.results))).catch(err=> console.log(err));
function createMarkup(arr) {
  return arr.map(({poster_path, release_date, original_title,vote_average}) =>{ return `<li class="movie-card">
        <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}" class="movie-img">
        <h2 class="movie-name">${original_title}</h2>
        <p>${release_date}</p>
        <p>${vote_average}</p>
      </li>`}).join('')
}
