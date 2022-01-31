const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log('value of evenNumbers:', evenNumbers);

const orderFive = numbers.filter(number => number > 5);
console.log('value of orderFive:', orderFive);

const startsWithE = names.filter(name => name.charAt(0) === 'E');
console.log('value of startsWithE:', startsWithE);

const haveD = names.filter(name => name.toLowerCase().includes('d'));
console.log('value of haveD:', haveD);
