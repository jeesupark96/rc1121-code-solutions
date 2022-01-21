const json = require('./data.json');

const read = () => {

  for (var i = 1; i < json.nextId; i++) {
    if (json.notes[i] !== undefined) {

      const noteId = [i];
      console.log(`${noteId}: ${json.notes[noteId]}`);
    }
  }
};

module.exports = read;
