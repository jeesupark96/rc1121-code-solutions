const fetchResponse = fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET'
})
  .then(response => response.json(fetchResponse))
  .catch(console.error);
console.log(fetchResponse);

const pokemonResponse = fetch('https://pokeapi.co/api/v2/pokemon/4', {
  method: 'GET'
})
  .then(response => response.json(pokemonResponse))
  .catch(console.error);
console.log([pokemonResponse]);
