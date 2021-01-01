import React from "react";
import "./style.css";
import { SORT, SORT_UP, SORT_DOWN } from "./../utils/sort";

function THSort(props) {
  let iconName;
  switch (props.icon) {
    case SORT_DOWN:
      iconName = "fa-sort-down";
      break;
    case SORT_UP:
      iconName = "fa-sort-up";
      break;
    case SORT:
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
