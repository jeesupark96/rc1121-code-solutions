/* exported numVowels */
function numVowels(string) {
  var array = string.split('');
  var strings = '';
  for (var i = 0; i < array.length; i++) {
    if ((array[i] === 'a') || (array[i] === 'A') || (array[i] === 'e') || (array[i] === 'E') || (array[i] === 'i') || (array[i] === 'I') || (array[i] === 'o') || (array[i] === 'O') || (array[i] === 'u') || (array[i] === 'U')) {
      strings += +1;

    }
  }
  return strings.length;
}
