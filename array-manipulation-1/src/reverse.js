/* exported reverse */
function reverse(array) {
  var rArray = [];
  for (var i = 0; i < array.length; i++) {
    rArray.unshift(array[i]);
  }
  return rArray;
}
