const express = require('express');
const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res, next) => {
  const newarray = [];
  for (const prop in grades) {
    const result = grades[prop];
    newarray.push(result);
  }
  res.json(newarray);
  next();
});

app.delete('/api/grades/:id', (req, res) => {
  const newarray = [];
  for (const prop in grades) {
    const result = grades[prop];
    if (prop !== req.params.id) {
      newarray.push(result);
    }
  }
  res.json(newarray);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening at Port 3000');
});
