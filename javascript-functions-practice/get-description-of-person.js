/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  return (person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.');
}

getDescriptionOfPerson({
  name: 'Ada Lovelace',
  occupation: 'countess',
  birthPlace: 'London, England'
});
