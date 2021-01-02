import React from "react";

// Components
import THSort from "./THSort";
import TextFilter from "./TextFilter";
import CheckGroupFilter from "./CheckGroupFilter";

// Data
import API from "./utils/API.js";
import { EMPLOYEE_TITLES } from "./utils/employeeTitles";

// Filter
import {
  FILTER_OBJ,
  modifyNameFilter,
  modifyTitleFilter,
  filterEmployees,
} from "./utils/filter.js";

// Sort
import { SORT_OBJ, SORT, getSortState, sortName } from "./utils/sort.js";

// Formatters
import { formatName } from "./utils/format.js";

class EmployeeTable extends React.Component {
  state = {
    employees: [],
    filters: FILTER_OBJ,
    sort: SORT_OBJ,
  };

  changeNameFilter = event => {
    this.setState({
      filters: modifyNameFilter(event.target.value, this.state.filters),
    });
  };

  changeTitleFilter = title => {
    this.setState({
      filters: modifyTitleFilter(title, this.state.filters),
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
    const filteredEmployees = filterEmployees(
      this.state.employees,
      this.state.filters
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
              <TextFilter
                id="name-filter"
                title="Filter by name:"
                placeholder="Type a name to begin filtering"
                onChange={this.changeNameFilter}
              />
              <CheckGroupFilter
                filters={this.state.filters}
                checkList={EMPLOYEE_TITLES}
                update={this.changeTitleFilter}
              />
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
