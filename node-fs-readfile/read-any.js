const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  console.log(data);
});

console.log(process.argv[2]);
