const selectors = {
  btn: document.querySelector('.js-btn'),
  box: document.querySelector('.js-container'),
  field: document.querySelector('.js-item')
};
const {btn, box, field} = selectors;
btn.addEventListener('click', handlerClick);
function handlerClick() {

  const promises = [...box.children].map((item, idx) =>{
    // item.textContent = '';
   createPromise(idx).
  than((response)=>{item.textContent =response}).
  catch((err) => {item.textContent = err})
  }
  )
};
function createPromise(del) {
  return new Promise((res, rej) =>{
   setInterval(() =>{
     const random = Math.random();
    if(random > 0.5) {
      res('OK')
    }
    else {
      rej('NO')
    }
   }, 1000)
  })
}

console.log(createPromise(5).than((response)=>`OK ${response}`).catch((err) =>`NOOO ${err}`));