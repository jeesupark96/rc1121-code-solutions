/* exported getKeys */
// define a function named 'getKeys' with a single parameter 'object'
// call a for loop and iterate the variabl i through the object
// return the array with the index of i

function getKeys(object) {
  var newArray = [];
  for (var property in object) {
    var objectKeys = property;
    newArray.push(objectKeys);
  }
  return newArray;
}

// define a function named 'getKeys' with a single parameter 'object'
// define an array called 'newArray'
// iterate through the property of the object
// assign values of property to the variable 'objectKeys'
// assign the contents of objectKeys to the newArray
// return newArray
