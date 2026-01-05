const fs = require('fs');

function countStudents(path) {
  let students;

  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').slice(1);
    students = lines.filter((line) => line !== '');
    console.log(`Number of students: ${students.length}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const groups = {
    CS: [],
    SWE: [],
  };

  for (let i = 0; i < students.length; i += 1) {
    const line = students[i];
    const parts = line.split(',');
    const firstname = parts[0];
    const field = parts[3];
    groups[field].push(firstname);
  }

  console.log(`Number of students in CS: ${groups.CS.length}. List: ${groups.CS.join(', ')}`);
  console.log(`Number of students in SWE: ${groups.SWE.length}. List: ${groups.SWE.join(', ')}`);
}

module.exports = countStudents;
