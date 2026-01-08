const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').slice(1);
        const students = lines.filter((line) => line !== '');
        let output = `Number of students: ${students.length}\n`;
  
        const groups = { CS: [], SWE: [] };

        for (let i = 0; i < students.length; i += 1) {
          const line = students[i];
          const parts = line.split(',');
          const firstname = parts[0];
          const field = parts[3];
          groups[field].push(firstname);
        }

        output += `Number of students in CS: ${groups.CS.length}. List: ${groups.CS.join(', ')}\n`;
        output += `Number of students in SWE: ${groups.SWE.length}. List: ${groups.SWE.join(', ')}`;
        
        resolve(output);
      }
    });
  });
}

module.exports = countStudents;
