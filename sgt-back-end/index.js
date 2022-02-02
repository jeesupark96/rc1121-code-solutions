const pg = require('pg');
const express = require('express');
const app = express();

app.use(express.json());

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {

  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
      `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;

      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured'
      });
    });

});

app.post('/api/grades', (req, res) => {
  const insName = req.body.name;
  const insCourse = req.body.course;
  const insScore = req.body.score;
  if (!insName) {
    return res.status(400).json({ error: 'Missing input for Name' });
  } else if (insScore > 100 || insScore < 0) {
    return res.status(400).json({ error: 'Invalid input for Score' });
  } else if (!insCourse) {
    return res.status(400).json({ error: 'Invalid input for Course' });
  }

  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
      `;

  const params = [insName, insCourse, insScore];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          Error: 'Input Value is incorrect'
        });
      } else {
        res.status(201).json(grade);
      }

    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured'
      });
    });

});

app.put('/api/grades/:gradeId', (req, res) => {
  const insName = req.body.name;
  const insCourse = req.body.course;
  const insScore = req.body.score;
  const gradeId = req.params.gradeId;
  if (!insName) {
    return res.status(400).json({ error: 'Missing input for Name' });
  } else if (insScore > 100 || insScore < 0) {
    return res.status(400).json({ error: 'Invalid input for Score' });
  } else if (!insCourse) {
    return res.status(400).json({ error: 'Invalid input for Course' });
  }
  const sql = `
    update "grades"
    set "name" = '$1',
        "course" = '$2',
        "score" = '$3'
    where "gradeId" = $4
    returning*;
      `;
  const params = [insName, insCourse, insScore, gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json();
      } else {
        res.status(201).json(grade);
      }

    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured'
      });
    });

});

app.delete('/api/grades/:gradeId', (req, res) => {

  const gradeId = req.params.gradeId;

  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning*;
      `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          Error: `Cannot find grade with "gradeId" ${req.params}`
        });
      } else {
        res.sendStatus(204);
      }

    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured'
      });
    });
});
app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('Listening to Port 3000');
});
