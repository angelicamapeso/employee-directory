import React from "react";

// Bolds matched text

function TextMatch(props) {
  const match = props.text.match(props.matchWith);
  if (match) {
    return (
      <React.Fragment>
        <strong>{match[0]}</strong>
        {props.text.slice(match[0].length)}
      </React.Fragment>
    );
  } else {
    return props.text;
  }
}

export default TextMatch;
