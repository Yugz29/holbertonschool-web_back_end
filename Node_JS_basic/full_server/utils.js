import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').slice(1);
      const students = lines.filter((line) => line !== '');
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

      resolve(groups);
    });
  });
};

export default readDatabase;
