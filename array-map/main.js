const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = number => {
  return number * 2;
};

const doubledResult = numbers.map(doubled);
console.log('value of doubled:', doubledResult);

const prices = number => {
  return '$' + number.toFixed(2);
};

const pricesResult = numbers.map(prices);
console.log('value of prices:', pricesResult);

const upperCased = language => {
  return language.toUpperCase();
};

const upperCasedResult = languages.map(upperCased);
console.log('value of upperCased:', upperCasedResult);

const firstLetters = language => {
  return language.charAt(0);
};

const firstLettersResult = languages.map(firstLetters);
console.log('value of firstLetters:', firstLettersResult);
