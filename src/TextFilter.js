import React from "react";

function TextFilter(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.title}</label>
      <input
        id={props.id}
        type="text"
        className="form-control"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}

export default TextFilter;
