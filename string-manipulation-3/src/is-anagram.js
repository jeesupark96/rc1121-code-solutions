/* exported isAnagram */
// define a function named isAnagram with two parameters firstString and secondString
// call the split and join method for the firstString object
// call another split method for the firstString object to get seperate elements
// call the split and join method for the secondString object
// call another split method for the secondString object to get seperate elements
// call an if statement with the condition, if secondString includes the first string, return true
// if the statement is not true return false

function isAnagram(firstString, secondString) {
  var newFirst = firstString.split(' ').join('');
  var finalFirst = newFirst.split('').sort().join('');

  var newSecond = secondString.split(' ').join('');
  var finalSecond = newSecond.split('').sort().join('');
  if (finalFirst === finalSecond) {
    return true;
  } else return false;
}

// define a function named isAnagram with two parameters firstString and secondString
// call the split and join method for the firstString object
// call another split method, sort method and join method for the firstString object to get seperate elements
// call the split and join method for the secondString object
// call another split method, sort method and join method for the secondString object to get seperate elements
// call an if statement with the condition, if secondString is strictly equal to the first string, return true
// if the statement is not true return false
