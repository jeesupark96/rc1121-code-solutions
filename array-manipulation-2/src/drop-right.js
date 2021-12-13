/* exported dropRight */
function dropRight(array, count) {
  var result = array.slice(0, (array.length - count));
  return result;
}
