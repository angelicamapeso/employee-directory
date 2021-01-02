import React from "react";

// Formatters
import { formatName } from "./utils/format.js";

function EmployeeRow(props) {
  return (
    <tr>
      <td>
        <img
          src={props.employee.picture.thumbnail}
          alt={`${props.employee.name.first} ${props.employee.name.last}`}
          style={{ borderRadius: "50%" }}
        />
      </td>
      <td>{props.employee.title}</td>
      <td>{formatName(props.employee.name.first, props.nameMatch)}</td>
      <td>{formatName(props.employee.name.last, props.nameMatch)}</td>
      <td>{props.employee.email}</td>
      <td>{props.employee.phone}</td>
      <td>{props.employee.location.postcode}</td>
    </tr>
  );
}

export default EmployeeRow;
