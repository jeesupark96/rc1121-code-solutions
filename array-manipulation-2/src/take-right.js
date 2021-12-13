/* exported takeRight */
function takeRight(array, count) {
  var newArray = array.slice((array.length) - count, array.length);
  return newArray;
}
