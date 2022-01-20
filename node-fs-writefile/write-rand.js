const fs = require('fs');

const math = Math.random() + '\n';
fs.writeFile('random.txt', math, err => {
  if (err) throw err;
});
