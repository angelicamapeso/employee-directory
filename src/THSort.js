import React from "react";

function THSort(props) {
  let iconName;
  switch (props.state) {
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
    <th scope="col">
      <p className="d-flex justify-content-between mb-0 align-items-center">
        {props.title}
        <i className={"fas " + iconName}></i>
      </p>
    </th>
  );
}

export default THSort;
