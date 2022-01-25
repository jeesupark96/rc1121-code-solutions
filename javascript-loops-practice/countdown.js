/* exported countdown */
function countdown(number) {
  var a = [];
  for (var i = 0; i <= number; i++) {
    a.unshift(i);
  }
  return a;
}

countdown(10);
