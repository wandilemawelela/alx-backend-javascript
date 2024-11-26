const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Helper function to read the database file and parse its content
function readDatabase(databasePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(databasePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        if (lines.length === 0) {
          resolve({});
          return;
        }
        const students = {};

        lines.forEach((line) => {
          const [field, firstName, lastName, age, city] = line.split(',');
          if (field && firstName && lastName && age && city) {
            if (!students[field]) {
              students[field] = [];
            }
            students[field].push(firstName);
          }
        });

        resolve(students);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = path.resolve(__dirname, process.argv[2]);
  if (!process.argv[2]) {
    res.status(400).send('Database path argument is missing');
    return;
  }

  readDatabase(databasePath)
    .then((students) => {
      res.set('Content-Type', 'text/plain');
      res.write('This is the list of our students\n');

      for (const [field, names] of Object.entries(students)) {
        res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
      }

      res.end();
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;

