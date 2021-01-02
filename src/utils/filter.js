/* Each of the filter functions
takes an array (assumped employee array) and returns
a filtered array */

export function filterEmployeeName(employeeList, nameFilter) {
  return employeeList.filter(
    employee =>
      nameFilter.test(employee.name.first) ||
      nameFilter.test(employee.name.last)
  );
}

export function filterEmployeeTitle(employeeList, filters, employeeTitles) {
  const allowedTitles = [];
  for (const title of employeeTitles) {
    if (filters[title]) {
      allowedTitles.push(title);
    }
  }
  return employeeList.filter(employee =>
    allowedTitles.includes(employee.title)
  );
}
