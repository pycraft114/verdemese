const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data));

function getCitiesWhenInput() {
  const filtered = cities.filter(place => {
    const regex = new RegExp (this.value, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  })

  const addToSuggestions = document.querySelector('.suggestions');
  addToSuggestions.innerHTML = filtered.map(place =>
    `<li>
      <span>${place.city}, ${place.state}</span>
      <span>${place.population}</span>
    </li>`).join('') || '<li>Nothing found</li>';
    //join method를 사용하여, 하나의 string으로 만듦.
}

document.querySelector('.search').addEventListener('input', getCitiesWhenInput);
