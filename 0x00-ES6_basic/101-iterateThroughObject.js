export default function iterateThroughObject(reportWithIterator) {
  // Initialize an array to hold employee names
  const employeeNames = [];

  // Iterate through the iterator to get each employee name
  for (const employee of reportWithIterator) {
    employeeNames.push(employee); // Add each employee name to the array
  }

  // Return the employee names joined by '|'
  return employeeNames.join(' | ');
}
