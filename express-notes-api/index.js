const express = require('express');
const data = require('./data.json');
const app = express();
const fs = require('fs');

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const prop in data.notes) {
    notesArray.push(data.notes[prop]);
  }
  return res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const number = parseInt(req.params.id);
  if (number < 0) {
    return res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[number]) {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
    return res.status().json();
  } else if (number in data.notes) {
    return res.json(data.notes[number]);

  }

});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (!('content' in req.body)) {
    res.status(400).json({ error: 'content is a required field' });
    return res.status(400).json();
  } else {
    data.notes[data.nextId] = req.body;
    data.notes[data.nextId].id = data.nextId;
    data.nextId++;

  }
  const final = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', final, 'utf8', err => {
    if (err) {
      return res.status(500).json({ error: 'An unexpected error occured.' });
    }
    return res.status(201).json(req.body);
  });

});

app.delete('/api/notes/:id', (req, res) => {
  const number = parseInt(req.params.id);
  if (number < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return res.status().json();
  } else if (!data.notes[number]) {
    res.status(404).json({ error: `cannot find note with id ${number}` });
    return res.status().json();
  } else {
    delete data.notes[req.params.id];

  }
  const final = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', final, 'utf8', err => {
    if (err) {
      return res.status(500).json({ error: 'An unexpected error occured.' });
    }
    return res.sendStatus(204);
  });
});

app.put('/api/notes/:id', (req, res) => {
  const number = parseInt(req.params.id);
  if (number < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return res.status().json();
  } else if (!('content' in req.body)) {
    res.status(400).json({ error: 'content is a required field' });
    return res.status().json();
  } else if (!data.notes[number]) {
    res.status(404).json({ error: `cannot find note with id ${number}` });
    return res.status().json();
  } else {
    data.notes[number] = req.body;
    data.notes[number].id = number;

  }
  const final = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', final, 'utf8', err => {
    if (err) {
      return res.status(500).json({ error: 'An unexpected error occured.' });
    }
    return res.sendStatus(200).res.json(data.notes[number]);
  });
});

app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('Listening to Port 3000');
});
