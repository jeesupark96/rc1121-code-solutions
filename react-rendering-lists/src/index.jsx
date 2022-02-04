import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
const newArray = pokedex.map(names =>
   <li key={name}>{names.name}</li>
);
ReactDOM.render(
  <ul>
{newArray}
  </ul>,
  document.querySelector('#root')
);
