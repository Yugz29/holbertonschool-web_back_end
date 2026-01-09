import readDatabase from '../utils';

const DATABASE = process.argv[2];

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(DATABASE)
      .then((data) => {
        const fields = Object.keys(data);
        fields.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        const lines = ['This is the list of our students'];

        fields.forEach((field) => {
            const students = data[field];
            const count = students.length;
            const list = students.join(', ');
            lines.push(`Number of students in ${field}: ${count}. List: ${list}`);
        });

        const output = lines.join('\n');
        
        res.status(200).send(output);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
        return res.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(DATABASE)
      .then((data) => {
        const students = data[major];
        const list = students.join(', ');
        res.status(200).send(`List: ${list}`);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }
}

export default StudentsController;
