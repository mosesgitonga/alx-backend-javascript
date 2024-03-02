const http = require('http');
const fs = require('fs');

const PORT = 1245;

// Function to count students from a database file
async function countStudents(dbFilePath) {
  try {
    if (!fs.existsSync(dbFilePath)) {
      throw new Error('Cannot load the database');
    }
    if (!fs.statSync(dbFilePath).isFile()) {
      throw new Error('Cannot load the database');
    }

    const data = fs.readFileSync(dbFilePath, 'utf8'); // Synchronous file read

    let lines = data.split('\n');
    lines = lines.filter((line) => line.trim() !== '');

    const numberOfStudents = lines.length - 1;
    console.log(`Number of students: ${numberOfStudents}`);

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

    console.log(`Number of students in CS: ${CsCount}. List: ${firstNameCs}`);
    console.log(`Number of students in SWE: ${SweCount}. List: ${firstNameSwe}`);

    return `Number of students in CS: ${CsCount}. List: ${firstNameCs}\n` +
           `Number of students in SWE: ${SweCount}. List: ${firstNameSwe}\n`;

  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const outString = output.slice(0, -1);
      res.end(outString);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen(PORT, () => {
  console.log('server is active');
});