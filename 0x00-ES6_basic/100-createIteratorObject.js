export default function createIteratorObject(report) {
  // Get all employees from the report's allEmployees object
  const allEmployees = report.allEmployees;

  // Create a generator function to yield each employee
  function* employeeIterator() {
    for (const department in allEmployees) {
      for (const employee of allEmployees[department]) {
        yield employee; // Yield each employee
      }
    }
  }

  // Return the generator function as an iterator
  return employeeIterator();
}

