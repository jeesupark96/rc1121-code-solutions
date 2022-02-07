const express = require('express');
const path = require('path');

const app = express();

const pathName = path.join(__dirname, 'public');
const staticPath = express.static(pathName);

app.use(staticPath);

app.listen(3000, () => {
  console.log('Listening on Port 3000');
});
