/* exported truncate */
// define function named 'truncate' with two parameters 'length' and 'string'
// call the slice method for the parameter string with a condition of the length of the parameter length.
// concat the ellipsis ... to the end of the new string

function truncate(length, string) {
  var newString = string.slice(0, length);
  return newString + '...';
}

// define function named 'truncate' with two parameters 'length' and 'string'
// call the slice method for the string parameter with two arguments, 0 index, and the parameter length
// then return variable newString with a concatenation '...'
