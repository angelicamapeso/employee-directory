import React from "react";
import THSort from "./THSort";

import API from "./utils/API.js";

import { EMPLOYEE_TITLES, filterEmployeeName } from "./utils/filter.js";
import { SORT, getSortState, sortName } from "./utils/sort.js";
import { formatName, formatToId } from "./utils/format.js";

const employeeTitleFilters = EMPLOYEE_TITLES.reduce(
  (obj, title) => Object.assign(obj, { [title]: true }),
  {}
);

class EmployeeTable extends React.Component {
  state = {
    employees: [],
    filters: {
      name: new RegExp(),
      ...employeeTitleFilters,
    },
    sort: {
      firstName: SORT,
      lastName: SORT,
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

  changeNameSort = sortName => {
    const currentSort = this.state.sort;
    Object.keys(currentSort).forEach(key => {
      if (key !== sortName) {
        currentSort[key] = SORT;
      }
    });
    currentSort[sortName] = getSortState(currentSort[sortName]);
    this.setState({
      sort: currentSort,
    });
  };

  getEmployees = () => {
    const filteredEmployees = filterEmployeeName(
      this.state.employees,
      this.state.filters.name
    );
    if (this.state.sort.firstName !== SORT) {
      return sortName(filteredEmployees, "first", this.state.sort.firstName);
    } else if (this.state.sort.lastName !== SORT) {
      return sortName(filteredEmployees, "last", this.state.sort.lastName);
    } else {
      return filteredEmployees;
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
            <h1>Employee Table</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form>
              <div className="form-group">
                <label htmlFor="name-filter">Filter by name:</label>
                <input
                  id="name-filter"
                  type="text"
                  className="form-control"
                  placeholder="Type a name to begin filtering"
                  onChange={this.changeNameFilter}
                />
              </div>
              <div className="form-group d-flex flex-wrap">
                {EMPLOYEE_TITLES.map((title, index) => (
                  <div className="form-check w-25" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={title}
                      defaultChecked={this.state.filters[title]}
                      id={formatToId(title)}
                    />
                    <label
                      className="form-check-label pr-3 pb-2"
                      htmlFor={formatToId(title)}
                    >
                      {title}
                    </label>
                  </div>
                ))}
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-bordered table-hover table-sm">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Title</th>
                  <THSort
                    title="First Name"
                    icon={this.state.sort.firstName}
                    onClick={() => {
                      this.changeNameSort("firstName");
                    }}
                  />
                  <THSort
                    title="Last Name"
                    icon={this.state.sort.lastName}
                    onClick={() => {
                      this.changeNameSort("lastName");
                    }}
                  />
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Postal Code</th>
                </tr>
              </thead>
              <tbody>
                {this.getEmployees().map((employee, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={employee.picture.thumbnail}
                        alt={`${employee.name.first} ${employee.name.last}`}
                        style={{ borderRadius: "50%" }}
                      />
                    </td>
                    <td>{employee.title}</td>
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
