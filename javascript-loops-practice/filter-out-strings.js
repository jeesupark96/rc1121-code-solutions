/* exported filterOutStrings */
function filterOutStrings(values) {
  var noStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === typeof 0) {
      noStrings.push(values[i]);
    }
  }
  return noStrings;
}
