/* The potential titles that an employee can have. These
are randomly assigned to the users from the Random User API.*/

export const EMPLOYEE_TITLES = [
  "Front-End Developer",
  "Back-End Developer",
  "Full-Stack Developer",
  "Dev Ops",
];

export function getRandomTitle() {
  return EMPLOYEE_TITLES[Math.floor(Math.random() * EMPLOYEE_TITLES.length)];
}
