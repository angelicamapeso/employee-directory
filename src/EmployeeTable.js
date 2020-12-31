import React from "react";
import API from "./utils/API.js";

class EmployeeTable extends React.Component {
  state = {
    employees: [],
    filters: {
      name: "",
    },
  };

  changeNameFilter = event => {
    this.setState({ filters: { name: event.target.value } });
  };

  filterEmployees = () => {
    if (this.state.filters.name.length > 0) {
      const re = new RegExp(`^${this.state.filters.name}`, "i");
      return this.state.employees.filter(employee => {
        const match = employee.name.first.match(re);
        return match && match[0] !== "";
      });
    } else {
      return this.state.employees;
    }
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
                  value={this.state.filters.name}
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
                    <td>{employee.name.first}</td>
                    <td>{employee.name.last}</td>
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
