import React from "react";
import API from "./utils/API.js";

class EmployeeTable extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    API.getEmployees().then(employees => {
      this.setState({ employees }, function () {
        console.log(this.state.employees);
      });
    });
  }

  render() {
    return <h1>Employee Table</h1>;
  }
}

export default EmployeeTable;
