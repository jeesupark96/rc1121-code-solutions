/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var array = string.split('');
  [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
  var newarray = array.join('');
  return newarray;
}
