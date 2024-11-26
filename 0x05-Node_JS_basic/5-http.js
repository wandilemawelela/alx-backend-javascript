const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

// Helper function to read the database file and parse its content
function readDatabase (databasePath) {
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

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathName = parsedUrl.pathname;

  if (pathName === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (pathName === '/students') {
    const databasePath = path.resolve(__dirname, process.argv[2]);
    if (!process.argv[2]) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Database path argument is missing');
      return;
    }

    readDatabase(databasePath)
      .then((students) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('This is the list of our students\n');

        for (const [field, names] of Object.entries(students)) {
          res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
        }

        res.end();
      })
      .catch((err) => {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end(err.message);
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
