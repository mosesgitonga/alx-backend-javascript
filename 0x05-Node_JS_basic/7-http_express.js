const express = require('express');
const fs = require('fs');

function countStudents(dbFilePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dbFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Cannot load the database');
        reject(err);
        return;
      }

      let lines = data.split('\n');
      lines = lines.filter((line) => line.trim() !== '');

      const numberOfStudents = lines.length - 1;
      // console.log(`Number of students: ${numberOfStudents}`);

      let firstNameCs = '';
      let firstNameSwe = '';
      let CsCount = 0;
      let SweCount = 0;

      for (let i = 1; i < numberOfStudents + 1; i += 1) {
        if (lines[i]) {
          const student = lines[i];

          const firstName = student.split(',')[0];
          const field = student.split(',')[3];

          if (field === 'CS') {
            CsCount += 1;
            firstNameCs += `${firstName}, `;
          } else if (field === 'SWE') {
            SweCount += 1;
            firstNameSwe += `${firstName}, `;
          }
        }
      }

      firstNameCs = firstNameCs.slice(0, -2);
      firstNameSwe = firstNameSwe.slice(0, -2);

      // console.log(`Number of students in CS: ${CsCount}. List: ${firstNameCs}`);
      // console.log(`Number of students in SWE: ${SweCount}. List: ${firstNameSwe}`);
      const output = `Number of students: ${numberOfStudents}\nNumber of students in CS: ${CsCount}. List: ${firstNameCs}\nNumber of students in SWE: ${SweCount}. List: ${firstNameSwe}\n`;

      resolve(output);
    });
  });
}

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'plain/text');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.setHeader('Content-Type', 'plain/text');

  countStudents(process.argv[2].toString()).then((output) => {
    const outString = output.slice(0, -1);
    res.send(`This is the list of our students\n${outString}`);
  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port, () => {
  console.log('server is running on port 1245');
});

module.exports = app;
