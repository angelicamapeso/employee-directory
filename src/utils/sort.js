/* Deals with the different sort states that are possible:
  SORT = default (non-sorted)
  SORT_UP = ASC sort
  SORT_DOWN = DESC sort
 */
export const SORT_STATES = ["sort", "sort-up", "sort-down"];
export const [SORT, SORT_UP, SORT_DOWN] = SORT_STATES;

export function getSortState(currentSort) {
  let indexNewSort = SORT_STATES.findIndex(state => state === currentSort) + 1;
  return indexNewSort === SORT_STATES.length
    ? SORT_STATES[0]
    : SORT_STATES[indexNewSort];
}

/* Every sort function takes a list (assumped employee list)
and returns a sorted array */
export function sortName(employeeList, sortCol, dir) {
  const employeeListCopy = [...employeeList];
  return employeeListCopy.sort(
    (empA, empB) =>
      empA.name[sortCol].localeCompare(empB.name[sortCol]) *
      (dir === SORT_UP ? 1 : dir === SORT_DOWN ? -1 : 0)
  );
}
