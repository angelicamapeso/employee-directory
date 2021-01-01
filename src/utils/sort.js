/* Every sort function takes a list (assumped employee list)
and returns a sorted array */

export function sortName(employeeList, sortCol, dir) {
  const employeeListCopy = [...employeeList];
  return employeeListCopy.sort(
    (empA, empB) =>
      empA.name[sortCol].localeCompare(empB.name[sortCol]) *
      (dir === "sort-up" ? 1 : dir === "sort-down" ? -1 : 0)
  );
}
