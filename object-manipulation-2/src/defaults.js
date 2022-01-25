/* exported defaults */
function defaults(target, source) {
  for (var key in target) {
    var targetKey = target[key];
  }
  for (key in source) {
    var sourceKey = source[key];
  }
  if (sourceKey === targetKey) {
    var newObj = Object.assign(target, source);
  }

  return newObj;
}
