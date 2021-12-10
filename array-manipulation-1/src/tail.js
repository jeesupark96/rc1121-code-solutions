/* exported tail */
// define the function named 'tail' with the parameter 'array'
// call the array and subtract the array with the index of 0
// assign that value to the variable newArray
// return newArray
function tail(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// define the function named 'tail' with the parameter 'array'
// create an array to store values
// iterate the variable i through the array parameter
// call and if statement with one condition, that if variable i does not equal 0
// if condition is true, push the array[i] into the newArray array
// return newArray
