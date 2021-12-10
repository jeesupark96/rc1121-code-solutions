/* exported capitalize */
function capitalize(word) {
  var first = word.toLowerCase();
  return word.charAt(0).toUpperCase() + first.slice(1);
}
