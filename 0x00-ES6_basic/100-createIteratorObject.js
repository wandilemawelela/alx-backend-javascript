export default function createIteratorObject(report) {
  // Use object destructuring to get allEmployees from the report
  const { allEmployees } = report;

  // Create a generator function to yield each employee
  function* employeeIterator() {
    for (const department in allEmployees) {
      if (Object.prototype.hasOwnProperty.call(allEmployees, department)) {
        for (const employee of allEmployees[department]) {
          yield employee; // Yield each employee
        }
      }
    }
  }

  // Return the generator function as an iterator
  return employeeIterator();
}
