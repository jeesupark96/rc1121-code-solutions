/* exported getFullNameOfPerson */
function getFullNameOfPerson(person) {
  var last = person.firstName + ' ' + person.lastName;
  return last;
}

getFullNameOfPerson({ firstName: 'Ada', lastName: 'Lovelace' });
