/* exported isUpperCased */
function isUpperCased(word) {
  if (word.slice() === word.toUpperCase()) {
    return true;
  } else return false;
}

// define a function names 'isUpperCased' which is called with a single parameter 'word'
// call an if statement with one condition, if the result of the slice method on word is strictly equally to the toUpperCase method of word, then the function will be called.
// if the function is true, return true
// if the function is not true, return false.
