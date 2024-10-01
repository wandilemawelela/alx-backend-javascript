export default function createReportObject(employeesList) {
  // Create the report object
  const report = {
    allEmployees: {
      ...employeesList, // Spread syntax to include all employees by department
    },
    getNumberOfDepartments() {
      return Object.keys(employeesList).length; // Return the number of keys (departments)
    },
  };

  return report;
}

