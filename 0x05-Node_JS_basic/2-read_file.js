const { error } = require('console');
const fs = require('fs');

function countStudents(dbFilePath) {
  try {
    const data = fs.readFileSync(dbFilePath, 'utf8');
    lines = data.split('\n');

    numberOfStudents = lines.length - 1;
    console.log(`Number of students: ${numberOfStudents}`)

    firstNameCs = '';
    firstNameSwe = '';
    CsCount = 0;
    SweCount = 0;

    for (let i = 1; i < numberOfStudents + 1; i++) {
      const student = lines[i];
      
      const firstName = student.split(',')[0]
      const field = student.split(',')[3]
      
      if (field === 'CS') {
        CsCount += 1
        firstNameCs += firstName + ', ';
      } else if (field === 'SWE') {
        SweCount += 1;
        firstNameSwe += firstName + ', ';
      }
    }

    firstNameCS = firstNameCs.slice(0, -2);
    firstNameSwe = firstNameSwe.slice(0, -2);

    console.log(`Number of Students in CS: ${CsCount}. List: ${firstNameCS}`)
    console.log(`Number of Students in SWE: ${SweCount}. List: ${firstNameSwe}`)
    
  } catch (err) {
    console.log(err)
    throw new Error('Cannot load the database')
  }
}

module.exports = countStudents;
