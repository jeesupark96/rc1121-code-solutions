/* exported chunk */
function chunk(array, size) {

  var chunks = [];
  var i = 0;
  var n = array.length;

  while (i < n) {
    chunks.push(array.slice(i, i += size));
  }

  return chunks;
}
