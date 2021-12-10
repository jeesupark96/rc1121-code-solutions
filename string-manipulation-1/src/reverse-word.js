/* exported reverseWord */
function reverseWord(word) {
  var newArray = [];
  for (var i = 0; i < word.length; i++) {
    newArray.unshift(word.charAt(i));
    var finalArray = newArray.join('');
  }
  return finalArray;
}
