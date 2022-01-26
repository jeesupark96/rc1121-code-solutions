const express = require('express');
const data = require('./data.json');
const app = express();
const fs = require('fs');

app.get('/api/notes', (req, res) => {
  res.status(200).json(data);
  return res.status().json();
});

app.get('/api/notes/:id', (req, res) => {
  const number = parseInt(req.params.id);
  if (number < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return res.status().json();
  } else if (data.notes[number] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
    return res.status().json();
  } else if (number in data.notes) {
    res.status(200).json(data.notes[number]);
    return res.status().json();
  }

});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (!('content' in req.body)) {
    res.status(400).json({ error: 'content is a required field' });
    return res.status().json();
  } else if ('content' in req.body) {
    data.notes[data.nextId] = req.body;
    data.notes[data.nextId].id = data.nextId;
    data.nextId++;
    res.status(201).json(req.body);

  }
  const final = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', final, 'utf8', err => {
    if (err) {
      res.status(500).json({ error: 'An unexpected error occured.' });
    }
    return res.status(201).json();
  });

});

app.delete('/api/notes/:id', (req, res) => {
  const number = parseInt(req.params.id);
  if (number < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return res.status().json();
  } else if (data.notes[number] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${number}` });
    return res.status().json();
  } else if (number === data.notes[req.params.id].id) {
    delete data.notes[req.params.id];
    res.status(204).json();

  }
  const final = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', final, 'utf8', err => {
    if (err) {
      res.status(500).json({ error: 'An unexpected error occured.' });
    }

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
  } else if (data.notes[number] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${number}` });
    return res.status().json();
  } else if (data.notes[number] !== undefined) {
    data.notes[number] = req.body;
    data.notes[number].id = number;
    res.status(200).json();

  }
  const final = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', final, 'utf8', err => {
    if (err) {
      res.status(500).json({ error: 'An unexpected error occured.' });
    }
    return res.status().json();
  });
});

app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('Listening to Port 3000');
});
