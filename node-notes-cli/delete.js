const fs = require('fs');
const json = require('./data.json');

const delt = enter => {
  delete json.notes[enter];

  const final = JSON.stringify(json, null, 2);
  fs.writeFile('data.json', final, 'utf8', err => {
    if (err) {
      throw err;
    }

  });
};

module.exports = delt;
