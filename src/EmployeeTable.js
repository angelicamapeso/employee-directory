import React from "react";
import API from "./utils/API.js";

import { filterEmployeeName } from "./utils/filter.js";
import { formatName } from "./utils/format.js";

class EmployeeTable extends React.Component {
  state = {
    employees: [],
    filters: {
      name: new RegExp(),
    },
  };

  changeNameFilter = event => {
    this.setState({
      filters: {
        name: event.target.value
          ? new RegExp(`^${event.target.value}`, "i")
          : new RegExp(),
      },
    });
  };

  filterEmployees = () => {
    return filterEmployeeName(this.state.employees, this.state.filters.name);
  };

  componentDidMount() {
    API.getEmployees().then(employees => {
      this.setState({ employees }, function () {
        console.log(this.state.employees);
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="py-3">Employee Table</h1>
            <form>
              <div className="form-group">
                <label>Filter by name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type a name to begin filtering"
                  // value={this.state.filters.name}
                  onChange={this.changeNameFilter}
                />
              </div>
            </form>
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Postal Code</th>
                </tr>
              </thead>
              <tbody>
                {this.filterEmployees().map((employee, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={employee.picture.thumbnail}
                        alt={`${employee.name.first} ${employee.name.last}`}
                        style={{ borderRadius: "50%" }}
                      />
                    </td>
                    <td>
                      {formatName(employee.name.first, this.state.filters.name)}
                    </td>
                    <td>
                      {formatName(employee.name.last, this.state.filters.name)}
                    </td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.location.postcode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeTable;
