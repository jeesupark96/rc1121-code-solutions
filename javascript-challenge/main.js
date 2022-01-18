function total(start, end) {
  var sum = 0;
  for (var i = start; i <= end; i++) {
    if (i >= start) {
      sum += i;
    } else if (i <= end) {
      sum += i;
    }
  } return sum;
}

function odds(start, end) {
  var array = [];
  for (var i = start; i <= end; i++) {
    if (i % 2 === 1) {
      array.push(i);
    }
  } return array;
}

function evens(start, end) {
  var array = [];
  for (var i = start; i <= end; i++) {
    if (i % 2 === 0) {
      array.push(i);

    }
  } return array;
}

function range(start, end) {
  var array = [];
  for (var i = start; i <= end; i++) {
    if (i >= start) {
      array.push(i);
    } else if (i <= end) {
      array.push(i);
    }
  } return array;
}
function average(start, end) {
  var array = [];
  for (var i = start; i <= end; i++) {
    if (i >= start) {
      array.push(i);
    } else if (i <= end) {
      array.push(i);
    }
    var sum = 0;
    for (var j = 0; j < array.length; j++) {
      sum += array[j];
    }
  } return (sum / array.length);
}

function getRangeReport(start, end) {
  var newObj = {
    total: total(start, end),
    odds: odds(start, end),
    evens: evens(start, end),
    range: range(start, end),
    average: average(start, end)
  };
  return newObj;
}
// total: var sum = 0;
// for (var i = start; i <= end; i++) {
//  if (i >= start) {
//   sum += i;
// } else if (i <= end) {
//   sum += i;
// }
// } return sum;
// odds: var array = [];
// for (var i = start; i <= end; i++) {
// if (i % 2 === 1) {
//   array.push(i);
// }
// } return array;
// }
// evens:var array = [];
// for (var i = start; i <= end; i++) {
// if (i % 2 === 0) {
//   array.push(i);
// }
// } return array;
// }
// average:
// range: var array = [];
// for (var i = start; i <= end; i++) {
// if (i >= start) {
//  array.push(i);
// } else if (i <= end) {
//  array.push(i);
// }
// } return array;

// var array = [];
// for (var i = start; i <= end; i++) {
//   if (i >= start) {
//     array.push(i);
//   } else if (i <= end) {
//   array.push(i);
//   }
//   var sum = 0;
//   for (var j = 0; j < array.length; j++) {
//     sum += array[j];
//   }
// } return (sum / array.length);
// }
