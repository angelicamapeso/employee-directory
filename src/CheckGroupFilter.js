import React from "react";
import { formatToId } from "./utils/format";

/* A group of checkbox items
used as filters for data*/

function CheckGroupFilter(props) {
  return (
    <div className="form-group d-flex flex-wrap">
      {props.checkList.map((checkItem, index) => (
        <div className="form-check w-25" key={index}>
          <input
            className="form-check-input"
            type="checkbox"
            value={checkItem}
            defaultChecked={props.filters[checkItem]}
            id={formatToId(checkItem)}
            onChange={() => {
              props.update(checkItem);
            }}
          />
          <label
            className="form-check-label pr-3 pb-2"
            htmlFor={formatToId(checkItem)}
          >
            {checkItem}
          </label>
        </div>
      ))}
    </div>
  );
}

export default CheckGroupFilter;
