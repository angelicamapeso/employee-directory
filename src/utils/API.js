const API = {
  getEmployees() {
    return fetch(
      "https://randomuser.me/api/?results=50&nat=ca&exc=login,gender,registered,nat,id&noinfo"
    )
      .then(response => response.json())
      .then(obj => obj.results);
  },
};

export default API;
