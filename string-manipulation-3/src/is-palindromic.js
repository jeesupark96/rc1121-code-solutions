/* exported isPalindromic */
// define a function named isPalindromic with one parameter string
// call an if statement with the argument, the charAt method at 0 of the string and set it strictly equal to the charAt of the last element in the string
// if true, return true, if false, return false.

function isPalindromic(string) {
  var newArray = [];
  var splitString = string.split(' ').join('');
  for (var i = 0; i < string.length; i++) {
    newArray.unshift(string.charAt(i));
    var finalArray = newArray.join('');
    var lastArray = finalArray.split(' ').join('');
  }
  if (splitString === lastArray) {
    return true;
  } else return false;
}
// define a function named isPalindromic with one parameter string
// create a variable that can store an array
// call the split method and the join method of the string object
// call a for loop that iterates the variable i through the string length
// call the unshift method and add your results from the for loop into the newArray
// call the join method for the newArray and assign it to the variable finalArray
// call the split and join method of the object finalArray and assign it to the variable lastArray
// call an if statement that states that if splitString is strictly equal to lastArray, then return true, if is not true, return false
