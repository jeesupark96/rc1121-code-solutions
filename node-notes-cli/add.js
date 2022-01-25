const fs = require('fs');
const json = require('./data.json');
const newID = json.nextId;

const add = enter => {
  json.notes[newID] = (enter);
  json.nextId++;
  const final = JSON.stringify(json, null, 2);
  fs.writeFile('data.json', final, 'utf8', err => {
    if (err) {
      throw err;
    }

  });

};

module.exports = add;
