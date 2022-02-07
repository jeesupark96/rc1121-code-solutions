const express = require('express');
const path = require('path');

const app = express();

app.get('/index.js', (req, res) => {
  const dirname = path.join(__dirname, 'public');
  res.json(dirname);
});

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Listening on Port 3000');
});
