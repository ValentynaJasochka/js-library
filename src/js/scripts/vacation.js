async function serviceCountry () {
  const response = await fetch('https://restcountries.com/v3.1/name/ukraine')
  if(!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  console.log(data);
}
serviceCountry()