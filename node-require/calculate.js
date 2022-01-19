const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const mulitply = require('./multiply');

const num1 = parseInt(process.argv[2], 10);
const num2 = parseInt(process.argv[4], 10);

if (process.argv[3] === 'plus') {
  console.log(add(num1, num2));

} else if (process.argv[3] === 'minus') {
  console.log(subtract(num1, num2));
} else if (process.argv[3] === 'times') {
  console.log(mulitply(num1, num2));
} else if (process.argv[3] === 'divide') {
  console.log(divide(num1, num2));
}
