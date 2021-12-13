/* exported capitalizeWords */
function capitalizeWords(string) {
  var array = string.split(' ');
  var arrayOne = [];
  for (var i = 0; i < array.length; i++) {
    var newArray = array[i].charAt(0).toUpperCase() + array[i].substring(1).toLowerCase();
    arrayOne.push(newArray);
    var lastString = arrayOne.join(' ');
  }
  return lastString;
}
