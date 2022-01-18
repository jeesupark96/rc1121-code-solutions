/* exported pick */
// define function named pick with two parameters source and keys
// declare a new object to store variables
// assign keys of the source to the new object
// assign the return the assigned keys to a variable and return it
function pick(source, keys) {
  var res = {};
  for (var k of keys) {
    var v = source[k];
    if (v !== undefined) {

      res[k] = v;
    }

  }
  return res;
}

// define a fucntion named pick with two parameters source and keys
// create an empty object and assign to variable res
// call a for of loop that loops through the parameter keys
// assign the result of key of source to the variable v
// call an if statement
// return object res
