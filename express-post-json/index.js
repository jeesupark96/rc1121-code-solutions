const express = require('express');
const app = express();

var nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradeArray = [];

  gradeArray.push(grades);

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
  res.send(grades);
});

app.listen(3000, (req, res) => {

  // eslint-disable-next-line no-console
  console.log('Listening at Port 3000');
});
