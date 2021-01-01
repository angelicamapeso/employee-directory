/* Every sort function takes a list (assumped employee list)
and returns a sorted array */

export function sortFirstNameAlpha(employeeList) {
  const employeeListCopy = [...employeeList];
  return employeeListCopy.sort((empA, empB) =>
    empA.name.first.localeCompare(empB.name.first)
  );
}
