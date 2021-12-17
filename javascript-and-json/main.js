var newArray = [
  {
    isbn: '12345',
    title: 'This Is Life',
    author: 'George McGeorge'
  },
  {
    isbn: '134938',
    title: 'Welcome to The World',
    author: 'Ronald Donald'
  },
  {
    isbn: '029384',
    title: 'Southern California',
    author: 'Arnold S.'
  }
];
console.log('typeof newArray: ', typeof newArray);

var jsonString = JSON.stringify(newArray);
console.log('typeof JSON.stringify newArray: ', typeof jsonString);

var student = '{"numberid":1234, "Stringname":"student"}';
console.log('typeof student:', typeof student);

var jsonParse = JSON.parse(student);
console.log('typeof jsonParse:', typeof jsonParse);
