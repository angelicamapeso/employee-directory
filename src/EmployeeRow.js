import React from "react";

// Formatters
import TextMatch from "./TextMatch";

function EmployeeRow(props) {
  return (
    <tr>
      <td className="align-middle">
        <img
          src={props.employee.picture.thumbnail}
          alt={`${props.employee.name.first} ${props.employee.name.last}`}
          style={{ borderRadius: "50%" }}
        />
      </td>
      <td className="align-middle">{props.employee.title}</td>
      <td className="align-middle">
        <TextMatch
          text={props.employee.name.first}
          matchWith={props.nameMatch}
        />
      </td>
      <td className="align-middle">
        <TextMatch
          text={props.employee.name.last}
          matchWith={props.nameMatch}
        />
      </td>
      <td className="align-middle">{props.employee.email}</td>
      <td className="align-middle">{props.employee.phone}</td>
      <td className="align-middle">{props.employee.location.postcode}</td>
    </tr>
  );
}

export default EmployeeRow;
