
const fs = require('fs');
const json = require('./data.json');

const update = (enter, enter2) => {
  json.notes[enter] = enter2;
  const final = JSON.stringify(json, null, 2);
  fs.writeFile('data.json', final, 'utf8', err => {
    if (err) {
      throw err;
    }

  });
};

module.exports = update;
