var first = 1;
var second = 2;
var third = 3;

var maximumValue = Math.max(first, second, third);
console.log('maximumValue: ', maximumValue);

var heroes = ['Superman', 'Batman', 'Spiderman', 'Invincible'];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('randomIndex: ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

var library = [{
  title: 'Book for Dummies',
  author: 'John Wayne'
},
{
  title: 'Narnia',
  author: 'C.S Lewis'
},
{
  title: 'Science',
  author: 'Bill Nye'
}];

var lastBook = library.pop();
console.log('lastBook: ', lastBook);

var firstBook = library.shift();
console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library: ', library);

var fullName = 'Jeesu Park';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
