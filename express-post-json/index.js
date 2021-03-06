const express = require('express');
const app = express();

var nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradeArray = [];
  for (const prop in grades) {
    gradeArray.push(grades[prop]);

  }
  res.json(gradeArray);
});

app.use(express.json());

app.post('/api/grades/', (req, res) => {
  grades[nextId] = {
    id: nextId,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };
  nextId++;
  res.status(201).json(grades);
});

app.listen(3000, (req, res) => {

  // eslint-disable-next-line no-console
  console.log('Listening at Port 3000');
});
