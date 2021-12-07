function convertMinutesToSeconds(minutes) {
  var seconds = (minutes * 60);
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var names = name;
  return names;
}
var greetResult = greet('Beavis');
console.log('greetResult:', '"Hey, ' + greetResult + '"');

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResults = getArea(17, 42);
console.log('getAreaResult:', getAreaResults);

function getFirstName(person) {
  var first = person.firstName;
  return first;
}
var getFirstNameResults = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('getFirstNameResult:', getFirstNameResults);

function getLastElement(array) {
  var last = array[array.length - 1];
  return last;
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('getLastElementResult:', getLastElementResult);
