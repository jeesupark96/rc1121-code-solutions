const fs = require('fs');

const quote = process.argv[2] + '\n';
fs.writeFile('note.txt', quote, err => {
  if (err) throw err;
});
