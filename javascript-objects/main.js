var student = {
  firstName: 'Jeesu',
  lastName: 'Park',
  age: 25
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Pastor';
console.log('value of livesinIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Honda',
  model: 'Accord Coupe',
  year: 2017
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('value of vehicle[color]:', vehicle['color']);
console.log('value of vehicle[isConvertible]:', vehicle['isConvertible']);

console.log(vehicle);

var pet = {
  name: 'George',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
