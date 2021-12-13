/* exported capitalizeWord */
// define function 'capitalizeWords' with a single parameter 'string'
// call the charAt method for the parameter word with the argument set to 0
// call the string index of 0 and call the method toUpperCase the word
// call the string index of 1 and call the method toLowerCase the word
// concat the string index of 0 with the string index of 1
// set the result of the concatenation to the variable called 'New String'
// return newString

function capitalizeWord(word) {
  var first = word.toLowerCase();
  if (first === 'javascript') {
    return word.charAt(0).toUpperCase() + first.substring(1, 4) + word.charAt(4).toUpperCase() + first.substring(5, 10);
  }
  return word.charAt(0).toUpperCase() + first.slice(1);
}

// define function 'capitalizeWords' with a single parameter 'string'
// create a variable 'first' assigned to the toLowerCase method of the object word
// create if statement with one condition, the string 'javascript' is strictly equal to the variable 'first'
// if condition is true, return toUpperCase method of the charAt method at index 0 of the object word plus the substring of first, plus another ToUpperCase method of the charAt of the word added with the substring of the first variable object.
// if condition is not true, add toUpperCase method of charAt method of word, to the slice method at 1 to the variable first
