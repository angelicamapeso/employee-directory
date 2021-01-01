import { getRandomTitle } from "./filter";

const API = {
  getEmployees() {
    return fetch(
      "https://randomuser.me/api/?results=50&nat=ca&exc=login,gender,registered,nat,id&noinfo"
    )
      .then(response => response.json())
      .then(obj => addEmployeeTitles(obj.results));
  },
};

function addEmployeeTitles(userList) {
  return userList.map(user => {
    user.title = getRandomTitle();
    return user;
  });
}

export default API;
