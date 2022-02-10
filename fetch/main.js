const fetchResponse = fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET'
})
  .then(response => response.json(fetchResponse))
  .then(data => console.log(data))
  .catch(console.error);

const pokemonResponse = fetch('https://pokeapi.co/api/v2/pokemon/4', {
  method: 'GET'
})
  .then(response => response.json(pokemonResponse))
  .then(data => console.log(data))
  .catch(console.error);
