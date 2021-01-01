export const EMPLOYEE_TITLES = [
  "Front-End Developer",
  "Back-End Developer",
  "Full-Stack Developer",
  "Dev Ops",
];

export function getRandomTitle() {
  return EMPLOYEE_TITLES[Math.floor(Math.random() * EMPLOYEE_TITLES.length)];
}

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
