import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').slice(1); // trim() important!
      const groups = {};

      for (let i = 0; i < lines.length; i += 1) {
        const line = lines[i].trim(); // trim chaque ligne
        
        if (line === '') continue; // ignore les lignes vides
        
        const parts = line.split(',');
        
        // Vérifier que la ligne a 4 colonnes et un prénom valide
        if (parts.length === 4 && parts[0] && parts[3]) {
          const firstname = parts[0];
          const field = parts[3];

          if (!groups[field]) {
            groups[field] = [];
          }
          groups[field].push(firstname);
        }
      }

      resolve(groups);
    });
  });
};

export default readDatabase;
