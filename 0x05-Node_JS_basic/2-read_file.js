const fs = require('fs');

function countStudents(dbFilePath) {
  try {
    if (!fs.existsSync(dbFilePath)) {
      throw new Error('Cannot load the database');
    }
    if (!fs.statSync(dbFilePath).isFile()) {
      throw new Error('Cannot load the database');
    }
    const data = fs.readFileSync(dbFilePath, 'utf8');
    const lines = data.split('\n');

    const numberOfStudents = lines.length - 1;
    console.log(`Number of students: ${numberOfStudents}`);

    let firstNameCs = '';
    let firstNameSwe = '';
    let CsCount = 0;
    let SweCount = 0;

    for (let i = 1; i < numberOfStudents + 1; i += 1) {
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

    firstNameCs = firstNameCs.slice(0, -2);
    firstNameSwe = firstNameSwe.slice(0, -2);

    console.log(`Number of students in CS: ${CsCount}. List: ${firstNameCs}`);
    console.log(`Number of students in SWE: ${SweCount}. List: ${firstNameSwe}`);
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = countStudents;
