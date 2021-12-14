/* exported includes */
// define a function named includes with two parameters array and value
// call a for loop that iterates the variable i through the array
// call an if statement with the condition, the array at the index i is strictly equal to the parameter count
// if it is true, return true, if it is false, return false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false;
}

// define a function named includes with two parameters array and value
// call a for loop that iterates the variable i through the array
// call an if statement with the condition, the array at the index i is strictly equal to the parameter count
// if it is true, return true, if it is false, return false
