/* exported omit */
function omit(source, keys) {
  var res = {};
  for (var k of keys) {
    var v = source[k];
    if (v !== undefined && (source[k]) !== v) {

      res[k] = v;
    }

  }
  return res;
}
