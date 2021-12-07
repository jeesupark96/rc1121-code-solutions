function convertMinutesToSeconds(minutes) {
  var seconds = (minutes * 60);
  console.log('convertMinutesToSeconds:', seconds);
}

convertMinutesToSeconds(5);

function greet(name) {
  console.log('"Hey, ' + name + '"');
}

greet('Beavis');

function getArea(width, height) {
  var area = width * height;
  console.log('getArea results:', area);
}

getArea(17, 42);

function getFirstName(person) {
  var name = person.firstName;
  console.log('First Name of Person:', name);
}

getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

function getLastElement(array) {
  var last = array[array.length - 1];
  console.log('result of getLastElement:', last);
}

getLastElement(['propane', 'and', 'propane', 'accessories']);
