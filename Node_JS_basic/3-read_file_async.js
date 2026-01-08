const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').slice(1);
        const students = lines.filter((line) => line !== '');
        let output = `Number of students: ${students.length}`;
  
        const groups = {};

        for (let i = 0; i < students.length; i += 1) {
          const line = students[i];
          const parts = line.split(',');
          const firstname = parts[0];
          const field = parts[3];

          if (!groups[field]) {
            groups[field] = [];
          }
          groups[field].push(firstname);
        }

        const fields = Object.keys(groups).sort();
        for (const field of fields) {
          output += `\nNumber of students in ${field}: ${groups[field].length}. List: ${groups[field].join(', ')}`;
        }

        resolve(output);
      }
    });
  });
}

module.exports = countStudents;
