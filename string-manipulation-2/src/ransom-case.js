/* exported ransomCase */
// define function named ransomCase with one parameter 'string'
// call a split method to the string object
// call a for loop with the expression looping the variable i through the string array
// call an if statement with the condition, if parameter 'string' / 2 leaves a remainder of 1
// if condition is true, commit a toUpperCase method at charAt method at i for the string parameter.
// if condition is false, commit a toLowerCase method at charAt method at i for the string parameter.
// assign results to the variable newArray
// call the join method for the newArray object and assign it to the variable 'newString'
// return newString
function ransomCase(string) {
  var finalString = '';
  for (var i = 0; i < string.length; i++) {
    finalString += i % 2 === 1 ? string.charAt(i).toUpperCase() : string.charAt(i).toLowerCase();
  }
  return finalString;
}

// define function named ransomCase with one parameter 'string'
// call a string named finalString
// call a for loop and iterate variable i through the length of the string
// set an expression that adds the result of the ternary operator to the string finalString
// return finalString
