const fs = require('fs');

function countStudents (path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Remove the header line
    const headers = lines.shift();

    // Initialize the student counters and field lists
    const studentCount = lines.length;
    const fields = {};

    // Process each line
    lines.forEach(line => {
      const [firstname, lastname, age, field] = line.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    // Log the total number of students
    console.log(`Number of students: ${studentCount}`);

    // Log the number of students in each field and their first names
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
