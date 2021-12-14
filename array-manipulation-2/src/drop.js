/* exported drop */
// define a function named drop with two parameters array and count
// call a substring method with two arguments array.length - count, count
// assign the result to a variable result and return result

function drop(array, count) {
  var result = array.slice(count, array.length);
  return result;
}

// define a function named drop with two parameters array and count
// call the slice method of the object array with two arguments, count and length of the array
// assign the result to the variable result and return the variable result
