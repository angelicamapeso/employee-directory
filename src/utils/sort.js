/*****************************/
// Sort states
/*****************************/
/*
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

/*****************************/
// Setting up Sort Object
/*****************************/

export const NAME_SORT = [
  {
    title: "First Name",
    nameField: "first",
  },
  {
    title: "Last Name",
    nameField: "last",
  },
];
// Reducing NAME_SORT items to keys set to default SORT state
const nameSortKeys = NAME_SORT.reduce(
  (obj, nameObj) => Object.assign(obj, { [nameObj.title]: SORT }),
  {}
);

/*** Main object holding all sorts for EmployeeTable ***/
export const SORT_OBJ = {
  ...nameSortKeys,
};

/*****************************/
// Modifying sort
/*****************************/
// There can be only one active sort
// All other sort properties are reset when another
// is changed
export function modifySort(sortName, currentSort) {
  const sortToModify = currentSort;
  Object.keys(sortToModify).forEach(key => {
    if (key !== sortName) {
      sortToModify[key] = SORT;
    }
  });
  sortToModify[sortName] = getSortState(sortToModify[sortName]);
  return sortToModify;
}

/*****************************/
// Sort functions
/*****************************/
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

export function sortEmployees(employeeList, sort) {
  for (const nameObj of NAME_SORT) {
    if (sort[nameObj.title] !== SORT) {
      return sortName(employeeList, nameObj.nameField, sort[nameObj.title]);
    }
  }

  return employeeList;
}
