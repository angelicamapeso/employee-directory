export const EMPLOYEE_TITLES = [
  "Web Designer",
  "Front-End Developer",
  "Back-End Developer",
  "Full-Stack Developer",
  "Dev Ops",
  "UI Designer",
  "UX Designer",
  "Interaction Designer",
];

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
