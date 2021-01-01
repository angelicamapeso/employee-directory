import React from "react";
import "./style.css";

function THSort(props) {
  let iconName;
  switch (props.icon) {
    case "sort-down":
      iconName = "fa-sort-down";
      break;
    case "sort-up":
      iconName = "fa-sort-up";
      break;
    case "sort":
    default:
      iconName = "fa-sort";
  }
  return (
    <th scope="col" className="th-sort" onClick={props.onClick}>
      <p className="d-flex justify-content-between mb-0 align-items-center">
        {props.title}
        <i className={"fas " + iconName}></i>
      </p>
    </th>
  );
}

export default THSort;
